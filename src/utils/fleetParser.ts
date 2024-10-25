import * as FleetInterfaces from '../interfaces/fleetInterfaces';
import { ShipType, ShipSize } from '../types/types';
import { shipStats } from '../constants/ships';

// Интерфейсы и типы
export interface ParsedShipEntry {
  name: string;
  count: number;
  pilot?: string;
  role?: string;
  stats?: FleetInterfaces.ShipStats;
}

export interface ParseResult {
  ships: ParsedShipEntry[];
  totalParsed: number;
  totalUnknown: number;
  parseSuccess: boolean;
  unknownShips: string[];
}

// Map альтернативных названий кораблей
export const shipAliases: Record<string, string> = {
  'cyclone fleet issue': 'Cyclone Fleet Issue',
  'cfi': 'Cyclone Fleet Issue',
  'cyclone fi': 'Cyclone Fleet Issue',
  'fleet cyclone': 'Cyclone Fleet Issue',
  // Добавьте другие алиасы по необходимости
};

// Функция нормализации названия корабля
export const normalizeShipName = (name: string): string => {
  // Очищаем имя от лишних символов и пробелов
  const cleanName = name.trim()
    .replace(/\s+/g, ' ')      // Заменяем множественные пробелы на один
    .replace(/['"]/g, '')      // Удаляем кавычки
    .replace(/^\d+\s*/, '');   // Удаляем начальные цифры
    
  // Проверяем прямое совпадение
  if (shipStats[cleanName]) {
    return cleanName;
  }
  
  // Проверяем прямое совпадение в нижнем регистре
  const lowerName = cleanName.toLowerCase();
  if (shipStats[lowerName]) {
    return lowerName;
  }
  
  // Проверяем алиасы
  if (shipAliases[lowerName]) {
    return shipAliases[lowerName];
  }
  
  // Проверяем частичные совпадения
  for (const [alias, shipName] of Object.entries(shipAliases)) {
    if (lowerName.includes(alias.toLowerCase()) || 
        alias.toLowerCase().includes(lowerName)) {
      return shipName;
    }
  }
  
  // Если ничего не нашли, возвращаем оригинальное имя
  // с первой буквой в верхнем регистре
  return cleanName.charAt(0).toUpperCase() + cleanName.slice(1).toLowerCase();
};

// Функция парсинга D-Scan
export const parseDScan = (text: string): ParseResult => {
  const lines = text.split('\n').filter(line => line.trim());
  const shipMap = new Map<string, ParsedShipEntry>();
  const unknownShips: string[] = [];
  
  for (const line of lines) {
    const parts = line.split('\t');
    if (parts.length >= 3) {
      const rawShipName = parts[2].trim();
      const normalizedName = normalizeShipName(rawShipName);
      
      if (shipStats[normalizedName] || shipAliases[normalizedName.toLowerCase()]) {
        const actualName = shipAliases[normalizedName.toLowerCase()] || normalizedName;
        const existing = shipMap.get(actualName) || {
          name: actualName,
          count: 0,
          stats: shipStats[actualName]
        };
        existing.count++;
        shipMap.set(actualName, existing);
      } else {
        if (!unknownShips.includes(rawShipName)) {
          unknownShips.push(rawShipName);
        }
      }
    }
  }
  
  const ships = Array.from(shipMap.values());
  return {
    ships,
    totalParsed: ships.reduce((sum, ship) => sum + ship.count, 0),
    totalUnknown: unknownShips.length,
    parseSuccess: ships.length > 0,
    unknownShips
  };
};

// Функция парсинга Fleet Composition
export const parseFleetComposition = (text: string): ParseResult => {
  const lines = text.split('\n').filter(line => line.trim());
  const shipMap = new Map<string, ParsedShipEntry>();
  const unknownShips: string[] = [];
  
  console.log('Processing Fleet Composition:', lines);
  
  for (const line of lines) {
    // Разбиваем строку по табуляции
    const parts = line.split('\t').map(part => part.trim());
    console.log('Line parts:', parts);
    
    // Проверяем, что у нас достаточно частей
    // Format: [Name] [Location] [Ship] [Type] [Role] [Skills] [Position]
    if (parts.length >= 3) {
      const pilot = parts[0].trim();
      // Ship name is in the third column
      const rawShipName = parts[2].trim();
      // Role is in the fifth column if exists
      const role = parts[4]?.trim() || '';
      
      console.log('Processing:', { pilot, ship: rawShipName, role });
      
      const normalizedName = normalizeShipName(rawShipName);
      console.log('Normalized ship name:', normalizedName);
      
      if (shipStats[normalizedName] || shipAliases[normalizedName.toLowerCase()]) {
        const actualName = shipAliases[normalizedName.toLowerCase()] || normalizedName;
        
        if (!shipMap.has(actualName)) {
          shipMap.set(actualName, {
            name: actualName,
            count: 1,
            pilot,
            role,
            stats: shipStats[actualName]
          });
        } else {
          const existing = shipMap.get(actualName)!;
          existing.count++;
        }
        console.log('Ship added:', actualName);
      } else {
        if (!unknownShips.includes(rawShipName)) {
          unknownShips.push(rawShipName);
          console.log('Unknown ship:', rawShipName);
        }
      }
    }
  }
  
  const ships = Array.from(shipMap.values());
  console.log('Parsed ships:', ships);
  console.log('Unknown ships:', unknownShips);
  
  return {
    ships,
    totalParsed: ships.reduce((sum, ship) => sum + ship.count, 0),
    totalUnknown: unknownShips.length,
    parseSuccess: ships.length > 0,
    unknownShips
  };
};