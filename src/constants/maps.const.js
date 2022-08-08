export const AREA_NAMES = {
  hyruleField: 'Hyrule Field',
  kokiriForest: 'Kokiri Forest',
  kakarikoVillage: 'Kakariko Village',
  lostWoods: 'Lost Woods',
  lakeHylia: 'Lake Hylia',
  hyruleCastle: 'Hyrule Castle',
  zorasRiver: "Zora's River",
  lonLonRanch: "Lon Lon Ranch",
  gerudoValley: "Gerudo Valley",
  fireTemple: "Fire Temple"
}

export const CHECK_DATA = {
  // HYRULE FIELD
  HF_GROTTO_1: {
    checkName: 'SE Open Grotto',
    defaultReward: 'rupeeBlue',
    source: 'chest',
    location: [40,74],
    reqs: {
      full: [],
      one: [],
      half: []
    }
  },
  HF_GROTTO_2: {
    checkName: 'Inside Fence Hidden Grotto',
    defaultReward: 'heartPiece',
    source: 'scrub',
    location: [34.5,75],
    reqs:{
      full: [],
      one: ['bombs','hammer'],
      half: ['bombchus']
    }
  },
  HF_GROTTO_3: {
    checkName: 'SE Boulder Grotto',
    defaultReward: 'rupeeRed',
    source: '',
    location: [53,68],
    reqs: {
      full: [],
      one: ['bombs','hammer'],
      half: ['bombchus']
    }
  },
  HF_GROTTO_4: {
    checkName: 'Tektite Hidden Grotto',
    defaultReward: 'heartPiece',
    source: '',
    location: [0,0],
    reqs: {
      full: [],
      one: ['goldScale','ironBoots'],
      half: []
    }
  },
  HF_GROTTO_5: {
    checkName: 'Near Castle Town Boulder Grotto',
    defaultReward: 'heart-piece',
    source: '',
    location: [48,24],
    reqs: {
      full: [],
      one: ['bombs','hammer'],
      half: ['bombchus']
    }
  },



  // LON LON RANCH
  LLR_CHICKENS: {
    checkName: "Talon's Chicken Game",
    defaultReward: 'heartPiece',
    source: 'npc',
    location: [],
    reqs: {
      age: 'child',
      full: ['childTrade3'], one: [],half: [],
    }
  }, 
  LLR_BLOCK_PUZZLE: {
    checkName: 'Tower Block Puzzle',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: {
      age: 'child',
      full: [], one: [],half: [],
    }
  },
  LLR_MALON_SONG: {
    checkName: 'Malon Song',
    defaultReward: 'songEpona',
    source: 'npc',
    location: [],
    reqs: {
      age: 'child',
      full: ['ocarina'],
      one: [],half: [],
    }
  },




  // KAKARIKO VILLAGE
  KV_GROTTO_1: {
    checkName: 'Open Grotto',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs:{
      age: 'any',
      full: [],
      one: [],
      half: []
    }
  },
  KV_ANJU_CHILD: {
    checkName: "Anju's Cucoos",
    defaultReward: 'bottle',
    source: '',
    location: [],
    reqs: { age: 'child', full: [], one:[], half:[] }
  },
  KV_IMPA_COW: {
    checkName: "Impa's Cow",
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: { age: 'adult', full: [], one:[], half:[] } /* This one is possible as Child IF you haven't shuffled Owl Drops */
  },
  KV_ROOF_MAN: {
    checkName: 'Man on the Roof',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: {
      age: 'adult',
      full: ['hookshot'],
      one: [],
      half: [],
    }
  },
  KV_GRAVEYARD_TOUR: {
    checkName: "Dampe's Graveyard Tour",
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: { age: 'child', full: [], one:[], half:[] }
  },
  KV_SHIELD_GRAVE: {
    checkName: "Hylian Shield Grave",
    defaultReward: 'hylianShield',
    source: '',
    location: [],
    reqs: { age: 'any', full: [], one:[], half:[] }
  },
  KV_REDEAD_GRAVE: {
    checkName: 'ReDead Grave',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: {
      age: 'any',
      full: ['songSun'],
      one: [],
      half: [],
    }
  },
  KV_ROYAL_TOMB_TORCH: {
    checkName: 'Royal Tomb Torches',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: { /* TODO - This is where reqs get confusing. You need Dins Fire for Child, or Dins Fire OR Fire Arrows as Adult*/
      age: 'any',
      full: [],
      one: ['dinsFire','fireArrows'],
      half: [],
    }
  },




  // KOKIRI FOREST
  KF_GROTTO_1: {
    checkName: 'Storm Grotto',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs:{
      age: 'any',
      full: ['ocarina','songStorms'],
      one: [], half: []
    }
  },
  KF_SARIAS_GIFT: {
    checkName: "Saria's Farewell Gift",
    defaultReward: 'ocarina',
    source: 'npc',
    location: [],
    reqs: { age: 'any', full: [], one: [], half: [] }
  },
  KF_MIDO_1: {
    checkName: "Mido's Treasure NW",
    defaultReward: 'blueRupee',
    source: '',
    location: [],
    reqs: { age:'any', full: [], one: [], half: [], }
  },
  KF_MIDO_2: {
    checkName: "Mido's Treasure NE",
    defaultReward: 'blueRupee',
    source: '',
    location: [],
    reqs: { age:'any', full: [], one: [], half: [], }
  },
  KF_MIDO_3: {
    checkName: "Mido's Treasure SW",
    defaultReward: 'blueRupee',
    source: '',
    location: [],
    reqs: { age:'any', full: [], one: [], half: [], }
  },
  KF_MIDO_4: {
    checkName: "Mido's Treasure SE",
    defaultReward: 'blueRupee',
    source: '',
    location: [],
    reqs: { age:'any', full: [], one: [], half: [], }
  },
  KF_KOKIRI_SWORD: {
    checkName: "Kokiri Sword Maze",
    defaultReward: 'kokiriSword',
    source: 'chest',
    location: [],
    reqs: { age:'child', full: [], one: [], half: [], }
  },



  // LOST WOODS
  LW_BRIDGE_SCRUB: {
    checkName: 'Bridge Area Business Scrub',
    defaultReward: 'dekuSticks',
    source: 'scrub',
    location: [],
    reqs: { age: 'any', full: [], one: [],half: [] }
  },



  // ZORA'S RIVER
  ZR_GROTTO_1: {
    checkName: 'Open Grotto',
    defaultReward: 'redRupee',
    source: '',
    location: [],
    reqs: { age: 'any', full: [], one: [], half: [] }
  },




  // LAKE HYLIA
  LH_FISHING_1: {
    checkName: 'Child Fishing',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: { age: 'child', full:[], one:[], half:[] }
  },




  // HYRULE CASTLE
  HC_MALON: {
    checkName: 'Malon Egg',
    defaultReward: '',
    source: '',
    location: [],
    reqs: {
      full: [],
      one: [],
      half: [],
    }
  },
  HC_RICHARD: {
    checkName: 'Find Richard',
    defaultReward: '',
    source: '',
    location: [],
    reqs: {
      full: [],
      one: [],
      half: [],
    }
  },
  HC_SHOOTING_GAME: {
    checkName: 'Slingshot Shooting Gallery',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: {
      full: [],
      one: [],
      half: [],
    }
  },



  // GERUDO VALLEY
  GV_CLIFFSIDE_CRATE: {
    checkName: 'Cliffside Crate',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: {
      age: 'child',
      full: [], one: [], half: [],
    }
  },
  GV_WATERFALL: {
    checkName: 'Behind the Waterfall',
    defaultReward: 'heartPiece',
    source: '',
    location: [],
    reqs: {
      age: 'child', 
      full: [], one: [], half: [],
    }
  },



  // FIRE TEMPLE
  FT_GORON_1: {
    checkName: 'Goron Near Darunia',
    defaultReward: 'smallKey',
    source: '',
    location: [32.75,12.75],
    reqs: { age: 'any',full: [],one: [],half: [] }
  },
  FT_GORON_2: {
    checkName: 'Bomb Wall Goron',
    defaultReward: 'smallKey',
    source: '',
    location: [68,17.5],
    reqs: { age: 'any', full: ['bombs'], one: [], half: [] }
  },
  FT_GORON_3: {
    checkName: 'Under Time Block Goron',
    defaultReward: 'smallKey',
    source: '',
    location: [75.5,2.5],
    reqs: { age: 'any', full: [], one: [], half: [] }
  },
  FT_GORON_4: {
    checkName: 'Boulder Room Hallway Goron',
    defaultReward: 'smallKey',
    source: '',
    location: [64,41.7],
    reqs: { age: 'any', full: [], one: [], half: [] }
  },
  FT_GORON_5: {
    checkName: 'Boulder Room Goron',
    defaultReward: 'smallKey',
    source: '',
    location: [75.75,53],
    reqs: { age: 'any', full: [], one: [], half: [] }
  },
  FT_GORON_6: {
    checkName: 'Fire Climb Room Goron',
    defaultReward: 'smallKey',
    source: '',
    location: [80.5,29],
    reqs: { age: 'any', full: ['bombs'], one: [], half: [] }
  },
  FT_GORON_7: {
    checkName: 'Upper Boulder Goron',
    defaultReward: 'smallKey',
    source: '',
    location: [71.5,53.8],
    reqs: { age: 'any', full: [], one: [], half: [] }
  },
  FT_BOSS_KEY: {
    checkName: 'Boss Key Chest',
    defaultReward: 'bossKey',
    source: '',
    location: [45.75,6.5],
    reqs: { age: 'adult',full: ['hammer'],one: [],half: [] }
  },
  FT_DANCER: {
    checkName: 'Flare Dancer',
    defaultReward: '',
    source: '',
    location: [45.5,3.67],
    reqs: {age: 'adult',full:['hammer'],one:[],half:[]}
  },
  FT_CAGED_BIG_CHEST: {
    checkName: 'Caged Big Chest',
    defaultReward: '',
    source: '',
    location: [64.75,47.5],
    reqs: {age: 'any',full:[],one:[],half:[]}
  },
  FT_FIRE_SWITCH_CHEST: {
    checkName: 'Fire Switch Chest',
    defaultReward: 'yellowRupee',
    source: 'chest',
    location: [73.5,87],
    reqs: {age: 'adult',full:['ocarina3','hookshot'],one:[],half:[]}
  },
  FT_FIRE_MAZE_BIG_CHEST: {
    checkName: 'Fire Maze Big Chest',
    defaultReward: 'compass',
    source: 'chest',
    location: [40,43.25],
    reqs: {age: 'any',full:[],one:[],half:[]}
  },
  FT_SPIRAL_STAIR: {
    checkName: 'Spiral Stair Race Chest',
    defaultReward: 'hammer',
    source: 'chest',
    location: [19,90.5],
    reqs: {age: 'any',full:[],one:[],half:[]}
  },
  FT_GORON_8: {
    checkName: 'Song of Time Hallway Goron',
    defaultReward: 'smallKey',
    source: '',
    location: [26.5,48.5],
    reqs: { age: 'any',full: ['hammer','songTime'], one: [], half: [] }
  },
  FT_VOLVAGIA: {
    checkName: 'Volvagia',
    defaultReward: 'heartContainer',
    source: '',
    location: [24,9.25],
    reqs: {
      age: 'any',
      full: ['hammer'],
      one: [],
      half: [],
    }
  },
}