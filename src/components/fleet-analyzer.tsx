"use client"

import React, { useState, type FunctionComponent } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Alert, AlertTitle } from '@/components/ui/alert'
import * as FleetInterfaces from './../interfaces/fleetInterfaces';
import { shipStats } from './../constants/ships';
import { calculateFleetEfficiency } from "./fleetCalculations";
import { 
  normalizeDscanShipName,
  findShipByAlias,
  parseFleetData,
  validateShipData
} from '../utils/shipUtils';
import { 
  parseDScan, 
  parseFleetComposition, 
  ParsedShipEntry, 
  normalizeShipName,
  shipAliases,
  ParseResult 
} from '../utils/fleetParser';
import FleetComparison  from './fleet-comparison'
import { ShipType, ShipSize } from './../types/types';
import FleetRecommendations from './fleet-recommendations'


// Интерфейс для структуры данных D-Scan
interface DScanEntry {
  id: string;
  distance: string;
  shipName: string;
  player?: string;
}

// Интерфейс для структуры данных Fleet Composition
interface FleetCompositionEntry {
  pilot: string;
  role: string;
  shipName: string;
  status: string;
}

function parseDScanLine(line: string): { shipName: string | null; playerName?: string } {
  // D-Scan format: <ID>\t<distance>\t<ship name>[\t<player name>]
  const parts = line.split('\t');
  if (parts.length < 3) return { shipName: null };

  const rawShipName = parts[2].trim();
  const playerName = parts[3]?.trim();
  const shipName = normalizeDscanShipName(rawShipName);

  return { 
    shipName,
    playerName 
  };
}

function parseFleetCompPosition(line: string): { shipName: string | null; pilotName?: string; role?: string } {
  // Fleet Composition format: <pilot name>\t<role>\t<ship name>\t<status>
  const parts = line.split('\t');
  if (parts.length < 3) return { shipName: null };

  const pilotName = parts[0].trim();
  const role = parts[1].trim();
  const rawShipName = parts[2].trim();
  const shipName = findShipByAlias(rawShipName);

  return {
    shipName,
    pilotName,
    role
  };
}

interface ShipEntry {
  name: string;
  pilot?: string;
  role?: string;
  stats: FleetInterfaces.ShipStats;
}

interface ParsedFleetData {
  ships: ShipEntry[];
  unknownShips: string[];
  totalParsed: number;
  totalUnknown: number;
  parseSuccess: boolean;
}

function getTypeDescription(type: string): string {
  const descriptions: Record<string, string> = {
    logistics: "Корабли логистической поддержки, обеспечивающие ремонт союзников",
    dps: "Корабли, специализирующиеся на нанесении урона",
    ewar: "Корабли электронной войны, обеспечивающие тактическое преимущество"
  };
  return descriptions[type] || type;
}



const FleetAnalyzer: FunctionComponent = () => {
  const [inputText, setInputText] = useState('');
  const [ownFleet, setOwnFleet] = useState('');
  const [enemyFleet, setEnemyFleet] = useState('');
  const [results, setResults] = useState<FleetInterfaces.AnalysisResults | null>(null);
  const [error, setError] = useState('');

  
  const parseFleet = (fleetStr: string): string[] => {
    return fleetStr
      .split('\n')
      .map(ship => ship.trim())
      .filter(Boolean)
      .filter(ship => shipStats[ship]);
  };

  const [comparison, setComparison] = useState<FleetInterfaces.Comparison>({
    dpsAdvantage: 0,
    ehpAdvantage: 0,
    repAdvantage: 0,
    mobilityAdvantage: 0,
    composition: {
      advantage: [],
      disadvantage: []
    }
  });

  const calculateFleetStats = (ships: string[]): FleetInterfaces.FleetStats => {
    const stats = ships.reduce((acc: FleetInterfaces.FleetStats, shipName) => {
      const ship = shipStats[shipName]
      
      acc.ships.push(shipName)
      acc.totalEHP += ship.ehp
      acc.totalDPS += ship.dps
      acc.baseRepair += ship.repairPower
      acc.avgMobility += ship.mobility
      acc.avgEwarResistance += ship.ewarResistance
      acc.types[ship.type] = (acc.types[ship.type] || 0) + 1
      
      return acc
    }, {
      ships: [],
      totalEHP: 0,
      totalDPS: 0,
      baseRepair: 0,
      avgMobility: 0,
      avgEwarResistance: 0,
      types: {}
    })

    const shipCount = ships.length
    if (shipCount > 0) {
      stats.avgMobility /= shipCount
      stats.avgEwarResistance /= shipCount
    }

    const logistCount = stats.types.logistics || 0
    const repairEfficiency = logistCount > 0 ? 0.7 + (logistCount * 0.1) : 0
    stats.effectiveRepair = stats.baseRepair * repairEfficiency

    return stats
  }

  const calculateWinChance = (ownStats: FleetInterfaces.FleetStats, enemyStats: FleetInterfaces.FleetStats): number => {
    const powerRatio = (
      (ownStats.totalDPS * 0.4) +
      (ownStats.totalEHP * 0.3) +
      ((ownStats.effectiveRepair || 0) * 0.3)
    ) / (
      (enemyStats.totalDPS * 0.4) +
      (enemyStats.totalEHP * 0.3) +
      ((enemyStats.effectiveRepair || 0) * 0.3)
    )

    const compositionMultiplier = (
      (ownStats.avgMobility * 0.2) +
      (ownStats.avgEwarResistance * 0.2) +
      (ownStats.types.logistics ? 0.6 : 0.3)
    ) / (
      (enemyStats.avgMobility * 0.2) +
      (enemyStats.avgEwarResistance * 0.2) +
      (enemyStats.types.logistics ? 0.6 : 0.3)
    )

    const winChance = (powerRatio * compositionMultiplier * 50)
    return Math.min(Math.max(winChance, 5), 95)
  }

  const generateRecommendations = (ownStats: FleetInterfaces.FleetStats, enemyStats: FleetInterfaces.FleetStats): string[] => {
    const recommendations: string[] = []
  
    // DPS анализ
    const dpsRatio = ownStats.totalDPS / enemyStats.totalDPS
    if (dpsRatio < 0.8) {
      recommendations.push("Недостаточно DPS. Рассмотрите добавление DPS кораблей")
    } else if (dpsRatio > 1.5) {
      recommendations.push("У вас существенное преимущество по урону. Агрессивная тактика может быть эффективна")
    }
  
    // Логистика
    const effectiveRepair = ownStats.effectiveRepair || 0
    const enemyRepair = enemyStats.effectiveRepair || 0
    
    if (effectiveRepair < enemyStats.totalDPS * 0.3 && ownStats.ships.length > 3) {
      recommendations.push("Слабая логистическая поддержка. Добавьте логистов")
    }
    if (!ownStats.types.logistics && enemyStats.types.logistics) {
      recommendations.push("Отсутствие урона против вражеской откачки. Фокусируйте урон")
    }
    if (enemyRepair > ownStats.totalDPS * 0.5) {
      recommendations.push("Вражеская откачка очень сильна. Необходимо больше DPS или альфа-страйк")
    }
  
    // Состав флота
    if (ownStats.ships.length < enemyStats.ships.length * 0.7) {
      recommendations.push("Численное меньшинство. Избегайте прямого столкновения")
    }
  
    // Мобильность
    if (ownStats.avgMobility > enemyStats.avgMobility * 1.2) {
      recommendations.push("У вас преимущество в мобильности. Используйте кайтинг")
    } else if (ownStats.avgMobility < enemyStats.avgMobility * 0.8) {
      recommendations.push("Противник более мобилен. Старайтесь удерживать оптимальную дистанцию")
    }
  
    // EWAR анализ
    if (ownStats.types.ewar && !enemyStats.types.ewar) {
      recommendations.push("Используйте преимущество EWAR для контроля боя")
    }
    if (!ownStats.types.ewar && enemyStats.types.ewar) {
      recommendations.push("Будьте готовы к вражескому EWAR. Держитесь ближе к логистам")
    }
  
    // Размер кораблей
    const ownLargeShips = ownStats.ships.filter(ship => shipStats[ship].size === 'large').length
    const enemyLargeShips = enemyStats.ships.filter(ship => shipStats[ship].size === 'large').length
    
    if (ownLargeShips > enemyLargeShips * 1.5) {
      recommendations.push("У вас больше крупных кораблей. Используйте их танк эффективно")
    }
  
    return recommendations
  }

  const calculateTargetPriorities = (enemyFleet: string[], ownStats: FleetInterfaces.FleetStats): FleetInterfaces.TargetPriority[] => {
    return enemyFleet.map(shipName => {
      const ship = shipStats[shipName]
      let priority = ship.priority

      if (ship.type === 'logistics') {
        const logistCount = enemyFleet.filter(s => shipStats[s].type === 'logistics').length
        if (logistCount <= 2) priority += 2
      }

      const totalEnemyDPS = enemyFleet.reduce((sum, s) => sum + shipStats[s].dps, 0)
      if (ship.dps > totalEnemyDPS * 0.25) priority += 1

      const timeToKill = ship.ehp / Math.max(1, ownStats.totalDPS - ship.repairPower)

      return {
        ship: shipName,
        priority,
        timeToKill,
        stats: ship
      }
    }).sort((a, b) => {
      if (Math.abs(b.priority - a.priority) > 0.5) return b.priority - a.priority
      return a.timeToKill - b.timeToKill
    })
  }

  const validateFleet = (fleetStr: string): { valid: boolean; unknownShips: string[] } => {
    const ships = fleetStr
      .split('\n')
      .map(ship => ship.trim())
      .filter(ship => ship.length > 0);
  
    const unknownShips = ships.filter(ship => !shipStats[ship]);
    
    return {
      valid: unknownShips.length === 0,
      unknownShips
    };
  };

  const analyzeFleets = () => {
    try {
      setError('');
      
      const ownShips = parseFleet(ownFleet);
      const enemyShips = parseFleet(enemyFleet);
  
      if (ownShips.length === 0 || enemyShips.length === 0) {
        setError('Введите составы флотов');
        return;
      }
  
      const ownStats = calculateFleetStats(ownShips);
      const enemyStats = calculateFleetStats(enemyShips);
      const targetPriorities = calculateTargetPriorities(enemyShips, ownStats);
      const winChance = calculateWinChance(ownStats, enemyStats);
      const recommendations = generateRecommendations(ownStats, enemyStats);
      const alphaAnalysis = calculateAlphaStrike(ownStats, enemyStats);
      const tradeAnalysis = calculateTradeEfficiency(ownStats, enemyStats);
      const criticalPoints = analyzeCriticalPoints(ownStats, enemyStats, alphaAnalysis, tradeAnalysis);
      const ownEfficiency = calculateFleetEfficiency(ownStats);
      const enemyEfficiency = calculateFleetEfficiency(enemyStats);
  
      setResults({
        ownStats,
        enemyStats,
        targetPriorities,
        winChance,
        recommendations,
        alphaAnalysis,
        tradeAnalysis,
        criticalPoints,
        ownEfficiency,
        enemyEfficiency
      });
  
    } catch (err) {
      setError(`Ошибка анализа флотов: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  const calculateAlphaStrike = (ownStats: FleetInterfaces.FleetStats, enemyStats: FleetInterfaces.FleetStats): FleetInterfaces.AlphaAnalysis => {
    // Расчёт альфа-урона (предполагаем 3-секундный цикл)
    const totalAlpha = ownStats.totalDPS * 3;
    const enemyRepPerCycle = (enemyStats.effectiveRepair || 0) * 3;
    
    // Может ли флот пробить откачку
    const canBreakRep = totalAlpha > enemyRepPerCycle;
    
    // Время до пробития откачки (в секундах)
    const timeToBreakRep = canBreakRep 
      ? (enemyRepPerCycle / (totalAlpha - enemyRepPerCycle)) * 3
      : Infinity;
  
    // Сколько ещё DPS кораблей нужно для пробития откачки
    const minShipsToBreakRep = !canBreakRep
      ? Math.ceil(((enemyRepPerCycle - totalAlpha) / 3) / 1000) // Предполагаем средний DPS 1000
      : 0;
  
    return {
      totalAlpha,
      canBreakRep,
      timeToBreakRep,
      minShipsToBreakRep
    };
  };

  
  const calculateTradeEfficiency = (ownStats: FleetInterfaces.FleetStats, enemyStats: FleetInterfaces.FleetStats): FleetInterfaces.TradeAnalysis => {
    // Среднее время до потери первого корабля
    const avgEHPPerShip = ownStats.totalEHP / ownStats.ships.length;
    const incomingDPSPerShip = enemyStats.totalDPS / ownStats.ships.length;
    const effectiveRepPerShip = (ownStats.effectiveRepair || 0) / ownStats.ships.length;
    
    const timeToLoseFirstShip = avgEHPPerShip / Math.max(incomingDPSPerShip - effectiveRepPerShip, 1);
    
    // Потенциальные потери в минуту
    const potentialLossesPerMinute = 60 / timeToLoseFirstShip;
    
    // Соотношение убийств (сколько врагов мы можем убить за каждый наш потерянный корабль)
    const enemyTimeToLose = (enemyStats.totalEHP / enemyStats.ships.length) / 
      Math.max(ownStats.totalDPS / enemyStats.ships.length - (enemyStats.effectiveRepair || 0) / enemyStats.ships.length, 1);
    
    const killTradeRatio = timeToLoseFirstShip / enemyTimeToLose;
    
    // Сколько времени флот может эффективно сражаться
    const sustainableTime = timeToLoseFirstShip * (ownStats.ships.length / 3); // Предполагаем, что флот эффективен до потери трети состава
    
    return {
      timeToLoseFirstShip,
      potentialLossesPerMinute,
      killTradeRatio,
      sustainableTime
    };
  };
  
  const analyzeCriticalPoints = (
    ownStats: FleetInterfaces.FleetStats,
    enemyStats: FleetInterfaces.FleetStats,
    alphaAnalysis: FleetInterfaces.AlphaAnalysis,
    tradeAnalysis: FleetInterfaces.TradeAnalysis
  ): FleetInterfaces.CriticalPoint[] => {
    const criticalPoints: FleetInterfaces.CriticalPoint[] = [];
  
    // Точка пробития откачки
    if (alphaAnalysis.canBreakRep) {
      criticalPoints.push({
        type: 'advantage',
        description: 'Пробитие вражеской откачки',
        timeToReach: alphaAnalysis.timeToBreakRep,
        recommendation: 'Фокусируйте урон для пробития откачки'
      });
    }
  
    // Точка потери первого корабля
    criticalPoints.push({
      type: tradeAnalysis.killTradeRatio > 1 ? 'warning' : 'critical',
      description: 'Вероятная потеря первого корабля',
      timeToReach: tradeAnalysis.timeToLoseFirstShip,
      recommendation: tradeAnalysis.killTradeRatio > 1 
        ? 'Приготовьтесь к перераспределению откачки'
        : 'Рассмотрите отступление или смену тактики'
    });
  
    // Точка критической потери DPS
    const timeToCriticalDPSLoss = tradeAnalysis.timeToLoseFirstShip * 
      (ownStats.types.dps ? Math.ceil(ownStats.ships.length * 0.3) : Infinity);
    
    if (timeToCriticalDPSLoss < Infinity) {
      criticalPoints.push({
        type: 'critical',
        description: 'Критическая потеря DPS (30% флота)',
        timeToReach: timeToCriticalDPSLoss,
        recommendation: 'Подготовьте план отступления'
      });
    }
  
    
    // Точка перелома по откачке
    if (ownStats.effectiveRepair && enemyStats.totalDPS) {
      const timeToRepBreakpoint = tradeAnalysis.timeToLoseFirstShip * 
        (ownStats.types.logistics ? Math.ceil(ownStats.ships.length * 0.5) : Infinity);
      
      if (timeToRepBreakpoint < Infinity) {
        criticalPoints.push({
          type: 'critical',
          description: 'Потеря эффективности откачки',
          timeToReach: timeToRepBreakpoint,
          recommendation: 'Критично сохранить оставшихся логистов'
        });
      }
    }
  
    return criticalPoints.sort((a, b) => a.timeToReach - b.timeToReach);
  };
  
  const handleFleetInput = (e: React.ChangeEvent<HTMLTextAreaElement>, isOwn: boolean) => {
    const inputText = e.target.value;
    
    // Сохраняем введенный текст в состояние
    if (isOwn) {
      setOwnFleet(inputText);
    } else {
      setEnemyFleet(inputText);
    }
    
    // Если это многострочный ввод или содержит табуляцию, не пытаемся парсить как одиночный корабль
    if (inputText.includes('\n') || inputText.includes('\t')) {
      return;
    }
    
    // Для одиночного корабля проверяем его наличие в базе
    if (inputText.trim()) {
      const normalizedName = normalizeShipName(inputText.trim());
      if (!shipStats[normalizedName] && !shipAliases[normalizedName.toLowerCase()]) {
        setError(`Корабль "${inputText.trim()}" не найден в базе данных`);
      } else {
        setError('');
      }
    }
  };

  // Обновляем обработчик вставки для D-Scan и Fleet Composition
  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>, isOwn: boolean) => {
    const pastedText = e.clipboardData.getData('text');
    
    try {
      e.preventDefault();
      
      // Одиночная строка без табуляции
      if (!pastedText.includes('\t') && !pastedText.includes('\n')) {
        const normalizedName = normalizeShipName(pastedText.trim());
        if (shipStats[normalizedName] || shipAliases[normalizedName.toLowerCase()]) {
          const shipValue = isOwn ? ownFleet : enemyFleet;
          const newValue = shipValue ? `${shipValue}\n${pastedText.trim()}` : pastedText.trim();
          
          if (isOwn) {
            setOwnFleet(newValue);
          } else {
            setEnemyFleet(newValue);
          }
          setError('');
          return;
        } else if (pastedText.trim()) {
          setError(`Корабль "${pastedText.trim()}" не найден в базе данных`);
          return;
        }
      }
  
      // Определяем формат данных
      const isFleetComp = pastedText.includes('\t') && 
                         (pastedText.toLowerCase().includes('docked') ||
                          pastedText.toLowerCase().includes('squad') ||
                          pastedText.toLowerCase().includes('wing') ||
                          pastedText.toLowerCase().includes('fleet commander'));
      
      console.log('Detected format:', isFleetComp ? 'Fleet Composition' : 'D-Scan');
      
      const parseResult = isFleetComp 
        ? parseFleetComposition(pastedText)
        : parseDScan(pastedText);
      
      if (parseResult.totalParsed === 0) {
        setError('Не удалось распознать корабли в скопированных данных');
        return;
      }
      
      // Преобразуем результаты парсинга в строку с кораблями
      const fleetString = parseResult.ships
        .flatMap((entry: ParsedShipEntry) => Array(entry.count).fill(entry.name))
        .join('\n');
      
      if (isOwn) {
        setOwnFleet(fleetString);
      } else {
        setEnemyFleet(fleetString);
      }
      
      if (parseResult.unknownShips.length > 0) {
        setError(`Предупреждение: следующие корабли не распознаны: ${
          parseResult.unknownShips.join(', ')
        }`);
      } else {
        setError('');
      }
      
    } catch (err) {
      console.error('Parse error:', err);
      setError(`Ошибка при обработке данных: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Card className="w-full max-w-5xl mx-auto shadow-lg">
        <CardHeader className="border-b bg-white">
          <CardTitle>EVE Online Fleet Analyzer</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Ваш флот
              <span className="text-xs text-gray-500 ml-2">(введите название корабля или вставьте данные из Fleet Composition)</span>
            </label>
            <textarea 
              className="w-full h-40 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ownFleet}
              onChange={(e) => handleFleetInput(e, true)}
              onPaste={(e) => handlePaste(e, true)}
              placeholder="Введите название корабля или вставьте данные Fleet Composition..."
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Вражеский флот
              <span className="text-xs text-gray-500 ml-2">(введите название корабля или вставьте данные D-Scan)</span>
            </label>
            <textarea 
              className="w-full h-40 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={enemyFleet}
              onChange={(e) => handleFleetInput(e, false)}
              onPaste={(e) => handlePaste(e, false)}
              placeholder="Введите название корабля или вставьте данные D-Scan..."
            />
          </div>
          </div>
          
          <button 
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={analyzeFleets}
          >
            Анализировать флоты
          </button>

          {error && (
            <Alert variant="destructive">
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}

          {results && (
            <div className="space-y-6">
              {/* Основной блок с важнейшими метриками */}
              <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Шанс на победу - теперь более заметный */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg text-white cursor-help"
                  title="Расчётная вероятность победы, основанная на соотношении DPS, EHP, Откачки и эффективности флотов">
                  <h3 className="text-xl font-bold mb-2">Шанс на победу</h3>
                  <div className="text-5xl font-bold mb-4">{Math.round(results.winChance)}%</div>
                  <div className="flex justify-between text-sm opacity-90">
                    <span>Ваш флот: {results.ownStats.ships.length} корабля</span>
                    <span>Враг: {results.enemyStats.ships.length} корабля</span>
                  </div>
                  
                </div>
                {/* Сравнительный анализ флотов */}
                {results && (
                    <FleetComparison
                      ownStats={results.ownStats}
                      enemyStats={results.enemyStats}
                    />
                  )}
                {/* Критические метрики */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Ключевые показатели</h3>
                  <div className="grid grid-cols-2 gap-4">
                  <div className="cursor-help" 
                    title="Время, необходимое для преодоления вражеской откачки. Если значение низкое - можно фокусировать урон">
                    <div className="text-sm text-gray-600">Время до пробития</div>
                      <div className="text-xl font-bold text-green-600">
                        {Math.round(results.alphaAnalysis.timeToBreakRep)}s
                      </div>
                    </div>
                    <div className="cursor-help" 
                    title="Ожидаемое время до потери первого корабля при текущем вражеском DPS и нашей откачки">
                    <div className="text-sm text-gray-600">Время до потери</div>
                      <div className="text-xl font-bold text-red-600">
                        {Math.round(results.tradeAnalysis.timeToLoseFirstShip)}s
                      </div>
                    </div>
                    <div className="cursor-help" 
                    title="Соотношение потерь. Показывает, сколько вражеских кораблей мы можем уничтожить за каждый потерянный">
                    <div className="text-sm text-gray-600">Обмен</div>
                      <div className="text-xl font-bold">
                        {results.tradeAnalysis.killTradeRatio.toFixed(1)}:1
                      </div>
                    </div>
                    <div className="cursor-help" 
                    title="Расчётное время эффективного боя до критической потери боеспособности">
                    <div className="text-sm text-gray-600">Устойчивость</div>
                      <div className="text-xl font-bold">
                        {Math.round(results.tradeAnalysis.sustainableTime)}s
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              

              {/* Критические точки и рекомендации */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Критические точки */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-help"
                  title="Ключевые моменты боя, требующие особого внимания">
                  Критические точки боя
                </h3>
                <div className="space-y-4">
                  {results.criticalPoints.map((point, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg cursor-help ${
                        point.type === 'advantage' ? 'bg-green-50 border-green-200' :
                        point.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-red-50 border-red-200'
                      } border`}
                      title={`
                        Тип: ${point.type}
                        Время: ${Math.round(point.timeToReach)}с
                        ${point.recommendation}
                      `}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">{point.description}</span>
                        <span className="text-sm">{Math.round(point.timeToReach)}s</span>
                      </div>
                      <p className="text-sm text-gray-600">{point.recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>

                {/* Тактические рекомендации */}
                {results && (
                  <FleetRecommendations
                    ownStats={results.ownStats}
                    enemyStats={results.enemyStats}
                    alphaAnalysis={results.alphaAnalysis}
                    tradeAnalysis={results.tradeAnalysis}
                  />
                )}
              </div>

              {/* Приоритеты целей */}
              <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 cursor-help"
                title="Список приоритетных целей, основанный на важности, времени убийства и угрозе">
                Приоритеты целей
              </h3>
              <div className="space-y-3">
                {results.targetPriorities.map((target, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-help"
                    title={`
                      Тип: ${target.stats.type}
                      TTK: ${Math.round(target.timeToKill)}с
                      DPS: ${target.stats.dps}
                      EHP: ${target.stats.ehp.toLocaleString()}
                      Приоритет: ${target.priority.toFixed(1)}
                      ${target.stats.repairPower ? `Откачка: ${target.stats.repairPower}/s` : ''}
                    `}
                  >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="font-medium text-gray-900">{target.ship}</span>
                            <span className="ml-2 text-sm text-gray-500">({target.stats.type})</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="block text-xs text-gray-500">TTK</span>
                            <span className="font-medium">{Math.round(target.timeToKill)}s</span>
                          </div>
                          <div>
                            <span className="block text-xs text-gray-500">DPS</span>
                            <span className="font-medium text-green-600">{target.stats.dps}</span>
                          </div>
                          <div>
                            <span className="block text-xs text-gray-500">EHP</span>
                            <span className="font-medium text-blue-600">{target.stats.ehp.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>

              {/* Детальная статистика флотов */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Статистика вашего флота */}
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Детальная статистика вашего флота</h3>
                    
                    {/* Основные показатели */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg cursor-help" title="Общее количество кораблей в составе флота">
                      <div className="text-sm text-gray-600">Всего кораблей</div>
                      <div className="text-xl font-bold">{results.ownStats.ships.length}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg cursor-help" 
                      title="Общий урон в секунду (Damage Per Second). Показывает максимальный теоретический урон всего флота">
                      <div className="text-sm text-gray-600">Общий DPS</div>
                      <div className="text-xl font-bold text-green-600">
                        {Math.round(results.ownStats.totalDPS).toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg cursor-help" 
                      title="Effective Hit Points - эффективное количество очков здоровья с учётом всех сопротивлений">
                      <div className="text-sm text-gray-600">Общий EHP</div>
                      <div className="text-xl font-bold text-blue-600">
                        {Math.round(results.ownStats.totalEHP).toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg cursor-help" 
                      title="Repairs Per Second - количество восстанавливаемых очков здоровья в секунду с учётом эффективности логистов">
                      <div className="text-sm text-gray-600">Общий RPS</div>
                      <div className="text-xl font-bold text-purple-600">
                        {Math.round(results.ownStats.effectiveRepair || 0).toLocaleString()}/s
                      </div>
                    </div>
                  </div>

                    {/* Эффективность */}
                    <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="cursor-help" 
                          title="Показывает эффективность урона флота относительно оптимального значения. Учитывает распределение DPS и типы кораблей">
                          DPS Эффективность
                        </span>
                        <span>{Math.round(results.ownEfficiency.dpsEfficiency)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all duration-300"
                          style={{ width: `${results.ownEfficiency.dpsEfficiency}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="cursor-help" 
                          title="Показывает эффективность защиты флота. Учитывает EHP, сопротивления и сигнатуру">
                          Танк Эффективность
                        </span>
                        <span>{Math.round(results.ownEfficiency.tankEfficiency)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${results.ownEfficiency.tankEfficiency}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="cursor-help" 
                          title="Эффективность логистической поддержки. Учитывает количество логистов, их тип и распределение ремонта">
                          Логистика Эффективность
                        </span>
                        <span>{Math.round(results.ownEfficiency.logisticsEfficiency)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 rounded-full transition-all duration-300"
                          style={{ width: `${results.ownEfficiency.logisticsEfficiency}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="cursor-help" 
                          title="Общая мобильность флота. Влияет на способность контролировать дистанцию и маневрировать">
                          Мобильность
                        </span>
                        <span>{Math.round(results.ownEfficiency.mobilityEfficiency)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-500 rounded-full transition-all duration-300"
                          style={{ width: `${results.ownEfficiency.mobilityEfficiency}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  </div>

                  {/* Состав флота */}
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-3 cursor-help" 
                      title="Распределение кораблей по типам в составе флота">
                      Состав флота
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(results.ownStats.types).map(([type, count]) => (
                        <div key={type} className="flex justify-between items-center p-2 bg-gray-50 rounded cursor-help"
                          title={getTypeDescription(type)}>
                          <span className="capitalize">{type}</span>
                          <span className="font-medium">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Статистика вражеского флота */}
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Детальная статистика врага</h3>
                    
                    {/* Основные показатели */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Всего кораблей</div>
                        <div className="text-xl font-bold">{results.enemyStats.ships.length}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Общий DPS</div>
                        <div className="text-xl font-bold text-green-600">
                          {Math.round(results.enemyStats.totalDPS).toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Общий EHP</div>
                        <div className="text-xl font-bold text-blue-600">
                          {Math.round(results.enemyStats.totalEHP).toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Общий RPS</div>
                        <div className="text-xl font-bold text-purple-600">
                          {Math.round(results.enemyStats.effectiveRepair || 0).toLocaleString()}/s
                        </div>
                      </div>
                    </div>

                    {/* Эффективность */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>DPS Эффективность</span>
                          <span>{Math.round(results.enemyEfficiency.dpsEfficiency)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full transition-all duration-300"
                            style={{ width: `${results.enemyEfficiency.dpsEfficiency}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Танк Эффективность</span>
                          <span>{Math.round(results.enemyEfficiency.tankEfficiency)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full transition-all duration-300"
                            style={{ width: `${results.enemyEfficiency.tankEfficiency}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Логистика Эффективность</span>
                          <span>{Math.round(results.enemyEfficiency.logisticsEfficiency)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded-full transition-all duration-300"
                            style={{ width: `${results.enemyEfficiency.logisticsEfficiency}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Мобильность</span>
                          <span>{Math.round(results.enemyEfficiency.mobilityEfficiency)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-500 rounded-full transition-all duration-300"
                            style={{ width: `${results.enemyEfficiency.mobilityEfficiency}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Состав флота */}
                  <div className="bg-white p-6 rounded-lg border shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-3">Состав флота</h4>
                    <div className="space-y-2">
                      {Object.entries(results.enemyStats.types).map(([type, count]) => (
                        <div key={type} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="capitalize">{type}</span>
                          <span className="font-medium">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="border-t bg-gray-50 p-4">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/api/placeholder/40/40"
                alt="Author avatar"
                className="rounded-full w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">From</span>
                <span className="text-sm text-gray-500">Kamil</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/sa1rex" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5 mr-1" />
                <span className="text-sm">GitHub</span>
              </a>
              <span className="text-sm text-gray-500">© 2024</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default FleetAnalyzer