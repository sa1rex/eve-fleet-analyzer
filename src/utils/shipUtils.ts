// shipUtils.ts
import { ShipType, ShipSize } from '../types/types';
import { ShipStats } from '../interfaces/fleetInterfaces';



// Interface for ship aliases
interface ShipAlias {
  name: string;
  aliases: string[];
}

// Ship name normalization map
const shipAliases: ShipAlias[] = [
  { name: 'Guardian', aliases: ['guardian', 'guar'] },
  { name: 'Oneiros', aliases: ['oneiros', 'oni'] },
  { name: 'Basilisk', aliases: ['basilisk', 'basi'] },
  { name: 'Scimitar', aliases: ['scimitar', 'scimi'] },
  // Add more aliases as needed
];

// Normalize ship names from D-Scan
export function normalizeDscanShipName(rawName: string): string {
  // Remove any [] brackets and their contents
  const cleanName = rawName.replace(/\[.*?\]/g, '').trim();
  
  // Convert to lowercase for comparison
  const lowerName = cleanName.toLowerCase();
  
  // Find matching alias
  const matchingShip = shipAliases.find(ship => 
    ship.name.toLowerCase() === lowerName || 
    ship.aliases.includes(lowerName)
  );
  
  return matchingShip ? matchingShip.name : cleanName;
}

// Find ship by alias
export function findShipByAlias(rawName: string): string {
  const lowerName = rawName.toLowerCase().trim();
  
  const matchingShip = shipAliases.find(ship => 
    ship.name.toLowerCase() === lowerName || 
    ship.aliases.includes(lowerName)
  );
  
  return matchingShip ? matchingShip.name : rawName;
}

// Unified interface for parsed ship data
export interface ParsedShipData {
  shipName: string | null;
  pilot?: string;
  role?: string;
}

// D-Scan parsing function
export function parseDScanLine(line: string): ParsedShipData {
  const parts = line.split('\t');
  if (parts.length < 3) return { shipName: null };

  const rawShipName = parts[2].trim();
  const pilot = parts[3]?.trim();
  const shipName = normalizeDscanShipName(rawShipName);

  return { 
    shipName,
    pilot 
  };
}

// Fleet composition parsing function
export function parseFleetCompPosition(line: string): ParsedShipData {
  const parts = line.split('\t');
  if (parts.length < 3) return { shipName: null };

  const pilot = parts[0].trim();
  const role = parts[1].trim();
  const rawShipName = parts[2].trim();
  const shipName = findShipByAlias(rawShipName);

  return {
    shipName,
    pilot,
    role
  };
}

// Function to validate ship data against known ships
export function validateShipData(ships: string[], knownShips: Record<string, ShipStats>): {
  valid: string[];
  invalid: string[];
} {
  const valid: string[] = [];
  const invalid: string[] = [];

  ships.forEach(ship => {
    if (knownShips[ship]) {
      valid.push(ship);
    } else {
      invalid.push(ship);
    }
  });

  return { valid, invalid };
}

// Updated parser function that handles both D-Scan and Fleet Composition formats
export function parseFleetData(input: string, format: 'dscan' | 'fleet'): {
  ships: ParsedShipData[];
  totalParsed: number;
  invalidLines: string[];
} {
  const lines = input.split('\n').filter(line => line.trim());
  const ships: ParsedShipData[] = [];
  const invalidLines: string[] = [];

  lines.forEach(line => {
    const parsed = format === 'dscan' 
      ? parseDScanLine(line)
      : parseFleetCompPosition(line);
    
    if (parsed.shipName) {
      ships.push(parsed);
    } else {
      invalidLines.push(line);
    }
  });

  return {
    ships,
    totalParsed: ships.length,
    invalidLines
  };
}