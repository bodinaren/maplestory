import { ISkill, IClassSkills } from "./_skillValues.interfaces";

export const ManaFont: ISkill = {
  name: "Mana Font",
  attr: "mana-font",
  prop: "manaFont",
  rank: 1,
  row: 1,
  column: 3,
  minLevel: 1,
  maxLevel: 1,
  passive: true,
  sp: true,
  description: `
    Your fine control over your magical powers allows you to
    recover <span>1</span> spirit every <span>0.3</span> sec at will.
  `,
};

export const Teleport: ISkill = {
  name: "Teleport",
  attr: "teleport",
  prop: "teleport",
  rank: 1,
  row: 1,
  column: 4,
  minLevel: 1,
  maxLevel: 1,
  description: `
    Warp yourself <span>4.5</span> m forward. This skill can cancel other skills.
    You will be immune to knockback while this skill is active.
    Consumes <span>40</span> stamina.
  `,
};

export const PhantomClaw: ISkill = {
  name: "Phantom Claw",
  attr: "phantom-claw",
  prop: "phantomClaw",
  rank: 1,
  row: 1,
  column: 1,
  minLevel: 1,
  maxLevel: 10,
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  values: {
    damage: [71, 71, 77, 83, 89, 95, 101, 107, 113, 119, 125],
  },
  description: `
    Slash the air with sharp magical claws, dealing <span>[damage]%</span> damage
    <span>2</span> times to <span>3</span> enemies up to <span>8</span> m in front of you.
  `,
};

export const ArcaneBlast: ISkill = {
  name: "Arcane Blast",
  attr: "arcane-blast",
  prop: "arcaneBlast",
  rank: 1,
  row: 2,
  column: 1,
  minLevel: 1,
  maxLevel: 10,
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  cooldown: 6,
  levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  values: {
    damage: [260, 260, 279, 298, 317, 336, 355, 374, 393, 412, 431],
  },
  description: `
    Focus a magical aura on a spot <span>4.5</span> m in front of you, creating an explosion of energy
    that deals <span>[damage]%</span> damage to enemies within <span>3</span> m and knocks them back <span>1</span> m.
  `,
};

export const FlameWave: ISkill = {
  name: "Flame Wave",
  attr: "flame-wave",
  prop: "flameWave",
  rank: 1,
  row: 3,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  element: "Fire",
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  spirit: 20,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  values: {
    damage: [175, 175, 188, 201, 214, 227, 240, 253, 266, 279, 292],
    dot: [21, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39],
  },
  description: `
    Gather fire energy in your staff to fling a flame wave up to <span>8</span> m in front of you,
    dealing <span>[damage]%</span> fire damage to enemies caught in it and setting them on fire,
    which deals an additional <span>[dot]%</span> every second for <span>10</span> sec.
    Consumes <span>20</span> spirit.
  `,
};

export const FlameTornado: ISkill = {
  name: "Flame Tornado",
  attr: "flame-tornado",
  prop: "flameTornado",
  rank: 1,
  row: 4,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  element: "Fire",
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  spirit: 40,
  cooldown: 16,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: FlameWave,
    level: 4,
  }],
  values: {
    damage: [142, 142, 152, 162, 172, 182, 192, 202, 212, 222, 232],
  },
  description: `
    Gather fire energy from your surroundings to create a huge flame whirlwind <span>4.5</span> m in front of you.
    The flame whirlwind lasts for <span>1.5</span> sec, dealing <span>[damage]%</span> fire damage
    to <span>8</span> enemies within <span>3</span> m every <span>0.3</span> sec.
    Consumes <span>40</span> spirit.
  `,
};

export const Pyromancy: ISkill = {
  name: "Pyromancy",
  attr: "pyromancy",
  prop: "pyromancy",
  rank: 1,
  row: 5,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  element: "Fire",
  passive: true,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: FlameWave,
    level: 5,
  }, {
    skill: FlameTornado,
    level: 5,
  }],
  values: {
    damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  description: `
    An advanced fire technique taught to only the top students of the Ellinel Magic Academy.
    Increases all fire damage by <span>[damage]%</span>.
  `,
};

export const ManaClaw: ISkill = {
  name: "Mana Claw",
  attr: "mana-claw",
  prop: "manaClaw",
  rank: 1,
  row: 6,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  spirit: 15,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: ArcaneBlast,
    level: 3,
  }],
  values: {
    firstDamage: [149, 149, 159, 169, 179, 189, 199, 209, 219, 229, 239],
    thirdDamage: [246, 246, 263, 280, 297, 314, 331, 348, 365, 382, 399],
  },
  description: `
    Shoot a sphere of condensed mana at the nearest enemy up to <span>9</span> m in front of you,
    dealing <span>[firstDamage]%</span> damage.
    Keep pressing the key to trigger a <span>3-hit</span> combo.
    The first and second strikes have the same effect,
    but the third strike <span>[thirdDamage]%</span> damage and is always critical.
    Consumes <span>15</span> spirit.
  `,
};

export const IceSpear: ISkill = {
  name: "Ice Spear",
  attr: "ice-spear",
  prop: "iceSpear",
  rank: 1,
  row: 3,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  element: "Ice",
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  spirit: 20,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [{
    skill: FlameWave,
    level: 4,
  }],
  values: {
    damage: [171, 171, 184, 197, 210, 223, 236, 249, 262, 275, 288],
  },
  description: `
    Gather ice from the moisture in the air to fling at the closest enemy up to <span>8</span> m in front of you.
    The spear of ice breaks on impact, its shards dealing <span>[damage]%</span> ice damage
    to <span>8</span> enemies within <span>2.5</span> m and decreasing movement speed by <span>10%</span> for <span>3</span> sec.
    This cold effect can stack up to <span>6</span> times.
    Enemies at max stacks are frozen for <span>1</span> sec.
    Consumes <span>20</span> spirit.
  `,
};

export const IceStorm: ISkill = {
  name: "Ice Storm",
  attr: "ice-storm",
  prop: "iceStorm",
  rank: 1,
  row: 4,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  element: "Ice",
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  spirit: 30,
  cooldown: 12,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: IceSpear,
    level: 4,
  }],
  values: {
    damage: [152, 152, 163, 174, 185, 196, 207, 218, 229, 240, 251],
  },
  description: `
    Blast <span>4</span> ice crystals toward enemies up to <span>8</span> m in front of you,
    surrounding the targets with a cold front that generates a giant shard of ice.
    The shard deals <span>[damage]%</span> ice damage to <span>8</span> enemies within <span>2.5</span> m.
    Consumes <span>30</span> spirit.
  `,
};

export const Cryomancy: ISkill = {
  name: "Cryomancy",
  attr: "cryomancy",
  prop: "cryomancy",
  rank: 1,
  row: 5,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  element: "Ice",
  passive: true,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: IceSpear,
    level: 5,
  }, {
    skill: IceStorm,
    level: 5,
  }],
  values: {
    damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  description: `
    An advanced ice technique taught to only the top students of the Ellinel Magic Academy.
    Increases all ice damage by <span>[damage]%</span>.
  `,
};

export const ChainLightning: ISkill = {
  name: "Chain Lightning",
  attr: "chain-lightning",
  prop: "chainLightning",
  rank: 1,
  row: 3,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  element: "Electric",
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  spirit: 15,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  values: {
    damage: [62, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98],
    additionalDamage: [288, 288, 308, 328, 348, 368, 388, 408, 428, 448, 468],
  },
  description: `
    Release an intense electric load that deals <span>[damage]%</span> electric damage
    to <span>8</span> enemies up to <span>8</span> m in front of you.
    Enemies hit with this skill <span>5</span> times pulse with electric energy,
    attracting a bolt that deals an additional <span>[additionalDamage]%</span> electric damage.
    Consumes <span>15</span> spirit.
  `,
};

export const Thunderbolt: ISkill = {
  name: "Thunderbolt",
  attr: "thunderbolt",
  prop: "thunderbolt",
  rank: 1,
  row: 4,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  element: "Electric",
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Staff",
  spirit: 40,
  cooldown: 16,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: ChainLightning,
    level: 4,
  }],
  values: {
    damage: [611, 611, 656, 701, 746, 791, 836, 881, 926, 971, 1016],
  },
  description: `
    Gather a bolt of electricity to throw at the closest enemy up to <span>8</span> m in front of you,
    dealing <span>[damage]%</span> electric damage.
    The bolt bounces up to <span>8</span> times within <span>5</span> m,
    but won't hit the same target twice in a row.
    Consumes <span>40</span> spirit.
  `,
};

export const Electromancy: ISkill = {
  name: "Electromancy",
  attr: "electromancy",
  prop: "electromancy",
  rank: 1,
  row: 6,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  element: "Electric",
  passive: true,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: ChainLightning,
    level: 5,
  }, {
    skill: Thunderbolt,
    level: 5,
  }],
  values: {
    damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  description: `
    An advanced electric technique taught to only the top students of the Ellinel Magic Academy.
    Increases all electric damage by <span>[damage]%</span>.
  `,
};

export const MagicArmor: ISkill = {
  name: "Magic Armor",
  attr: "magic-armor",
  prop: "magicArmor",
  rank: 1,
  row: 3,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  cooldown: 45,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  values: {
    barrier: [6, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
  },
  description: `
    Envelop your body with a magical aura, creating a barrier that absorbs damage
    up to <span>[barrier]%</span> of your max health for <span>10</span> sec.
    Cannot be combined with other barrier effects.
  `,
};

export const FocusSeal: ISkill = {
  name: "Focus Seal",
  attr: "focus-seal",
  prop: "focusSeal",
  rank: 1,
  row: 5,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  cooldown: 45,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: MagicArmor,
    level: 4,
  }],
  values: {
    increaseAllies: [1, 1, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6],
    increaseSelf: [0.5, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3],
  },
  description: `
    Imbue the earth with your magical power, creating a seal that reaches <span>5</span> tiles around you.
    The seal lasts for <span>20</span> sec and increases the physical attack and magic attack
    of allies who absorb it by <span>[increaseAllies]%</span> for <span>180</span> sec.
    Focus Seal also increases the caster's physical and magic attack by an additional <span>[increaseSelf]%</span>.
  `,
};

export const ElementalMaster: ISkill = {
  name: "Elemental Master",
  attr: "elemental-master",
  prop: "elementalMaster",
  rank: 1,
  row: 6,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  passive: true,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  values: {
    damage: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  description: `
    Asimov's high-level instruction teaches you how to harmoniously balance of fire, ice, and electric magic.
    Increases fire, ice, and electric damage by <span>[damage]%</span>.
  `,
};

export const RankOneSkills: IClassSkills = {
  ArcaneBlast: ArcaneBlast,
  ChainLightning: ChainLightning,
  Cryomancy: Cryomancy,
  Electromancy: Electromancy,
  ElementalMaster: ElementalMaster,
  FlameTornado: FlameTornado,
  FlameWave: FlameWave,
  FocusSeal: FocusSeal,
  IceSpear: IceSpear,
  IceStorm: IceStorm,
  MagicArmor: MagicArmor,
  ManaClaw: ManaClaw,
  ManaFont: ManaFont,
  PhantomClaw: PhantomClaw,
  Pyromancy: Pyromancy,
  Teleport: Teleport,
  Thunderbolt: Thunderbolt,
};

export const RankTwoSkills: IClassSkills = {

};

export const WizardSkills: IClassSkills = {
  ...RankOneSkills,
  ...RankTwoSkills,
};
