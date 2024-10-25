import * as FleetInterfaces from './../interfaces/fleetInterfaces';
import { ShipType, ShipSize } from './../types/types';

export const shipStats: Record<string, FleetInterfaces.ShipStats> = {
  // Titans (size: large)
  'Avatar': {
    type: 'dps',
    priority: 10,
    ehp: 500000,
    threat: 10,
    dps: 12000,
    repairPower: 0,
    mobility: 0.2,
    ewarResistance: 0.9,
    size: 'large',
    damageType: 'instant'
  },
  'Erebus': {
    type: 'dps',
    priority: 10,
    ehp: 480000,
    threat: 10,
    dps: 11500,
    repairPower: 0,
    mobility: 0.2,
    ewarResistance: 0.9,
    size: 'large',
    damageType: 'instant'
  },
  'Leviathan': {
    type: 'dps',
    priority: 10,
    ehp: 520000,
    threat: 10,
    dps: 11000,
    repairPower: 0,
    mobility: 0.2,
    ewarResistance: 0.9,
    size: 'large',
    damageType: 'instant'
  },
  'Ragnarok': {
    type: 'dps',
    priority: 10,
    ehp: 460000,
    threat: 10,
    dps: 12500,
    repairPower: 0,
    mobility: 0.3,
    ewarResistance: 0.9,
    size: 'large',
    damageType: 'instant'
  },

  // Supercarriers (size: large)
  'Hel': {
    type: 'dps',
    priority: 9,
    ehp: 350000,
    threat: 9,
    dps: 8000,
    repairPower: 1500,
    mobility: 0.3,
    ewarResistance: 0.8,
    size: 'large',
    damageType: 'instant'
  },
  'Nyx': {
    type: 'dps',
    priority: 9,
    ehp: 340000,
    threat: 9,
    dps: 8500,
    repairPower: 1500,
    mobility: 0.3,
    ewarResistance: 0.8,
    size: 'large',
    damageType: 'instant'
  },
  'Aeon': {
    type: 'dps',
    priority: 9,
    ehp: 380000,
    threat: 9,
    dps: 7500,
    repairPower: 1500,
    mobility: 0.3,
    ewarResistance: 0.8,
    size: 'large',
    damageType: 'instant'
  },
  'Wyvern': {
    type: 'dps',
    priority: 9,
    ehp: 360000,
    threat: 9,
    dps: 7800,
    repairPower: 1500,
    mobility: 0.3,
    ewarResistance: 0.8,
    size: 'large',
    damageType: 'instant'
  },

  // Dreadnoughts (size: large)
  'Phoenix': {
    type: 'dps',
    priority: 8,
    ehp: 250000,
    threat: 8,
    dps: 10000,
    repairPower: 0,
    mobility: 0.3,
    ewarResistance: 0.7,
    size: 'large',
    damageType: 'instant'
  },
  'Revelation': {
    type: 'dps',
    priority: 8,
    ehp: 230000,
    threat: 8,
    dps: 11000,
    repairPower: 0,
    mobility: 0.3,
    ewarResistance: 0.7,
    size: 'large',
    damageType: 'instant'
  },
  'Naglfar': {
    type: 'dps',
    priority: 8,
    ehp: 240000,
    threat: 8,
    dps: 10500,
    repairPower: 0,
    mobility: 0.3,
    ewarResistance: 0.7,
    size: 'large',
    damageType: 'instant'
  },
  'Moros': {
    type: 'dps',
    priority: 8,
    ehp: 220000,
    threat: 8,
    dps: 11500,
    repairPower: 0,
    mobility: 0.3,
    ewarResistance: 0.7,
    size: 'large',
    damageType: 'instant'
  },

  // Capital Industrial
  'Rorqual': {
    type: 'command',
    priority: 7,
    ehp: 400000,
    threat: 6,
    dps: 2000,
    repairPower: 2000,
    mobility: 0.2,
    ewarResistance: 0.8,
    size: 'large'
  },
  'Orca': {
    type: 'command',
    priority: 6,
    ehp: 200000,
    threat: 4,
    dps: 500,
    repairPower: 1000,
    mobility: 0.3,
    ewarResistance: 0.7,
    size: 'large'
  },

  // Black Ops Battleships
  'Redeemer': {
    type: 'dps',
    priority: 7,
    ehp: 110000,
    threat: 8,
    dps: 1300,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.7,
    size: 'large',
    damageType: 'instant'
  },
  'Sin': {
    type: 'dps',
    priority: 7,
    ehp: 105000,
    threat: 8,
    dps: 1250,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.7,
    size: 'large',
    damageType: 'instant'
  },
    // Carriers
    'Chimera': {
      type: 'logistics',
      priority: 8,
      ehp: 180000,
      threat: 7,
      dps: 2500,
      repairPower: 2500,
      mobility: 0.3,
      ewarResistance: 0.7,
      size: 'large',
      repairEfficiency: 0.9
    },
    'Nidhoggur': {
      type: 'logistics',
      priority: 8,
      ehp: 170000,
      threat: 7,
      dps: 2600,
      repairPower: 2600,
      mobility: 0.3,
      ewarResistance: 0.7,
      size: 'large',
      repairEfficiency: 0.9
    },
    'Thanatos': {
      type: 'logistics',
      priority: 8,
      ehp: 165000,
      threat: 7,
      dps: 2700,
      repairPower: 2400,
      mobility: 0.3,
      ewarResistance: 0.7,
      size: 'large',
      repairEfficiency: 0.9
    },
    'Archon': {
      type: 'logistics',
      priority: 8,
      ehp: 190000,
      threat: 7,
      dps: 2400,
      repairPower: 2700,
      mobility: 0.3,
      ewarResistance: 0.7,
      size: 'large',
      repairEfficiency: 0.9
    },
  
    // Additional Battleships
    'Armageddon': {
      type: 'dps',
      priority: 7,
      ehp: 95000,
      threat: 7,
      dps: 850,
      repairPower: 0,
      mobility: 0.5,
      ewarResistance: 0.5,
      size: 'large',
      damageType: 'instant'
    },
    'Abaddon': {
      type: 'dps',
      priority: 7,
      ehp: 105000,
      threat: 7,
      dps: 900,
      repairPower: 0,
      mobility: 0.4,
      ewarResistance: 0.5,
      size: 'large',
      damageType: 'instant'
    },
  
    // Pirate and Special Edition Battleships
    'Barghest': {
      type: 'dps',
      priority: 7,
      ehp: 100000,
      threat: 8,
      dps: 1100,
      repairPower: 0,
      mobility: 0.6,
      ewarResistance: 0.6,
      size: 'large',
      damageType: 'instant'
    },
    'Praxis': {
      type: 'dps',
      priority: 6,
      ehp: 95000,
      threat: 6,
      dps: 800,
      repairPower: 0,
      mobility: 0.4,
      ewarResistance: 0.5,
      size: 'large',
      damageType: 'instant'
    },
  
    // Black Ops additions
    'Panther': {
      type: 'dps',
      priority: 7,
      ehp: 108000,
      threat: 8,
      dps: 1350,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.7,
      size: 'large',
      damageType: 'instant'
    },
    'Widow': {
      type: 'ewar',
      priority: 7,
      ehp: 112000,
      threat: 8,
      dps: 1200,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.8,
      size: 'large',
      damageType: 'instant'
    },
  
    // Additional Cruisers
    'Pilgrim': {
      type: 'ewar',
      priority: 6,
      ehp: 55000,
      threat: 7,
      dps: 300,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.7,
      size: 'medium',
      damageType: 'instant'
    },
    'Maller': {
      type: 'dps',
      priority: 5,
      ehp: 65000,
      threat: 5,
      dps: 350,
      repairPower: 0,
      mobility: 0.6,
      ewarResistance: 0.4,
      size: 'medium',
      damageType: 'instant'
    },
  
    // Tactical Destroyers
    'Confessor': {
      type: 'dps',
      priority: 5,
      ehp: 40000,
      threat: 6,
      dps: 400,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.5,
      size: 'small',
      damageType: 'instant'
    },
    'Hecate': {
      type: 'dps',
      priority: 5,
      ehp: 35000,
      threat: 6,
      dps: 450,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.5,
      size: 'small',
      damageType: 'instant'
    },
    'Jackdaw': {
      type: 'dps',
      priority: 5,
      ehp: 45000,
      threat: 6,
      dps: 350,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.5,
      size: 'small',
      damageType: 'instant'
    },
    'Svipul': {
      type: 'dps',
      priority: 5,
      ehp: 38000,
      threat: 6,
      dps: 425,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.5,
      size: 'small',
      damageType: 'instant'
    },
  
    // Command Destroyers
    'Pontifex': {
      type: 'command',
      priority: 6,
      ehp: 42000,
      threat: 5,
      dps: 250,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.6,
      size: 'small'
    },
    'Bifrost': {
      type: 'command',
      priority: 6,
      ehp: 40000,
      threat: 5,
      dps: 275,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.6,
      size: 'small'
    },
    'Magus': {
      type: 'command',
      priority: 6,
      ehp: 38000,
      threat: 5,
      dps: 300,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.6,
      size: 'small'
    },
    'Stork': {
      type: 'command',
      priority: 6,
      ehp: 43000,
      threat: 5,
      dps: 225,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.6,
      size: 'small'
    },
  
    // Frigates (Combat)
    'Executioner': {
      type: 'dps',
      priority: 3,
      ehp: 4500,
      threat: 3,
      dps: 120,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      size: 'small',
      damageType: 'instant'
    },
    'Punisher': {
      type: 'dps',
      priority: 3,
      ehp: 6000,
      threat: 3,
      dps: 110,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.3,
      size: 'small',
      damageType: 'instant'
    },
    'Rifter': {
      type: 'dps',
      priority: 3,
      ehp: 4000,
      threat: 3,
      dps: 130,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      size: 'small',
      damageType: 'instant'
    },
  
    // Exploration Frigates
    'Magnate': {
      type: 'ewar',
      priority: 2,
      ehp: 3500,
      threat: 2,
      dps: 60,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      size: 'small'
    },
    'Heron': {
      type: 'ewar',
      priority: 2,
      ehp: 3200,
      threat: 2,
      dps: 55,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      size: 'small'
    },
    'Imicus': {
      type: 'ewar',
      priority: 2,
      ehp: 3300,
      threat: 2,
      dps: 50,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      size: 'small'
    },
    'Probe': {
      type: 'ewar',
      priority: 2,
      ehp: 3400,
      threat: 2,
      dps: 58,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      size: 'small'
    },
  
    // Navy Faction Frigates
    'Federation Navy Comet': {
      type: 'dps',
      priority: 4,
      ehp: 5500,
      threat: 4,
      dps: 180,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.4,
      size: 'small',
      damageType: 'instant'
    },
    'Imperial Navy Slicer': {
      type: 'dps',
      priority: 4,
      ehp: 5000,
      threat: 4,
      dps: 170,
      repairPower: 0,
      mobility: 1.0,
      ewarResistance: 0.4,
      size: 'small',
      damageType: 'instant'
    },
    'Caldari Navy Hookbill': {
      type: 'dps',
      priority: 4,
      ehp: 6000,
      threat: 4,
      dps: 160,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.4,
      size: 'small',
      damageType: 'instant'
    },
    'Republic Fleet Firetail': {
      type: 'dps',
      priority: 4,
      ehp: 5200,
      threat: 4,
      dps: 175,
      repairPower: 0,
      mobility: 0.95,
      ewarResistance: 0.4,
      size: 'small',
      damageType: 'instant'
    },
  
    // Triglavian Ships
    'Damavik': {
      type: 'dps',
      priority: 4,
      ehp: 5800,
      threat: 5,
      dps: 150,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.4,
      size: 'small',
      damageType: 'escalating'
    },
    'Vedmak': {
      type: 'dps',
      priority: 6,
      ehp: 65000,
      threat: 7,
      dps: 450,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.5,
      size: 'medium',
      damageType: 'escalating'
    },
    'Zirnitra': {
      type: 'dps',
      priority: 8,
      ehp: 260000,
      threat: 8,
      dps: 12000,
      repairPower: 0,
      mobility: 0.3,
      ewarResistance: 0.7,
      size: 'large',
      damageType: 'escalating'
    },
  
    // EDENCOM Ships
    'Skybreaker': {
      type: 'dps',
      priority: 5,
      ehp: 45000,
      threat: 6,
      dps: 400,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.5,
      size: 'small',
      damageType: 'instant'
    },
    'Stormbringer': {
      type: 'dps',
      priority: 6,
      ehp: 70000,
      threat: 7,
      dps: 600,
      repairPower: 0,
      mobility: 0.6,
      ewarResistance: 0.6,
      size: 'medium',
      damageType: 'instant'
    },
    'Thunderchild': {
      type: 'dps',
      priority: 7,
      ehp: 120000,
      threat: 8,
      dps: 1000,
      repairPower: 0,
      mobility: 0.5,
      ewarResistance: 0.7,
      size: 'large',
      damageType: 'instant'
    },
    // Special Empire Faction Ships
  'Succubus': {
    type: 'dps',
    priority: 4,
    ehp: 7000,
    threat: 5,
    dps: 200,
    repairPower: 0,
    mobility: 0.95,
    ewarResistance: 0.4,
    size: 'small',
    damageType: 'instant'
  },
  'Daredevil': {
    type: 'dps',
    priority: 4,
    ehp: 6500,
    threat: 5,
    dps: 220,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.4,
    size: 'small',
    damageType: 'instant'
  },
  'Worm': {
    type: 'dps',
    priority: 4,
    ehp: 8000,
    threat: 5,
    dps: 180,
    repairPower: 0,
    mobility: 0.85,
    ewarResistance: 0.4,
    size: 'small',
    damageType: 'instant'
  },
  'Dramiel': {
    type: 'dps',
    priority: 4,
    ehp: 6000,
    threat: 5,
    dps: 190,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.4,
    size: 'small',
    damageType: 'instant'
  },
  'Cruor': {
    type: 'ewar',
    priority: 4,
    ehp: 5500,
    threat: 4,
    dps: 150,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.4,
    size: 'small',
    damageType: 'instant'
  },

  // Tech 1 Destroyers
  'Catalyst': {
    type: 'dps',
    priority: 3,
    ehp: 12000,
    threat: 4,
    dps: 300,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.3,
    size: 'small',
    damageType: 'instant'
  },
  'Coercer': {
    type: 'dps',
    priority: 3,
    ehp: 13000,
    threat: 4,
    dps: 280,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.3,
    size: 'small',
    damageType: 'instant'
  },
  'Cormorant': {
    type: 'dps',
    priority: 3,
    ehp: 11000,
    threat: 4,
    dps: 290,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.3,
    size: 'small',
    damageType: 'instant'
  },
  'Thrasher': {
    type: 'dps',
    priority: 3,
    ehp: 11500,
    threat: 4,
    dps: 310,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.3,
    size: 'small',
    damageType: 'instant'
  },

  // Rare/Unique Ships
  'Whiptail': {
    type: 'ewar',
    priority: 7,
    ehp: 8500,
    threat: 6,
    dps: 180,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Chremoas': {
    type: 'ewar',
    priority: 7,
    ehp: 7500,
    threat: 6,
    dps: 200,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Etana': {
    type: 'logistics',
    priority: 9,
    ehp: 85000,
    threat: 8,
    dps: 0,
    repairPower: 900,
    mobility: 0.7,
    ewarResistance: 0.7,
    size: 'medium',
    repairEfficiency: 0.9
  },
  'Mimir': {
    type: 'dps',
    priority: 7,
    ehp: 75000,
    threat: 7,
    dps: 700,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.6,
    size: 'medium',
    damageType: 'instant'
  },
  'Rabisu': {
    type: 'logistics',
    priority: 9,
    ehp: 90000,
    threat: 8,
    dps: 0,
    repairPower: 950,
    mobility: 0.7,
    ewarResistance: 0.7,
    size: 'medium',
    repairEfficiency: 0.95
  },

  // Additional Navy/Faction Cruisers
  'Vexor Navy Issue': {
    type: 'dps',
    priority: 6,
    ehp: 65000,
    threat: 7,
    dps: 650,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.5,
    size: 'medium',
    damageType: 'instant'
  },
  'Caracal Navy Issue': {
    type: 'dps',
    priority: 6,
    ehp: 60000,
    threat: 7,
    dps: 600,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.5,
    size: 'medium',
    damageType: 'instant'
  },
  'Stabber Fleet Issue': {
    type: 'dps',
    priority: 6,
    ehp: 55000,
    threat: 7,
    dps: 550,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'medium',
    damageType: 'instant'
  },
  'Omen Navy Issue': {
    type: 'dps',
    priority: 6,
    ehp: 58000,
    threat: 7,
    dps: 575,
    repairPower: 0,
    mobility: 0.75,
    ewarResistance: 0.5,
    size: 'medium',
    damageType: 'instant'
  },

  // Mining Ships
  'Venture': {
    type: 'logistics',
    priority: 2,
    ehp: 4000,
    threat: 1,
    dps: 50,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.2,
    size: 'small'
  },
  'Prospect': {
    type: 'logistics',
    priority: 3,
    ehp: 6000,
    threat: 1,
    dps: 60,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.3,
    size: 'small'
  },
  'Endurance': {
    type: 'logistics',
    priority: 3,
    ehp: 5500,
    threat: 1,
    dps: 55,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.3,
    size: 'small'
  },

  // Mining Barges
  'Procurer': {
    type: 'logistics',
    priority: 3,
    ehp: 45000,
    threat: 2,
    dps: 100,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.4,
    size: 'medium'
  },
  'Retriever': {
    type: 'logistics',
    priority: 3,
    ehp: 25000,
    threat: 2,
    dps: 80,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.3,
    size: 'medium'
  },
  'Covetor': {
    type: 'logistics',
    priority: 3,
    ehp: 20000,
    threat: 2,
    dps: 90,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.3,
    size: 'medium'
  },

  // Exhumers
  'Skiff': {
    type: 'logistics',
    priority: 4,
    ehp: 70000,
    threat: 3,
    dps: 150,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.5,
    size: 'medium'
  },
  'Mackinaw': {
    type: 'logistics',
    priority: 4,
    ehp: 40000,
    threat: 3,
    dps: 120,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.4,
    size: 'medium'
  },
  'Hulk': {
    type: 'logistics',
    priority: 4,
    ehp: 35000,
    threat: 3,
    dps: 130,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.4,
    size: 'medium'
  },

  // Special/Unique Industrial Ships
  'Bowhead': {
    type: 'logistics',
    priority: 5,
    ehp: 150000,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.3,
    ewarResistance: 0.6,
    size: 'large'
  },
  'Porpoise': {
    type: 'command',
    priority: 5,
    ehp: 80000,
    threat: 3,
    dps: 200,
    repairPower: 400,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'medium'
  },

  // Additional Special Ships
  'Gnosis': {
    type: 'dps',
    priority: 5.5,
    ehp: 80000,
    threat: 6.5,
    dps: 650,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.5,
    size: 'medium',
    damageType: 'instant'
  },
  'Sunesis': {
    type: 'dps',
    priority: 4,
    ehp: 15000,
    threat: 4,
    dps: 200,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.4,
    size: 'small',
    damageType: 'instant'
  },

  // Support Ships
  'Zarmazd': {
    type: 'logistics',
    priority: 8,
    ehp: 75000,
    threat: 6,
    dps: 200,
    repairPower: 750,
    mobility: 0.7,
    ewarResistance: 0.6,
    size: 'medium',
    repairEfficiency: 0.9
  },
  'Rodiva': {
    type: 'logistics',
    priority: 7,
    ehp: 65000,
    threat: 5,
    dps: 150,
    repairPower: 600,
    mobility: 0.7,
    ewarResistance: 0.5,
    size: 'medium',
    repairEfficiency: 0.85
  },

  // Empire Navy Destroyers
  'Dragoon Navy Issue': {
    type: 'dps',
    priority: 4,
    ehp: 18000,
    threat: 5,
    dps: 350,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    size: 'small',
    damageType: 'instant'
  },
  'Cormorant Navy Issue': {
    type: 'dps',
    priority: 4,
    ehp: 16000,
    threat: 5,
    dps: 380,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    size: 'small',
    damageType: 'instant'
  },
  // Industrial Ships
  'Iteron Mark V': {
    type: 'logistics',
    priority: 2,
    ehp: 15000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Epithal': {
    type: 'logistics',
    priority: 2,
    ehp: 15000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Bestower': {
    type: 'logistics',
    priority: 2,
    ehp: 15000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Mammoth': {
    type: 'logistics',
    priority: 2,
    ehp: 16000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Badger': {
    type: 'logistics',
    priority: 2,
    ehp: 14000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Hoarder': {
    type: 'logistics',
    priority: 2,
    ehp: 13500,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },

  // Additional Industrial Ships
  'Tayra': {
    type: 'logistics',
    priority: 2,
    ehp: 15500,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Wreathe': {
    type: 'logistics',
    priority: 2,
    ehp: 14500,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Nereus': {
    type: 'logistics',
    priority: 2,
    ehp: 14000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },

  // Advanced Industrial Ships
  'Bustard': {
    type: 'logistics',
    priority: 4,
    ehp: 85000,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'medium'
  },
  'Occator': {
    type: 'logistics',
    priority: 4,
    ehp: 90000,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'medium'
  },
  'Mastodon': {
    type: 'logistics',
    priority: 4,
    ehp: 88000,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'medium'
  },
  'Impel': {
    type: 'logistics',
    priority: 4,
    ehp: 92000,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'medium'
  },

  // Blockade Runners
  'Crane': {
    type: 'logistics',
    priority: 4,
    ehp: 12000,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.4,
    size: 'medium'
  },
  'Prorator': {
    type: 'logistics',
    priority: 4,
    ehp: 11500,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.4,
    size: 'medium'
  },
  'Viator': {
    type: 'logistics',
    priority: 4,
    ehp: 11000,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.4,
    size: 'medium'
  },
  'Prowler': {
    type: 'logistics',
    priority: 4,
    ehp: 10500,
    threat: 2,
    dps: 0,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.4,
    size: 'medium'
  },

  // Structures
  'Astrahus': {
    type: 'command',
    priority: 10,
    ehp: 1800000,
    threat: 7,
    dps: 3000,
    repairPower: 1000,
    mobility: 0,
    ewarResistance: 0.8,
    size: 'large'
  },
  'Fortizar': {
    type: 'command',
    priority: 10,
    ehp: 2500000,
    threat: 8,
    dps: 5000,
    repairPower: 2000,
    mobility: 0,
    ewarResistance: 0.9,
    size: 'large'
  },
  'Keepstar': {
    type: 'command',
    priority: 10,
    ehp: 3500000,
    threat: 10,
    dps: 8000,
    repairPower: 3000,
    mobility: 0,
    ewarResistance: 1.0,
    size: 'large'
  },

  // Engineering Complexes
  'Raitaru': {
    type: 'command',
    priority: 9,
    ehp: 1600000,
    threat: 6,
    dps: 2500,
    repairPower: 800,
    mobility: 0,
    ewarResistance: 0.8,
    size: 'large'
  },
  'Azbel': {
    type: 'command',
    priority: 9,
    ehp: 2200000,
    threat: 7,
    dps: 4000,
    repairPower: 1500,
    mobility: 0,
    ewarResistance: 0.9,
    size: 'large'
  },
  'Sotiyo': {
    type: 'command',
    priority: 9,
    ehp: 3000000,
    threat: 8,
    dps: 6000,
    repairPower: 2500,
    mobility: 0,
    ewarResistance: 0.9,
    size: 'large'
  },

  // Refineries
  'Athanor': {
    type: 'command',
    priority: 8,
    ehp: 1500000,
    threat: 6,
    dps: 2000,
    repairPower: 700,
    mobility: 0,
    ewarResistance: 0.8,
    size: 'large'
  },
  'Tatara': {
    type: 'command',
    priority: 8,
    ehp: 2000000,
    threat: 7,
    dps: 3500,
    repairPower: 1200,
    mobility: 0,
    ewarResistance: 0.9,
    size: 'large'
  },

  // Additional Empire Battleships
  'Armageddon Navy Issue': {
    type: 'dps',
    priority: 7,
    ehp: 110000,
    threat: 8,
    dps: 950,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },
  'Dominix Navy Issue': {
    type: 'dps',
    priority: 7,
    ehp: 115000,
    threat: 8,
    dps: 1000,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },
  'Raven Navy Issue': {
    type: 'dps',
    priority: 7,
    ehp: 105000,
    threat: 8,
    dps: 925,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },
  'Typhoon Fleet Issue': {
    type: 'dps',
    priority: 7,
    ehp: 128000,
    threat: 8,
    dps: 975,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },

  // Limited Edition Ships
  'Marshall': {
    type: 'dps',
    priority: 8,
    ehp: 130000,
    threat: 9,
    dps: 1200,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.7,
    size: 'large',
    damageType: 'instant'
  },
  'Enforcer': {
    type: 'dps',
    priority: 6,
    ehp: 75000,
    threat: 7,
    dps: 650,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.6,
    size: 'medium',
    damageType: 'instant'
  },
  'Pacifier': {
    type: 'ewar',
    priority: 5,
    ehp: 25000,
    threat: 5,
    dps: 250,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },

  // Special Event Ships
  'Apotheosis': {
    type: 'logistics',
    priority: 2,
    ehp: 8000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.3,
    size: 'small'
  },
  'Victorieux Luxury Yacht': {
    type: 'logistics',
    priority: 3,
    ehp: 15000,
    threat: 2,
    dps: 100,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    size: 'medium'
  },
  // Additional Assault Frigates
  'Retribution': {
    type: 'dps',
    priority: 4,
    ehp: 12000,
    threat: 5,
    dps: 180,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Hawk': {
    type: 'dps',
    priority: 4,
    ehp: 13000,
    threat: 5,
    dps: 170,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Harpy': {
    type: 'dps',
    priority: 4,
    ehp: 11500,
    threat: 5,
    dps: 175,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Jaguar': {
    type: 'dps',
    priority: 4,
    ehp: 12500,
    threat: 5,
    dps: 185,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Vengeance': {
    type: 'dps',
    priority: 4,
    ehp: 14000,
    threat: 5,
    dps: 165,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Wolf': {
    type: 'dps',
    priority: 4,
    ehp: 11000,
    threat: 5,
    dps: 190,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Enyo': {
    type: 'dps',
    priority: 4,
    ehp: 12000,
    threat: 5,
    dps: 195,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },
  'Ishkur': {
    type: 'dps',
    priority: 4,
    ehp: 11800,
    threat: 5,
    dps: 180,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },

  // Stealth Bombers
  'Purifier': {
    type: 'dps',
    priority: 5,
    ehp: 6000,
    threat: 7,
    dps: 800,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.3,
    size: 'small',
    damageType: 'instant'
  },
  'Manticore': {
    type: 'dps',
    priority: 5,
    ehp: 5800,
    threat: 7,
    dps: 780,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.3,
    size: 'small',
    damageType: 'instant'
  },
  'Nemesis': {
    type: 'dps',
    priority: 5,
    ehp: 5500,
    threat: 7,
    dps: 820,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.3,
    size: 'small',
    damageType: 'instant'
  },
  'Hound': {
    type: 'dps',
    priority: 5,
    ehp: 5700,
    threat: 7,
    dps: 840,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.3,
    size: 'small',
    damageType: 'instant'
  },


  // Additional Logistics Cruisers
  'Thalia': {
    type: 'logistics',
    priority: 7,
    ehp: 45000,
    threat: 4,
    dps: 100,
    repairPower: 500,
    mobility: 0.7,
    ewarResistance: 0.5,
    size: 'medium',
    repairEfficiency: 0.8
  },
  'Dagon': {
    type: 'logistics',
    priority: 7,
    ehp: 48000,
    threat: 4,
    dps: 90,
    repairPower: 520,
    mobility: 0.7,
    ewarResistance: 0.5,
    size: 'medium',
    repairEfficiency: 0.8
  },

  // Shuttles and Pods
  'Amarr Shuttle': {
    type: 'logistics',
    priority: 1,
    ehp: 1000,
    threat: 0,
    dps: 0,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.1,
    size: 'small'
  },
  'Caldari Shuttle': {
    type: 'logistics',
    priority: 1,
    ehp: 1000,
    threat: 0,
    dps: 0,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.1,
    size: 'small'
  },
  'Gallente Shuttle': {
    type: 'logistics',
    priority: 1,
    ehp: 1000,
    threat: 0,
    dps: 0,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.1,
    size: 'small'
  },
  'Minmatar Shuttle': {
    type: 'logistics',
    priority: 1,
    ehp: 1000,
    threat: 0,
    dps: 0,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.1,
    size: 'small'
  },
  'Leopard': {
    type: 'logistics',
    priority: 1,
    ehp: 1200,
    threat: 0,
    dps: 0,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.1,
    size: 'small'
  },

  // Rare/Special Ships
  'Chameleon': {
    type: 'ewar',
    priority: 7,
    ehp: 50000,
    threat: 7,
    dps: 250,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },
  'Vangel': {
    type: 'command',
    priority: 7,
    ehp: 85000,
    threat: 7,
    dps: 450,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },
  'Malice': {
    type: 'dps',
    priority: 5,
    ehp: 15000,
    threat: 6,
    dps: 250,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'instant'
  },

  // Additional Triglavian Ships
  'Nergal': {
    type: 'dps',
    priority: 5,
    ehp: 13000,
    threat: 6,
    dps: 200,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'escalating'
  },
  'Draugur': {
    type: 'dps',
    priority: 5,
    ehp: 30000,
    threat: 6,
    dps: 350,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.5,
    size: 'small',
    damageType: 'escalating'
  },
  'Ikitursa': {
    type: 'dps',
    priority: 6,
    ehp: 70000,
    threat: 7,
    dps: 600,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.6,
    size: 'medium',
    damageType: 'escalating'
  },

  // Additional Industrial Variants
  'Iteron Mark III': {
    type: 'logistics',
    priority: 2,
    ehp: 13000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Iteron Mark IV': {
    type: 'logistics',
    priority: 2,
    ehp: 14000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },
  'Badger Mark II': {
    type: 'logistics',
    priority: 2,
    ehp: 15000,
    threat: 1,
    dps: 0,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.2,
    size: 'medium'
  },

  // Empire Exploration Variants
  'Imicus Navy Issue': {
    type: 'ewar',
    priority: 3,
    ehp: 5000,
    threat: 3,
    dps: 80,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.4,
    size: 'small'
  },
  // Logistics Ships
  'Nestor': {
    type: 'logistics',
    priority: 9,
    ehp: 150000,
    threat: 8,
    dps: 200,
    repairPower: 1200,
    mobility: 0.6,
    ewarResistance: 0.7,
    size: 'large',
    repairEfficiency: 0.9
  },
  'Guardian': {
    type: 'logistics',
    priority: 9,
    ehp: 80000,
    threat: 8,
    dps: 0,
    repairPower: 800,
    mobility: 0.7,
    ewarResistance: 0.6,
    size: 'medium',
    repairEfficiency: 0.85
  },
  'Basilisk': {
    type: 'logistics',
    priority: 9,
    ehp: 75000,
    threat: 8,
    dps: 0,
    repairPower: 750,
    mobility: 0.7,
    ewarResistance: 0.6,
    size: 'medium',
    repairEfficiency: 0.85
  },
  'Oneiros': {
    type: 'logistics',
    priority: 9,
    ehp: 70000,
    threat: 8,
    dps: 0,
    repairPower: 700,
    mobility: 0.8,
    ewarResistance: 0.6,
    size: 'medium',
    repairEfficiency: 0.85
  },
  'Scimitar': {
    type: 'logistics',
    priority: 9,
    ehp: 65000,
    threat: 8,
    dps: 0,
    repairPower: 720,
    mobility: 0.8,
    ewarResistance: 0.6,
    size: 'medium',
    repairEfficiency: 0.85
  },
  
  // DPS Ships - Marauders
  'Leshak': {
    type: 'dps',
    priority: 7,
    ehp: 120000,
    threat: 9,
    dps: 1800,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'escalating'
  },
  'Paladin': {
    type: 'dps',
    priority: 7,
    ehp: 110000,
    threat: 8,
    dps: 1500,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.7,
    size: 'large',
    damageType: 'instant'
  },
  'Kronos': {
    type: 'dps',
    priority: 7,
    ehp: 115000,
    threat: 8,
    dps: 2000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },
  'Vargur': {
    type: 'dps',
    priority: 7,
    ehp: 125000,
    threat: 8,
    dps: 1700,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },
  'Golem': {
    type: 'dps',
    priority: 7,
    ehp: 120000,
    threat: 8,
    dps: 1600,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },

  // DPS Ships - Pirate Faction
  'Vindicator': {
    type: 'dps',
    priority: 7,
    ehp: 170000,
    threat: 9,
    dps: 1400,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'large',
    damageType: 'instant'
  },
  'Nightmare': {
    type: 'dps',
    priority: 7,
    ehp: 145000,
    threat: 8,
    dps: 1100,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },
  'Machariel': {
    type: 'dps',
    priority: 7,
    ehp: 140000,
    threat: 8,
    dps: 1100,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },
  'Rattlesnake': {
    type: 'dps',
    priority: 7,
    ehp: 150000,
    threat: 9,
    dps: 1400,
    repairPower: 0,
    mobility: 0.4,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },

  // EWAR Ships - Recons
  'Huginn': {
    type: 'ewar',
    priority: 8,
    ehp: 50000,
    threat: 7,
    dps: 200,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },
  'Lachesis': {
    type: 'ewar',
    priority: 8,
    ehp: 55000,
    threat: 7,
    dps: 200,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },
  'Arazu': {
    type: 'ewar',
    priority: 8,
    ehp: 45000,
    threat: 7,
    dps: 150,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },
  'Rapier': {
    type: 'ewar',
    priority: 8,
    ehp: 48000,
    threat: 7,
    dps: 180,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },

  // Command Ships
  'Damnation': {
    type: 'command',
    priority: 8,
    ehp: 140000,
    threat: 6,
    dps: 400,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.8,
    size: 'medium',
    damageType: 'instant'
  },
  'Vulture': {
    type: 'command',
    priority: 8,
    ehp: 120000,
    threat: 6,
    dps: 350,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.8,
    size: 'medium',
    damageType: 'instant'
  },
  'Absolution': {
    type: 'command',
    priority: 8,
    ehp: 130000,
    threat: 8,
    dps: 800,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.8,
    size: 'medium',
    damageType: 'instant'
  },
  'Sleipnir': {
    type: 'command',
    priority: 8,
    ehp: 120000,
    threat: 7,
    dps: 700,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.8,
    size: 'medium',
    damageType: 'instant'
  },

  // Strategic Cruisers
  'Legion': {
    type: 'dps',
    priority: 6,
    ehp: 85000,
    threat: 7,
    dps: 800,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },
  'Tengu': {
    type: 'dps',
    priority: 6,
    ehp: 80000,
    threat: 7,
    dps: 750,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },
  'Proteus': {
    type: 'dps',
    priority: 6,
    ehp: 90000,
    threat: 7,
    dps: 850,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },
  'Loki': {
    type: 'dps',
    priority: 6,
    ehp: 85000,
    threat: 7,
    dps: 800,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.7,
    size: 'medium',
    damageType: 'instant'
  },

  // Heavy Assault Cruisers
  'Zealot': {
    type: 'dps',
    priority: 5,
    ehp: 70000,
    threat: 6,
    dps: 600,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.6,
    size: 'medium',
    damageType: 'instant'
  },
  'Cerberus': {
    type: 'dps',
    priority: 5,
    ehp: 65000,
    threat: 6,
    dps: 550,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.6,
    size: 'medium',
    damageType: 'instant'
  },
  'Vagabond': {
    type: 'dps',
    priority: 5,
    ehp: 60000,
    threat: 6,
    dps: 500,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.6,
    size: 'medium',
    damageType: 'instant'
  },
  'Deimos': {
    type: 'dps',
    priority: 5,
    ehp: 75000,
    threat: 6,
    dps: 650,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.6,
    size: 'medium',
    damageType: 'instant'
  },

  // Battleships
  'Megathron': {
    type: 'dps',
    priority: 6,
    ehp: 135000,
    threat: 7,
    dps: 1200,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'large',
    damageType: 'instant'
  },
  'Tempest': {
    type: 'dps',
    priority: 6,
    ehp: 120000,
    threat: 7,
    dps: 1150,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'large',
    damageType: 'instant'
  },
  'Typhoon': {
    type: 'dps',
    priority: 6,
    ehp: 110000,
    threat: 7,
    dps: 1100,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'large',
    damageType: 'instant'
  },
  'Apocalypse': {
    type: 'dps',
    priority: 6,
    ehp: 100000,
    threat: 7,
    dps: 800,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'large',
    damageType: 'instant'
  },
  'Raven': {
    type: 'dps',
    priority: 6,
    ehp: 85000,
    threat: 7,
    dps: 750,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    size: 'large',
    damageType: 'instant'
  },
    
    // Command Ships
    'Eos': {
      type: 'command',
      size: 'medium',
      dps: 550,
      ehp: 120000,
      repairPower: 0,
      mobility: 0.5,
      ewarResistance: 0.7,
      priority: 8,
      threat: 7.8
    },
    
    'Muninn': {
      type: 'dps',
      size: 'medium',
      dps: 400,
      ehp: 70000,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.5,
      priority: 6,
      threat: 6.5
    },
    'Eagle': {
      type: 'dps',
      size: 'medium',
      dps: 350,
      ehp: 85000,
      repairPower: 0,
      mobility: 0.6,
      ewarResistance: 0.5,
      priority: 6,
      threat: 6.3
    },
    
  
    // Electronic Attack Ships
    'Kitsune': {
      type: 'ewar',
      size: 'small',
      dps: 50,
      ehp: 15000,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      priority: 8,
      threat: 5.8
    },
    'Sentinel': {
      type: 'ewar',
      size: 'small',
      dps: 75,
      ehp: 12000,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      priority: 8,
      threat: 5.9
    },
    'Keres': {
      type: 'ewar',
      size: 'small',
      dps: 60,
      ehp: 13000,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.3,
      priority: 8,
      threat: 5.8
    },
    'Hyena': {
      type: 'ewar',
      size: 'small',
      dps: 70,
      ehp: 11000,
      repairPower: 0,
      mobility: 1.0,
      ewarResistance: 0.3,
      priority: 8,
      threat: 6.0
    },
  
    // Recon Ships
    'Falcon': {
      type: 'ewar',
      size: 'medium',
      dps: 150,
      ehp: 45000,
      repairPower: 0,
      mobility: 0.6,
      ewarResistance: 0.7,
      priority: 8,
      threat: 7.2
    },
    'Rook': {
      type: 'ewar',
      size: 'medium',
      dps: 200,
      ehp: 50000,
      repairPower: 0,
      mobility: 0.5,
      ewarResistance: 0.7,
      priority: 8,
      threat: 7.3
    },
    // Interdictors
    'Sabre': {
      type: 'dps',
      size: 'small',
      dps: 200,
      ehp: 25000,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.4,
      priority: 8,
      threat: 6.5
    },
    'Eris': {
      type: 'dps',
      size: 'small',
      dps: 180,
      ehp: 27000,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.4,
      priority: 8,
      threat: 6.3
    },
    'Flycatcher': {
      type: 'dps',
      size: 'small',
      dps: 160,
      ehp: 30000,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.4,
      priority: 8,
      threat: 6.2
    },
    'Heretic': {
      type: 'dps',
      size: 'small',
      dps: 170,
      ehp: 28000,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.4,
      priority: 8,
      threat: 6.3
    },
  
    // Heavy Interdictors
    'Broadsword': {
      type: 'dps',
      size: 'medium',
      dps: 300,
      ehp: 90000,
      repairPower: 0,
      mobility: 0.6,
      ewarResistance: 0.6,
      priority: 7,
      threat: 7.0
    },
    'Phobos': {
      type: 'dps',
      size: 'medium',
      dps: 320,
      ehp: 85000,
      repairPower: 0,
      mobility: 0.6,
      ewarResistance: 0.6,
      priority: 7,
      threat: 7.1
    },
    'Devoter': {
      type: 'dps',
      size: 'medium',
      dps: 280,
      ehp: 95000,
      repairPower: 0,
      mobility: 0.5,
      ewarResistance: 0.6,
      priority: 7,
      threat: 6.9
    },
    'Onyx': {
      type: 'dps',
      size: 'medium',
      dps: 260,
      ehp: 100000,
      repairPower: 0,
      mobility: 0.5,
      ewarResistance: 0.6,
      priority: 7,
      threat: 6.8
    },
  
    // Combat Interceptors
    'Taranis': {
      type: 'dps',
      size: 'small',
      dps: 150,
      ehp: 8000,
      repairPower: 0,
      mobility: 1.0,
      ewarResistance: 0.3,
      priority: 6,
      threat: 5.5
    },
    'Crusader': {
      type: 'dps',
      size: 'small',
      dps: 140,
      ehp: 8500,
      repairPower: 0,
      mobility: 1.0,
      ewarResistance: 0.3,
      priority: 6,
      threat: 5.4
    },
    'Claw': {
      type: 'dps',
      size: 'small',
      dps: 145,
      ehp: 7500,
      repairPower: 0,
      mobility: 1.0,
      ewarResistance: 0.3,
      priority: 6,
      threat: 5.4
    },
    'Raptor': {
      type: 'dps',
      size: 'small',
      dps: 135,
      ehp: 9000,
      repairPower: 0,
      mobility: 1.0,
      ewarResistance: 0.3,
      priority: 6,
      threat: 5.3
    },
  
    // Fleet Interceptors (продолжение)
  'Malediction': {
    type: 'ewar',
    size: 'small',
    dps: 110,
    ehp: 6500,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.3,
    priority: 7,
    threat: 5.9
  },
  'Stiletto': {
    type: 'ewar',
    size: 'small',
    dps: 95,
    ehp: 6000,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.3,
    priority: 7,
    threat: 5.7
  },
  'Ares': {
    type: 'ewar',
    size: 'small',
    dps: 105,
    ehp: 6800,
    repairPower: 0,
    mobility: 1.0,
    ewarResistance: 0.3,
    priority: 7,
    threat: 5.8
  },

  // Electronic Attack Frigates
  'Griffin': {
    type: 'ewar',
    size: 'small',
    dps: 40,
    ehp: 5000,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.2,
    priority: 6,
    threat: 4.8
  },
  'Maulus': {
    type: 'ewar',
    size: 'small',
    dps: 45,
    ehp: 4800,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.2,
    priority: 6,
    threat: 4.9
  },
  'Crucifier': {
    type: 'ewar',
    size: 'small',
    dps: 35,
    ehp: 5200,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.2,
    priority: 6,
    threat: 4.7
  },
  'Vigil': {
    type: 'ewar',
    size: 'small',
    dps: 50,
    ehp: 4500,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.2,
    priority: 6,
    threat: 5.0
  },

  // Logistics Frigates
  'Bantam': {
    type: 'logistics',
    size: 'small',
    dps: 0,
    ehp: 6000,
    repairPower: 120,
    mobility: 0.8,
    ewarResistance: 0.3,
    priority: 7,
    threat: 5.2
  },
  'Navitas': {
    type: 'logistics',
    size: 'small',
    dps: 0,
    ehp: 5500,
    repairPower: 130,
    mobility: 0.8,
    ewarResistance: 0.3,
    priority: 7,
    threat: 5.3
  },
  'Inquisitor': {
    type: 'logistics',
    size: 'small',
    dps: 0,
    ehp: 5800,
    repairPower: 125,
    mobility: 0.8,
    ewarResistance: 0.3,
    priority: 7,
    threat: 5.2
  },
  'Burst': {
    type: 'logistics',
    size: 'small',
    dps: 0,
    ehp: 5200,
    repairPower: 135,
    mobility: 0.9,
    ewarResistance: 0.3,
    priority: 7,
    threat: 5.4
  },
  // Force Recon Ships
  'Curse': {
    type: 'ewar',
    size: 'medium',
    dps: 210,
    ehp: 53000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.7,
    priority: 8,
    threat: 7.0
  },
  // Additional Battlecruisers
  'Ferox': {
    type: 'dps',
    size: 'medium',
    dps: 475,
    ehp: 80000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    priority: 6,
    threat: 6.4,
    damageType: 'instant'
  },
  'Brutix': {
    type: 'dps',
    size: 'medium',
    dps: 725,
    ehp: 73000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    priority: 6,
    threat: 6.5,
    damageType: 'instant'
  },
  'Prophecy': {
    type: 'dps',
    size: 'medium',
    dps: 450,
    ehp: 85000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    priority: 6,
    threat: 6.3,
    damageType: 'instant'
  },
  'Cyclone': {
    type: 'dps',
    size: 'medium',
    dps: 500,
    ehp: 75000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.5,
    priority: 6,
    threat: 6.4,
    damageType: 'instant'
  },

  // Attack Battlecruisers
  'Talos': {
    type: 'dps',
    size: 'medium',
    dps: 800,
    ehp: 45000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.4,
    priority: 6,
    threat: 7.0,
    damageType: 'instant'
  },
  'Naga': {
    type: 'dps',
    size: 'medium',
    dps: 750,
    ehp: 48000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.4,
    priority: 6,
    threat: 6.9,
    damageType: 'instant'
  },
  'Oracle': {
    type: 'dps',
    size: 'medium',
    dps: 775,
    ehp: 46000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.4,
    priority: 6,
    threat: 6.9,
    damageType: 'instant'
  },
  'Tornado': {
    type: 'dps',
    size: 'medium',
    dps: 825,
    ehp: 42000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.4,
    priority: 6,
    threat: 7.1,
    damageType: 'instant'
  },

  // Additional Regular Cruisers
  'Stabber': {
    type: 'dps',
    size: 'medium',
    dps: 350,
    ehp: 48000,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.4,
    priority: 5,
    threat: 5.5,
    damageType: 'instant'
  },
  'Rupture': {
    type: 'dps',
    size: 'medium',
    dps: 375,
    ehp: 52000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    priority: 5,
    threat: 5.6,
    damageType: 'instant'
  },
  'Vexor': {
    type: 'dps',
    size: 'medium',
    dps: 425,
    ehp: 47000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    priority: 5,
    threat: 5.8,
    damageType: 'instant'
  },
  'Arbitrator': {
    type: 'ewar',
    size: 'medium',
    dps: 250,
    ehp: 45000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.5,
    priority: 6,
    threat: 5.7,
    damageType: 'instant'
  },
  'Omen': {
    type: 'dps',
    size: 'medium',
    dps: 360,
    ehp: 50000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    priority: 5,
    threat: 5.5,
    damageType: 'instant'
  },
  'Augoror': {
    type: 'logistics',
    size: 'medium',
    dps: 100,
    ehp: 45000,
    repairPower: 400,
    mobility: 0.6,
    ewarResistance: 0.5,
    priority: 8,
    threat: 6.0,
    repairEfficiency: 0.8
  },
  'Exequror': {
    type: 'logistics',
    size: 'medium',
    dps: 120,
    ehp: 42000,
    repairPower: 425,
    mobility: 0.6,
    ewarResistance: 0.5,
    priority: 8,
    threat: 6.0,
    repairEfficiency: 0.8
  },
  'Osprey': {
    type: 'logistics',
    size: 'medium',
    dps: 90,
    ehp: 40000,
    repairPower: 450,
    mobility: 0.6,
    ewarResistance: 0.5,
    priority: 8,
    threat: 6.0,
    repairEfficiency: 0.8
  },
  'Scythe': {
    type: 'logistics',
    size: 'medium',
    dps: 110,
    ehp: 38000,
    repairPower: 400,
    mobility: 0.7,
    ewarResistance: 0.5,
    priority: 8,
    threat: 5.9,
    repairEfficiency: 0.8
  },

  // Additional Pirate Cruisers
  'Ashimmu': {
    type: 'dps',
    size: 'medium',
    dps: 400,
    ehp: 58000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.5,
    priority: 7,
    threat: 6.8,
    damageType: 'instant'
  },
  'Vigilant': {
    type: 'dps',
    size: 'medium',
    dps: 475,
    ehp: 52000,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    priority: 7,
    threat: 7.2,
    damageType: 'instant'
  },
  'Stratios': {
    type: 'dps',
    size: 'medium',
    dps: 450,
    ehp: 65000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.6,
    priority: 7,
    threat: 7.0,
    damageType: 'instant'
  },

  // Navy/Faction Battlecruisers
  'Drake Navy Issue': {
    type: 'dps',
    size: 'medium',
    dps: 525,
    ehp: 95000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    priority: 6,
    threat: 7.0,
    damageType: 'instant'
  },
  'Brutix Navy Issue': {
    type: 'dps',
    size: 'medium',
    dps: 800,
    ehp: 85000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    priority: 6,
    threat: 7.1,
    damageType: 'instant'
  },
  'Harbinger Navy Issue': {
    type: 'dps',
    size: 'medium',
    dps: 575,
    ehp: 88000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    priority: 6,
    threat: 7.0,
    damageType: 'instant'
  },
  'Hurricane Fleet Issue': {
    type: 'dps',
    size: 'medium',
    dps: 625,
    ehp: 92000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.6,
    priority: 6,
    threat: 7.2,
    damageType: 'instant'
  },
  'Drekavac': {
    type: 'dps',
    size: 'medium',
    dps: 625,
    ehp: 100000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.6,
    priority: 6,
    threat: 7.2,
    damageType: 'instant'
  },
  // Command Ships (Additional)
  'Nighthawk': {
    type: 'command',
    size: 'medium',
    dps: 750,
    ehp: 145000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.8,
    priority: 8,
    threat: 7.5,
    damageType: 'instant'
  },
  'Astarte': {
    type: 'command',
    size: 'medium',
    dps: 550,
    ehp: 115000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.8,
    priority: 8,
    threat: 7.7,
    damageType: 'instant'
  },

  // Battlecruisers
  'Hurricane': {
    type: 'dps',
    size: 'medium',
    dps: 550,
    ehp: 70000,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.5,
    priority: 6,
    threat: 6.5,
    damageType: 'instant'
  },
  'Drake': {
    type: 'dps',
    size: 'medium',
    dps: 450,
    ehp: 85000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    priority: 6,
    threat: 6.3,
    damageType: 'instant'
  },
  'Myrmidon': {
    type: 'dps',
    size: 'medium',
    dps: 500,
    ehp: 75000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    priority: 6,
    threat: 6.4,
    damageType: 'instant'
  },
  'Harbinger': {
    type: 'dps',
    size: 'medium',
    dps: 525,
    ehp: 72000,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.5,
    priority: 6,
    threat: 6.4,
    damageType: 'instant'
  },

  // Regular Cruisers
  'Moa': {
    type: 'dps',
    size: 'medium',
    dps: 350,
    ehp: 55000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    priority: 5,
    threat: 5.5,
    damageType: 'instant'
  },
  'Caracal': {
    type: 'dps',
    size: 'medium',
    dps: 375,
    ehp: 50000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    priority: 5,
    threat: 5.6,
    damageType: 'instant'
  },
  'Thorax': {
    type: 'dps',
    size: 'medium',
    dps: 400,
    ehp: 45000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.4,
    priority: 5,
    threat: 5.7,
    damageType: 'instant'
  },

  // Pirate Cruisers
  'Phantasm': {
    type: 'dps',
    size: 'medium',
    dps: 450,
    ehp: 60000,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.5,
    priority: 7,
    threat: 7.0,
    damageType: 'instant'
  },
  'Cynabal': {
    type: 'dps',
    size: 'medium',
    dps: 425,
    ehp: 55000,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.5,
    priority: 7,
    threat: 7.1,
    damageType: 'instant'
  },
  'Gila': {
    type: 'dps',
    size: 'medium',
    dps: 600,
    ehp: 70000,
    repairPower: 0,
    mobility: 0.7,
    ewarResistance: 0.5,
    priority: 7,
    threat: 7.5,
    damageType: 'instant'
  },
  'Orthrus': {
    type: 'dps',
    size: 'medium',
    dps: 500,
    ehp: 50000,
    repairPower: 0,
    mobility: 0.9,
    ewarResistance: 0.5,
    priority: 7,
    threat: 7.3,
    damageType: 'instant'
  },
    'Bhaalgorn': {
      type: 'dps',
      priority: 7,
      ehp: 150000,
      threat: 9,
      dps: 1200,
      repairPower: 0,
      mobility: 0.5,
      ewarResistance: 0.6,
      size: 'large',
      damageType: 'instant'
    },
    'Astero': {
      type: 'ewar',
      priority: 4,
      ehp: 7000,
      threat: 4,
      dps: 140,
      repairPower: 0,
      mobility: 0.9,
      ewarResistance: 0.4,
      size: 'small',
      damageType: 'instant'
    },
  
    // Navy Battleships
    'Apocalypse Navy Issue': {
      type: 'dps',
      priority: 7,
      ehp: 100000,
      threat: 8,
      dps: 1000,
      repairPower: 0,
      mobility: 0.5,
      ewarResistance: 0.6,
      size: 'large',
      damageType: 'instant'
    },
    'Exequror Navy Issue': {
      type: 'dps',
      priority: 6,
      ehp: 53000,
      threat: 6,
      dps: 400,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.5,
      size: 'medium',
      damageType: 'instant'
    },
    'Scythe Fleet Issue': {
      type: 'dps',
      priority: 6,
      ehp: 51000,
      threat: 6,
      dps: 375,
      repairPower: 0,
      mobility: 0.8,
      ewarResistance: 0.5,
      size: 'medium',
      damageType: 'instant'
    },
    'Augoror Navy Issue': {
      type: 'dps',
      priority: 6,
      ehp: 54000,
      threat: 6,
      dps: 390,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.5,
      size: 'medium',
      damageType: 'instant'
    },
    'Osprey Navy Issue': {
      type: 'dps',
      priority: 6,
      ehp: 52000,
      threat: 6,
      dps: 385,
      repairPower: 0,
      mobility: 0.7,
      ewarResistance: 0.5,
      size: 'medium',
      damageType: 'instant'
    },
  'Claymore': {
    type: 'command',
    priority: 8,
    ehp: 125000,
    threat: 7,
    dps: 550,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.8,
    size: 'medium',
    damageType: 'instant'
  },

  // Faction Command Ships
  'Monitor': {
    type: 'command',
    priority: 8,
    ehp: 200000,
    threat: 3,
    dps: 0,
    repairPower: 0,
    mobility: 0.8,
    ewarResistance: 0.9,
    size: 'medium',
    damageType: 'instant'
  },
   // Additional Fleet Issue Battlecruisers
   'Cyclone Fleet Issue': {
    type: 'dps',
    priority: 6,
    ehp: 88000,
    threat: 7,
    dps: 725,
    repairPower: 0,
    mobility: 0.6,
    ewarResistance: 0.6,
    size: 'medium',
    damageType: 'instant'
  },
  'Tempest Fleet Issue': {
    type: 'dps',
    priority: 7,
    ehp: 148000,
    threat: 8,
    dps: 1100,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  },
  'Megathron Navy Issue': {
    type: 'dps',
    priority: 7,
    ehp: 142000,
    threat: 8,
    dps: 1250,
    repairPower: 0,
    mobility: 0.5,
    ewarResistance: 0.6,
    size: 'large',
    damageType: 'instant'
  }
    
};

// Продолжение списка алиасов
export const shipAliases: Record<string, string> = {
  // Titans
'Avatar': 'Avatar',
'Erebus': 'Erebus',
'Leviathan': 'Leviathan',
'Ragnarok': 'Ragnarok',

// Supercarriers
'Hel': 'Hel',
'Nyx': 'Nyx',
'Aeon': 'Aeon',
'Wyvern': 'Wyvern',

// Dreadnoughts
'Phoenix': 'Phoenix',
'Revelation': 'Revelation',
'Naglfar': 'Naglfar',
'Moros': 'Moros',

// Carriers
'Chimera': 'Chimera',
'Nidhoggur': 'Nidhoggur',
'Thanatos': 'Thanatos',
'Archon': 'Archon',

// Battleships
'Apocalypse': 'Apocalypse',
'Armageddon': 'Armageddon',
'Abaddon': 'Abaddon',
'Kronos': 'Kronos',
'Leshak': 'Leshak',
'Machariel': 'Machariel',
'Megathron': 'Megathron',
'Nightmare': 'Nightmare',
'Paladin': 'Paladin',
'Rattlesnake': 'Rattlesnake',
'Raven': 'Raven',
'Tempest': 'Tempest',
'Vargur': 'Vargur',
'Vindicator': 'Vindicator',
'Golem': 'Golem',

// Battlecruisers
'Brutix': 'Brutix',
'Cyclone': 'Cyclone',
'Drake': 'Drake',
'Ferox': 'Ferox',
'Harbinger': 'Harbinger',
'Hurricane': 'Hurricane',
'Myrmidon': 'Myrmidon',
'Prophecy': 'Prophecy',

// Command Ships
'Absolution': 'Absolution',
'Damnation': 'Damnation',
'Eos': 'Eos',
'Sleipnir': 'Sleipnir',
'Vulture': 'Vulture',

// Strategic Cruisers
'Legion': 'Legion',
'Loki': 'Loki',
'Proteus': 'Proteus',
'Tengu': 'Tengu',

// Heavy Assault Cruisers
'Cerberus': 'Cerberus',
'Deimos': 'Deimos',
'Eagle': 'Eagle',
'Muninn': 'Muninn',
'Vagabond': 'Vagabond',
'Zealot': 'Zealot',

// Cruisers
'Arbitrator': 'Arbitrator',
'Augoror': 'Augoror',
'Caracal': 'Caracal',
'Exequror': 'Exequror',
'Maller': 'Maller',
'Moa': 'Moa',
'Omen': 'Omen',
'Osprey': 'Osprey',
'Rupture': 'Rupture',
'Scythe': 'Scythe',
'Stabber': 'Stabber',
'Thorax': 'Thorax',
'Vexor': 'Vexor',

// Frigates
'Executioner': 'Executioner',
'Punisher': 'Punisher',
'Rifter': 'Rifter',
'Merlin': 'Merlin',
'Incursus': 'Incursus',
'Atron': 'Atron',

// Assault Frigates
'Hyena': 'Hyena',
'Keres': 'Keres',
'Kitsune': 'Kitsune',
'Sabre': 'Sabre',

// Interceptors
'Ares': 'Ares',
'Claw': 'Claw',
'Crusader': 'Crusader',
'Malediction': 'Malediction',
'Raptor': 'Raptor',
'Stiletto': 'Stiletto',
'Taranis': 'Taranis',

// Logistics
'Basilisk': 'Basilisk',
'Guardian': 'Guardian',
'Oneiros': 'Oneiros',
'Scimitar': 'Scimitar',

// Recon Ships
'Arazu': 'Arazu',
'Falcon': 'Falcon',
'Huginn': 'Huginn',
'Lachesis': 'Lachesis',
'Rapier': 'Rapier',
'Rook': 'Rook',

// Interdictors
'Eris': 'Eris',
'Flycatcher': 'Flycatcher',
'Heretic': 'Heretic',

// Covert Ops
'Anathema': 'Anathema',
'Buzzard': 'Buzzard',
'Helios': 'Helios',
'Chevalier': 'Chevalier',

// Support Frigates
'Burst': 'Burst',
'Bantam': 'Bantam',
'Navitas': 'Navitas',
'Inquisitor': 'Inquisitor',

// Tactical Destroyers
'Confessor': 'Confessor',
'Jackdaw': 'Jackdaw',
'Hecate': 'Hecate',
'Svipul': 'Svipul',

// Mining Barges
'Procurer': 'Procurer',
'Retriever': 'Retriever',
'Covetor': 'Covetor',

// Industrial Ships
'Iteron Mark V': 'Iteron Mark V',
'Mammoth': 'Mammoth',
'Badger': 'Badger',
'Hoarder': 'Hoarder',

// Other Special Ships
'Nestor': 'Nestor',
'Pontifex': 'Pontifex',
'Curse': 'Curse',
'Gila': 'Gila',
'Phantasm': 'Phantasm',
'Cynabal': 'Cynabal',
'Orthrus': 'Orthrus',
'Stratios': 'Stratios',
'Vigilant': 'Vigilant',
'Astero': 'Astero',
'Barghest': 'Barghest',

// Black Ops Battleships
'Redeemer': 'Redeemer',
'Sin': 'Sin',
'Panther': 'Panther',
'Widow': 'Widow',

// Recon Ships (Force and Combat)
'Pilgrim': 'Pilgrim',

// Attack Battlecruisers
'Talos': 'Talos',
'Naga': 'Naga',
'Oracle': 'Oracle',
'Tornado': 'Tornado',

// Expedition Frigates
'Prospect': 'Prospect',
'Endurance': 'Endurance',

// Command Destroyers
'Bifrost': 'Bifrost',
'Stork': 'Stork',
'Magus': 'Magus',

// Shuttles
'Impairor': 'Impairor',
'Ibis': 'Ibis',
'Reaper': 'Reaper',
'Velator': 'Velator',

// Standard Industrial Ships
'Tayra': 'Tayra',
'Wreathe': 'Wreathe',
'Nereus': 'Nereus',

// Transport Ships (Deep Space and Blockade Runners)
'Crane': 'Crane',
'Prorator': 'Prorator',
'Viator': 'Viator',
'Prowler': 'Prowler',
'Bustard': 'Bustard',
'Mastodon': 'Mastodon',
'Impel': 'Impel',
'Occator': 'Occator',
'Epithal': 'Epithal',
'Bestower': 'Bestower',


// Exhumers
'Skiff': 'Skiff',
'Mackinaw': 'Mackinaw',
'Hulk': 'Hulk',


// Special Edition Ships
'Praxis': 'Praxis',
'Gnosis': 'Gnosis',
'Sunesis': 'Sunesis',
'Apotheosis': 'Apotheosis',
'Victorieux Luxury Yacht': 'Victorieux Luxury Yacht',
// Industrial Command Ships
'Orca': 'Orca',
'Porpoise': 'Porpoise',
'Rorqual': 'Rorqual',



// Capitals (Non-combat)
'Bowhead': 'Bowhead',

// Triglavian Ships
'Damavik': 'Damavik',
'Vedmak': 'Vedmak',
'Ikitursa': 'Ikitursa',
'Draugur': 'Draugur',
'Zarmazd': 'Zarmazd',

// Edencom Ships
'Skybreaker': 'Skybreaker',
'Stormbringer': 'Stormbringer',
'Thunderchild': 'Thunderchild',

// Empire Faction Ships
'Succubus': 'Succubus',
'Daredevil': 'Daredevil',
'Worm': 'Worm',
'Dramiel': 'Dramiel',
'Cruor': 'Cruor',

// Advanced Cruisers (Heavy Interdiction Cruisers)
'Broadsword': 'Broadsword',
'Devoter': 'Devoter',
'Onyx': 'Onyx',
'Phobos': 'Phobos',

// Capital Industrial Ships (Expanded)
'Noctis': 'Noctis',


// Tech 1 Destroyers
'Catalyst': 'Catalyst',
'Coercer': 'Coercer',
'Cormorant': 'Cormorant',
'Thrasher': 'Thrasher',


// Empire Exploration Frigates
'Imicus': 'Imicus',
'Probe': 'Probe',
'Heron': 'Heron',
'Magnate': 'Magnate',



// Empire Navy Issue Ships
'Federation Navy Comet': 'Federation Navy Comet',
'Imperial Navy Slicer': 'Imperial Navy Slicer',
'Caldari Navy Hookbill': 'Caldari Navy Hookbill',
'Republic Fleet Firetail': 'Republic Fleet Firetail',

// Navy Faction Battlecruisers
'Brutix Navy Issue': 'Brutix Navy Issue',
'Harbinger Navy Issue': 'Harbinger Navy Issue',
'Drake Navy Issue': 'Drake Navy Issue',
'Hurricane Fleet Issue': 'Hurricane Fleet Issue',


// Mining Frigates
'Venture': 'Venture',

// Navy Faction Cruisers
'Caracal Navy Issue': 'Caracal Navy Issue',
'Vexor Navy Issue': 'Vexor Navy Issue',
'Stabber Fleet Issue': 'Stabber Fleet Issue',
'Omen Navy Issue': 'Omen Navy Issue',

// Rare/Unique Ships
'Echelon': 'Echelon',
'Enigma': 'Enigma',
'Guardian-Vexor': 'Guardian-Vexor',
'Gold Magnate': 'Gold Magnate',
'Silver Magnate': 'Silver Magnate',
'Mimir': 'Mimir',
'Freki': 'Freki',
'Malice': 'Malice',
'Vangel': 'Vangel',
'Chremoas': 'Chremoas',
'Etana': 'Etana',
'Whiptail': 'Whiptail',
'Rabisu': 'Rabisu',
'Pacifier': 'Pacifier',
'Enforcer': 'Enforcer',
'Marshal': 'Marshal',
// Empire Shuttles
'Interbus Shuttle': 'Interbus Shuttle',
'Gallente Shuttle': 'Gallente Shuttle',
'Caldari Shuttle': 'Caldari Shuttle',
'Amarr Shuttle': 'Amarr Shuttle',
'Minmatar Shuttle': 'Minmatar Shuttle',

// Triglavian Dreadnought
'Zirnitra': 'Zirnitra',

// Faction Shuttles
'Leopard': 'Leopard',
'Zephyr': 'Zephyr',

// Triglavian Assault Frigates
'Nergal': 'Nergal',

// Triglavian Logistics Cruisers
'Rodiva': 'Rodiva',
'Drekavac': 'Drekavac',

// Empire Support and Salvage Frigates
'Thalia': 'Thalia',
'Dagon': 'Dagon',

// Faction Command Ships
'Chameleon': 'Chameleon',

// Faction Dreadnought
'Vehement': 'Vehement',

// Upwell Structures (Stations and Citadels)
'Astrahus': 'Astrahus',
'Fortizar': 'Fortizar',
'Keepstar': 'Keepstar',
'Raitaru': 'Raitaru',
'Azbel': 'Azbel',
'Sotiyo': 'Sotiyo',
'Tatara': 'Tatara',


// Industrial Haulers
'Iteron Mark III': 'Iteron Mark III',
'Badger Mark II': 'Badger Mark II',
// Non-Empire Logistics Frigates
'Kirathane': 'Kirathane',
'Vespecitron': 'Vespecitron',

// Empire Industrial Ships (Additional)
'Iteron Mark IV': 'Iteron Mark IV',
'Imicus Navy Issue': 'Imicus Navy Issue',
'Bhaalgorn': 'Bhaalgorn',
'Apocalypse Navy Issue': 'Apocalypse Navy Issue',
'Exequror Navy Issue': 'Exequror Navy Issue',
'Scythe Fleet Issue': 'Scythe Fleet Issue',
'Augoror Navy Issue': 'Augoror Navy Issue',
'Osprey Navy Issue': 'Osprey Navy Issue',
'Claymore': 'Claymore',
'Monitor': 'Monitor',
'Cyclone Fleet Issue': 'Cyclone Fleet Issue',
'Tempest Fleet Issue':   'Tempest Fleet Issue',
'Megathron Navy Issue': 'Megathron Navy Issue'
};

// Функции для работы с кораблями
export const findShipByAlias = (alias: string): string | null => {
  const normalizedAlias = alias.toLowerCase().trim();
  return shipAliases[normalizedAlias] || null;
};

export const getShipStats = (shipName: string): FleetInterfaces.ShipStats | null => {
  const canonicalName = findShipByAlias(shipName);
  return canonicalName ? shipStats[canonicalName] : null;
};

// Функция для нормализации названий кораблей из D-Scan
export const normalizeDscanShipName = (dscanLine: string): string | null => {
  const parts = dscanLine.split('\t');
  // Берем второй справа столбец (длина - 2)
  if (parts.length >= 3) {
    const shipName = parts[parts.length - 2].trim();
    return findShipByAlias(shipName);
  }
  return null;
};

// Функция для нормализации названий кораблей из Fleet Composition
export const normalizeFleetCompShipName = (fleetCompLine: string): string | null => {
  const parts = fleetCompLine.split('\t');
  // Берем третий слева столбец (индекс 2)
  if (parts.length >= 3) {
    const shipName = parts[2].trim();
    return findShipByAlias(shipName);
  }
  return null;
};

// Типы кораблей и их роли для анализа
export const shipRoles = {
  logistics: {
    name: 'Логистика',
    description: 'Корабли поддержки, обеспечивающие ремонт',
    importance: 9
  },
  dps: {
    name: 'DPS',
    description: 'Корабли, специализирующиеся на нанесении урона',
    importance: 7
  },
  ewar: {
    name: 'EWAR',
    description: 'Корабли электронной войны',
    importance: 8
  },
  command: {
    name: 'Командный корабль',
    description: 'Корабли с бонусами для флота',
    importance: 8
  }
};

// Функция для анализа состава флота
export const analyzeFleetComposition = (ships: string[]): FleetCompositionAnalysis => {
  const composition: FleetCompositionAnalysis = {
    totalShips: ships.length,
    byType: {},
    bySize: {},
    recommendations: [],
    balance: 0
  };

  ships.forEach(ship => {
    const stats = getShipStats(ship);
    if (stats) {
      // Подсчет по типам
      composition.byType[stats.type] = (composition.byType[stats.type] || 0) + 1;
      // Подсчет по размерам
      composition.bySize[stats.size] = (composition.bySize[stats.size] || 0) + 1;
    }
  });

  // Анализ баланса флота
  const logisticsCount = composition.byType['logistics'] || 0;
  const dpsCount = composition.byType['dps'] || 0;
  const ewarCount = composition.byType['ewar'] || 0;

  // Рекомендации по составу
  if (logisticsCount < ships.length * 0.2) {
    composition.recommendations.push('Недостаточно логистов. Рекомендуется 20-25% от состава флота');
  }
  if (ewarCount === 0) {
    composition.recommendations.push('Отсутствуют корабли EWAR. Рекомендуется добавить поддержку');
  }
  if (dpsCount < ships.length * 0.5) {
    composition.recommendations.push('Недостаточно DPS кораблей. Рекомендуется 50-60% от состава флота');
  }

  // Оценка общего баланса флота (0-100)
  composition.balance = calculateFleetBalance(composition);

  return composition;
};

interface FleetCompositionAnalysis {
  totalShips: number;
  byType: Record<string, number>;
  bySize: Record<string, number>;
  recommendations: string[];
  balance: number;
}

function calculateFleetBalance(composition: FleetCompositionAnalysis): number {
  const total = composition.totalShips;
  if (total === 0) return 0;

  const logisticsRatio = (composition.byType['logistics'] || 0) / total;
  const dpsRatio = (composition.byType['dps'] || 0) / total;
  const ewarRatio = (composition.byType['ewar'] || 0) / total;

  // Идеальные пропорции
  const idealLogistics = 0.22; // 22%
  const idealDps = 0.6; // 60%
  const idealEwar = 0.18; // 18%

  // Вычисляем отклонение от идеальных пропорций
  const logisticsDeviation = Math.abs(logisticsRatio - idealLogistics);
  const dpsDeviation = Math.abs(dpsRatio - idealDps);
  const ewarDeviation = Math.abs(ewarRatio - idealEwar);

  // Считаем общий баланс
  const balance = 100 - ((logisticsDeviation + dpsDeviation + ewarDeviation) / 3) * 100;
  
  return Math.round(Math.max(0, Math.min(100, balance)));
}