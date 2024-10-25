import * as FleetInterfaces from "./../interfaces/fleetInterfaces";

export const calculateFleetEfficiency = (stats: FleetInterfaces.FleetStats): FleetInterfaces.FleetEfficiency => {
    const dpsPerShip = stats.totalDPS / stats.ships.length
    const ehpPerShip = stats.totalEHP / stats.ships.length
    const repairPerShip = (stats.effectiveRepair || 0) / stats.ships.length
  
    return {
      dpsEfficiency: Math.min(dpsPerShip / 800, 1) * 100, // 800 DPS как базовый показатель
      tankEfficiency: Math.min(ehpPerShip / 100000, 1) * 100, // 100k EHP как базовый показатель
      logisticsEfficiency: Math.min(repairPerShip / 300, 1) * 100, // 300 откачки как базовый показатель
      mobilityEfficiency: stats.avgMobility * 100,
      overallEfficiency: (
        (Math.min(dpsPerShip / 800, 1) * 0.3) +
        (Math.min(ehpPerShip / 100000, 1) * 0.3) +
        (Math.min(repairPerShip / 300, 1) * 0.2) +
        (stats.avgMobility * 0.2)
      ) * 100
    }
  };
