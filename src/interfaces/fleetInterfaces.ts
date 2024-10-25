import { ShipType, ShipSize } from './../types/types';

export interface Comparison {
    dpsAdvantage: number;
    ehpAdvantage: number;
    repAdvantage: number;
    mobilityAdvantage: number;
    composition: {
      advantage: string[];
      disadvantage: string[];
    };
  }

  export interface ShipStats {
    type: ShipType
    priority: number
    ehp: number
    threat: number
    dps: number
    repairPower: number
    mobility: number
    ewarResistance: number
    size: ShipSize
    repairEfficiency?: number
    damageType?: 'escalating' | 'instant'
  }
  
  export interface FleetStats {
    ships: string[]
    totalEHP: number
    totalDPS: number
    baseRepair: number
    avgMobility: number
    avgEwarResistance: number
    types: Record<string, number>
    effectiveRepair?: number
  }
  
  export interface TargetPriority {
    ship: string
    priority: number
    timeToKill: number
    stats: ShipStats
  }
  
  export interface AlphaAnalysis {
    totalAlpha: number;
    canBreakRep: boolean;
    timeToBreakRep: number;
    minShipsToBreakRep: number;
  }
  
  export interface TradeAnalysis {
    timeToLoseFirstShip: number;
    potentialLossesPerMinute: number;
    killTradeRatio: number;
    sustainableTime: number;
  }
  
  export interface CriticalPoint {
    type: 'advantage' | 'warning' | 'critical';
    description: string;
    timeToReach: number;
    recommendation: string;
  }
  
  export interface FleetEfficiency {
    dpsEfficiency: number;
    tankEfficiency: number;
    logisticsEfficiency: number;
    mobilityEfficiency: number;
    overallEfficiency: number;
  }
  
  export interface AnalysisResults {
    ownStats: FleetStats;
    enemyStats: FleetStats;
    targetPriorities: TargetPriority[];
    winChance: number;
    recommendations: string[];
    alphaAnalysis: AlphaAnalysis;
    tradeAnalysis: TradeAnalysis;
    criticalPoints: CriticalPoint[];
    ownEfficiency: FleetEfficiency;
    enemyEfficiency: FleetEfficiency;
  }

  
export interface FleetEfficiency {
    dpsEfficiency: number
    tankEfficiency: number
    logisticsEfficiency: number
    mobilityEfficiency: number
    overallEfficiency: number
  }
  