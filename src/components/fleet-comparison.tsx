import React from 'react';
import { ShipType, ShipSize } from './../types/types';
import * as FleetInterfaces from '../interfaces/fleetInterfaces';

interface ComparisonAdvantage {
  dpsAdvantage: number;
  ehpAdvantage: number;
  repAdvantage: number;
  mobilityAdvantage: number;
  composition: {
    advantage: string[];
    disadvantage: string[];
  };
}

const FleetComparison: React.FC<{
  ownStats: FleetInterfaces.FleetStats;
  enemyStats: FleetInterfaces.FleetStats;
}> = ({ ownStats, enemyStats }) => {
  // Calculate percentage differences between fleets
  const calculateAdvantage = (own: number, enemy: number): number => {
    if (own === 0 && enemy === 0) return 0;
    return ((own - enemy) / Math.max(own, enemy)) * 100;
  };

  // Calculate all advantages
  const comparison: ComparisonAdvantage = {
    dpsAdvantage: calculateAdvantage(ownStats.totalDPS, enemyStats.totalDPS),
    ehpAdvantage: calculateAdvantage(ownStats.totalEHP, enemyStats.totalEHP),
    repAdvantage: calculateAdvantage(
      ownStats.effectiveRepair || 0,
      enemyStats.effectiveRepair || 0
    ),
    mobilityAdvantage: calculateAdvantage(
      ownStats.avgMobility,
      enemyStats.avgMobility
    ),
    composition: {
      advantage: [],
      disadvantage: []
    }
  };

  // Analyze fleet composition advantages and disadvantages
  const analyzeComposition = () => {
    const advantages: string[] = [];
    const disadvantages: string[] = [];

    // DPS Analysis
    if (comparison.dpsAdvantage > 15) {
      advantages.push("Превосходство по урону");
    } else if (comparison.dpsAdvantage < -15) {
      disadvantages.push("Недостаточный урон");
    }

    // EHP Analysis
    if (comparison.ehpAdvantage > 15) {
      advantages.push("Превосходство по живучести");
    } else if (comparison.ehpAdvantage < -15) {
      disadvantages.push("Недостаточная живучесть");
    }

    // Repair Analysis
    if (ownStats.effectiveRepair && !enemyStats.effectiveRepair) {
      advantages.push("Наличие логистической поддержки");
    } else if (!ownStats.effectiveRepair && enemyStats.effectiveRepair) {
      disadvantages.push("Отсутствие логистической поддержки");
    } else if (comparison.repAdvantage > 20) {
      advantages.push("Сильная логистическая поддержка");
    } else if (comparison.repAdvantage < -20) {
      disadvantages.push("Слабая логистическая поддержка");
    }

    // Mobility Analysis
    if (comparison.mobilityAdvantage > 15) {
      advantages.push("Превосходство в мобильности");
    } else if (comparison.mobilityAdvantage < -15) {
      disadvantages.push("Недостаточная мобильность");
    }

    // Fleet Size Analysis
    const ownSize = ownStats.ships.length;
    const enemySize = enemyStats.ships.length;
    if (ownSize > enemySize * 1.2) {
      advantages.push("Численное превосходство");
    } else if (ownSize * 1.2 < enemySize) {
      disadvantages.push("Численное меньшинство");
    }

    // Ship Types Analysis
    const ownTypes = Object.keys(ownStats.types);
    const enemyTypes = Object.keys(enemyStats.types);

    // EWAR advantage
    if (ownStats.types.ewar && !enemyStats.types.ewar) {
      advantages.push("Преимущество в электронной войне");
    } else if (!ownStats.types.ewar && enemyStats.types.ewar) {
      disadvantages.push("Уязвимость к электронной войне");
    }

    // Fleet composition diversity
    if (ownTypes.length > enemyTypes.length) {
      advantages.push("Более разнообразный состав флота");
    } else if (ownTypes.length < enemyTypes.length) {
      disadvantages.push("Менее разнообразный состав флота");
    }

    comparison.composition.advantage = advantages;
    comparison.composition.disadvantage = disadvantages;
  };

  // Run composition analysis
  analyzeComposition();

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-help"
        title="Сравнительный анализ преимуществ и недостатков флотов">
        Сравнительный анализ
      </h3>
      
      <div className="space-y-4">
        {/* Графики сравнения */}
        <div className="grid grid-cols-2 gap-4">
          {Object.entries({
            'DPS': comparison.dpsAdvantage,
            'EHP': comparison.ehpAdvantage,
            'Откачка': comparison.repAdvantage,
            'Мобильность': comparison.mobilityAdvantage
          }).map(([label, advantage]) => (
            <div key={label} className="relative">
              <div className="flex justify-between text-sm mb-1">
                <span>{label}</span>
                <span className={advantage > 0 ? 'text-green-600' : 'text-red-600'}>
                  {advantage > 0 ? '+' : ''}{Math.round(advantage)}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    advantage > 0 ? 'bg-green-500' : 'bg-red-500'
                  }`}
                  style={{ 
                    width: `${Math.min(Math.abs(advantage), 100)}%`,
                    marginLeft: advantage < 0 ? 'auto' : 0
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Преимущества и недостатки */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-green-700 mb-2">Преимущества</h4>
            <ul className="space-y-1">
              {comparison.composition.advantage.map((adv, idx) => (
                <li key={idx} className="text-sm flex items-center space-x-2">
                  <span className="w-4 h-4 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500 text-xs">+</span>
                  </span>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-2">Недостатки</h4>
            <ul className="space-y-1">
              {comparison.composition.disadvantage.map((disadv, idx) => (
                <li key={idx} className="text-sm flex items-center space-x-2">
                  <span className="w-4 h-4 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-500 text-xs">-</span>
                  </span>
                  <span>{disadv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetComparison;