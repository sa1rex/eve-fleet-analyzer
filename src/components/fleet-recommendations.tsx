import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ShieldAlert, Sword, Anchor, Navigation, Shield, Radio, Target, AlertTriangle } from 'lucide-react';

interface FleetStats {
  ships: string[];
  totalEHP: number;
  totalDPS: number;
  baseRepair: number;
  effectiveRepair?: number;
  avgMobility: number;
  avgEwarResistance: number;
  types: Record<string, number>;
}

interface FleetRecommendationsProps {
  ownStats: FleetStats;
  enemyStats: FleetStats;
  alphaAnalysis: {
    totalAlpha: number;
    canBreakRep: boolean;
    timeToBreakRep: number;
    minShipsToBreakRep: number;
  };
  tradeAnalysis: {
    timeToLoseFirstShip: number;
    potentialLossesPerMinute: number;
    killTradeRatio: number;
    sustainableTime: number;
  };
}

const FleetRecommendations: React.FC<FleetRecommendationsProps> = ({
  ownStats,
  enemyStats,
  alphaAnalysis,
  tradeAnalysis
}) => {
  const generateRecommendations = () => {
    const recommendations = [];

    // DPS Analysis
    const dpsRatio = ownStats.totalDPS / enemyStats.totalDPS;
    if (dpsRatio < 0.8) {
      recommendations.push({
        type: 'dps',
        priority: 'high',
        icon: <Sword className="w-5 h-5" />,
        title: 'Недостаточно DPS',
        description: 'Необходимо увеличить урон флота. Рассмотрите добавление DPS кораблей или смену фитов на более агрессивные.',
        tactics: ['Фокусируйте огонь на ключевых целях', 'Используйте альфа-страйки', 'Держитесь на оптимальной дистанции для ваших орудий']
      });
    }

    // Logistics Analysis
    const effectiveRepair = ownStats.effectiveRepair || 0;
    const enemyRepair = enemyStats.effectiveRepair || 0;
    
    if (effectiveRepair < enemyStats.totalDPS * 0.3 && ownStats.ships.length > 3) {
      recommendations.push({
        type: 'logistics',
        priority: 'critical',
        icon: <ShieldAlert className="w-5 h-5" />,
        title: 'Критическая нехватка логистов',
        description: 'Текущая логистическая поддержка недостаточна для sustained combat.',
        tactics: [
          'Приоритизируйте защиту логистов',
          'Используйте тактическое маневрирование для снижения входящего урона',
          'Рассмотрите добавление дополнительных логистов'
        ]
      });
    }

    // Fleet Composition Analysis
    if (ownStats.ships.length < enemyStats.ships.length * 0.7) {
      recommendations.push({
        type: 'composition',
        priority: 'high',
        icon: <Target className="w-5 h-5" />,
        title: 'Численное меньшинство',
        description: 'Ваш флот существенно меньше вражеского.',
        tactics: [
          'Избегайте прямого столкновения',
          'Используйте hit-and-run тактику',
          'Фокусируйтесь на высокоприоритетных целях',
          'Разделяйте вражеский флот'
        ]
      });
    }

    // Mobility Analysis
    if (ownStats.avgMobility > enemyStats.avgMobility * 1.2) {
      recommendations.push({
        type: 'mobility',
        icon: <Navigation className="w-5 h-5" />,
        priority: 'medium',
        title: 'Преимущество в мобильности',
        description: 'Ваш флот более мобилен чем вражеский.',
        tactics: [
          'Используйте кайтинг',
          'Контролируйте дистанцию боя',
          'Применяйте hit-and-run тактику',
          'Избегайте close-range engagement'
        ]
      });
    }

    // EWAR Analysis
    if (ownStats.types.ewar && !enemyStats.types.ewar) {
      recommendations.push({
        type: 'ewar',
        priority: 'medium',
        icon: <Radio className="w-5 h-5" />,
        title: 'EWAR Преимущество',
        description: 'У вас есть преимущество в электронной войне.',
        tactics: [
          'Приоритизируйте dampening на вражеских DPS кораблях',
          'Используйте ECM на ключевых целях',
          'Защищайте EWAR корабли от focus fire'
        ]
      });
    }

    // Alpha Strike Analysis
    if (alphaAnalysis.canBreakRep && alphaAnalysis.timeToBreakRep < 30) {
      recommendations.push({
        type: 'alpha',
        priority: 'high',
        icon: <Target className="w-5 h-5" />,
        title: 'Возможность Alpha Strike',
        description: `Вы можете пробить вражескую откачку за ${Math.round(alphaAnalysis.timeToBreakRep)} секунд.`,
        tactics: [
          'Координируйте альфа-страйки',
          'Фокусируйте огонь на логистах',
          'Используйте EWAR для снижения эффективности вражеской логистики'
        ]
      });
    }

    // Trade Efficiency Analysis
    if (tradeAnalysis.killTradeRatio < 0.8) {
      recommendations.push({
        type: 'trade',
        priority: 'critical',
        icon: <AlertTriangle className="w-5 h-5" />,
        title: 'Неблагоприятный обмен',
        description: 'Текущее соотношение потерь неблагоприятно для вашего флота.',
        tactics: [
          'Избегайте затяжных боев',
          'Фокусируйтесь на высокоценных целях',
          'Используйте тактическое отступление при необходимости',
          'Рассмотрите смену доктрины'
        ]
      });
    }

    // Tank Analysis
    const ehpRatio = ownStats.totalEHP / enemyStats.totalEHP;
    if (ehpRatio < 0.7) {
      recommendations.push({
        type: 'tank',
        priority: 'high',
        icon: <Shield className="w-5 h-5" />,
        title: 'Недостаточный танк',
        description: 'Ваш флот существенно уступает врагу по EHP.',
        tactics: [
          'Максимизируйте эффективность логистов',
          'Используйте дальнюю дистанцию',
          'Избегайте прямого столкновения',
          'Рассмотрите использование более танковых фитов'
        ]
      });
    }

    // Anchoring Analysis
    if (ownStats.ships.length > 10 && ownStats.types.logistics) {
      recommendations.push({
        type: 'anchoring',
        priority: 'medium',
        icon: <Anchor className="w-5 h-5" />,
        title: 'Рекомендации по анкору',
        description: 'Оптимизируйте построение флота.',
        tactics: [
          'Держите логистов в отдельном анкоре',
          'Используйте перпендикулярное движение для снижения входящего урона',
          'Поддерживайте оптимальную дистанцию между логистами и DPS кораблями'
        ]
      });
    }

    return recommendations;
  };

  const recommendations = generateRecommendations();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Тактические рекомендации</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border ${
                rec.priority === 'critical' ? 'bg-red-50 border-red-200' :
                rec.priority === 'high' ? 'bg-yellow-50 border-yellow-200' :
                'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {rec.icon}
                <h3 className="font-semibold text-lg">{rec.title}</h3>
              </div>
              <p className="text-gray-700 mb-3">{rec.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium">Рекомендуемые действия:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {rec.tactics.map((tactic, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{tactic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FleetRecommendations;