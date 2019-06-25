export const RuneBalance = {
    name: "Rune Balance",
    attr: "rune-balance",
    prop: "runeBalance",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    sp: true,
    description: `
    Your training allows you to absorb <span>1</span> spirit every <span>0.1</span> sec
    and increases your intelligence by <span>70%</span> of your strength.
  `,
};
export const Blink = {
    name: "Blink",
    attr: "blink",
    prop: "blink",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: `
    Teleport to the nearest enemy within <span>6</span> m.
    If there are no enemies in range, teleport <span>3</span> m instead.
    This skill can cancel other skills.
    You are immune to knockback while casting this skill.
  `,
};
export const Flurry = {
    name: "Flurry",
    attr: "flurry",
    prop: "flurry",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Blade",
    levelRequirement: [8, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [46, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73],
    },
    description: `
    Attack with <span>3</span> slashes of your blade, each dealing <span>{damage}%</span> damage
    to <span>5</span> enemies up to <span>3</span> m in front of you.
    This skill attunes with your Flame, Frost, and Storm Sigil skills.
  `,
    extras: [{
            values: {
                damage: [45, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72],
                additionalDamage: [36, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
            },
            description: `
      Attack with <span>3</span> fiery slashes of your blade,
      each dealing <span>{damage}%</span> fire damage to <span>5</span> enemies up to <span>3</span> m in front of you.
      Targets burst into flame, taking an additional <span>{additionalDamage}%</span> fire damage.
      The first burst's damage is based on your magic attack.
    `,
        }, {
            values: {
                damage: [63, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99],
            },
            description: `
      Attack with <span>3</span> freezing slashes of your blade,
      each dealing <span>{damage}%</span> ice damage to <span>5</span> enemies up to <span>4.5</span> m in front of you.
    `,
        }, {
            values: {
                damage: [71, 71, 76, 81, 86, 91, 96, 101, 106, 111, 116],
            },
            description: `
      Attack with <span>3</span> electrified slashes of your blade,
      each dealing <span>{damage}%</span> electric damage to <span>5</span> enemies up to <span>3</span> m in front of you.
      Common monsters are momentarily stunned.
    `,
        }],
};
export const EchoingBlade = {
    name: "Echoing Blade",
    attr: "echoing-blade",
    prop: "echoingBlade",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Blade",
    spirit: 30,
    levelRequirement: [8, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [63, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99],
    },
    description: `
    Summon arcane echoes of your blade, dealing <span>{damage}%</span> damage
    <span>7</span> times to <span>8</span> enemies up to <span>3</span> m in front of you.
    The echoes fade when you perform another action.
    This skill attunes with your Flame, Frost, and Storm Sigil skills.
    Consumes <span>30</span> spirit.
  `,
    extras: [{
            values: {
                damage: [33, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51],
            },
            description: `
      Summon flame echoes of your blade, dealing <span>{damage}%</span> fire damage
      <span>14</span> times to <span>8</span> enemies up to <span>3</span> m in front of you.
      The echoes fade when you perform another action.
      Consumes <span>30</span> spirit.
    `,
        }, {
            values: {
                damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
            },
            description: `
      Summon frost echoes of your blade, dealing <span>{damage}%</span> ice damage
      <span>7</span> times to <span>8</span> enemies up to <span>4.5</span> m in front of you.
      Reduces enemy movement speed by 30% and jump power by 30%.
      The echoes fade when you perform another action.
      Consumes <span>30</span> spirit.
    `,
        }, {
            values: {
                damage: [44, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71],
                additionalDamage: [22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
            description: `
      Summon storm echoes of your blade, dealing <span>{damage}%</span> electric damage
      <span>7</span> times to <span>8</span> enemies up to <span>3</span> m in front of you.
      Targets are also struck by lightning, taking an additional <span>{additionalDamage}%</span> electric damage.
      The echoes fade when you perform another action.
      Consumes <span>30</span> spirit.
    `,
        }],
};
export const Impact = {
    name: "Impact",
    attr: "impact",
    prop: "impact",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Blade",
    spirit: 45,
    cooldown: 12,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    skillRequirements: [{
            skill: Flurry,
            level: 4,
        }, {
            skill: EchoingBlade,
            level: 3,
        }],
    values: {
        damage: [303, 303, 324, 345, 366, 387, 408, 429, 450, 471, 492],
    },
    description: `
    Drive your blade into the ground, creating a shock wave that deals <span>{damage}%</span>
    damage to <span>5</span> enemies within <span>2.25</span> m.
    This skill attunes with your Flame, Frost, and Storm Sigil skills.
    You are immune to knockback while casting this skill.
    Consumes <span>45</span> spirit.
  `,
    extras: [{
            values: {
                damage: [257, 257, 274, 291, 308, 325, 342, 359, 376, 393, 410],
                additionalDamage: [224, 224, 239, 254, 269, 284, 299, 314, 329, 344, 359],
            },
            description: `
      Drive your blade into the ground, creating a flaming shock wave that deals
      <span>{damage}%</span> fire damage to <span>5</span> enemies within <span>2.25</span> m.
      Spews forth a flaming pillar that deals <span>{additionalDamage}%</span> fire damage
      to <span>5</span> enemies within <span>2.25</span> m every sec for <span>5</span> sec.
      The pillar's damage is based on your magic attack.
      You are immune to knockback while casting this skill.
      Consumes <span>45</span> spirit.
    `,
        }, {
            values: {
                damage: [682, 682, 731, 780, 829, 878, 927, 976, 1025, 1074, 1123],
                additionalDamage: [255, 255, 272, 289, 306, 323, 340, 357, 374, 391, 408],
            },
            description: `
      Drive your blade into the ground, creating a freezing shock wave that deals
      <span>{damage}%</span> ice damage to <span>5</span> enemies within <span>2.25</span> m.
      Icy shards deal an additional <span>{additionalDamage}%</span> ice damage
      to <span>8</span> enemies within <span>1.5</span> m.
      The shards' damage is based on your magic attack.
      You are immune to knockback while casting this skill.
      Consumes <span>45</span> spirit.
    `,
        }, {
            values: {
                damage: [180, 180, 193, 206, 219, 232, 245, 258, 271, 284, 297],
                additionalDamage: [72, 72, 77, 82, 87, 92, 97, 102, 107, 112, 117],
                finalDamage: [396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396],
            },
            description: `
      Drive your blade into the ground, creating a stormy shock wave that deals
      <span>{damage}%</span> electric damage to <span>5</span> enemies within <span>2.25</span> m.
      Conjures a thunderstorm to deal <span>{additionalDamage}%</span> electric damage
      <span>4</span> times, once every <span>0.2</span> sec, to <span>5</span> enemies within <span>2.25</span> m.
      A final thunderbolt deals <span>{finalDamage}%</span> electric damage to <span>5</span> enemies within <span>2.25</span> m.
      The damage of the storm and bolt are based on your magic attack.
      Consumes <span>45</span> spirit.
    `,
        }],
};
export const RuneFocus = {
    name: "Rune Focus",
    attr: "rune-focus",
    prop: "runeFocus",
    rank: 1,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: Impact,
            level: 3,
        }],
    values: {
        damage: [1, 1, 1.6, 2.4, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
        defence: [1, 1, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6],
        movement: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        evasion: [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
    },
    description: `
    The teachings of the Jibricia Sect unlock the power of your rune magic.
    While Flame Sigil is active, your max health increases by <span>{defence}%</span>
    and fire damage increases by <span>{damage}%</span>.
    While Frost Sigil is active, your defense increases by <span>{defence}%</span>
    and ice damage increases by <span>{damage}%</span>.
    While Storm Sigil is active, your evasion increases by <span>{evasion}%</span>,
    movement speed increases by <span>{movement}%</span>,
    and your electric damage increases by <span>{damage}%</span>.
  `,
};
export const BladeChasm = {
    name: "Blade Chasm",
    attr: "blade-chasm",
    prop: "bladeChasm",
    rank: 1,
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Blade",
    spirit: 40,
    cooldown: 10,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: RuneFocus,
            level: 4,
        }],
    values: {
        damage: [53, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89],
        aoe: [106, 106, 114, 122, 130, 138, 146, 154, 162, 170, 178],
    },
    description: `
    Charge forward <span>7.5</span> m, splitting the ground with your blade to
    deal <span>{damage}%</span> damage to <span>5</span> enemies in your path.
    The split explodes, dealing <span>{aoe}%</span> damage to <span>8</span> enemies in range.
    This skill attunes with your Flame, Frost, and Storm Sigil skills.
    Consumes <span>40</span> spirit.
  `,
    extras: [{
            values: {
                damage: [53, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89],
                additionalDamage: [52, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88],
            },
            description: `
      Charge forward <span>7.5</span> m, splitting the ground with your blade to deal <span>{damage}%</span> fire damage to <span>5</span> enemies in your path.
      Leaves behind a trail of fire for <span>5</span> sec, dealing <span>{additionalDamage}%</span> fire damage to <span>8</span> enemies in range every <span>0.5</span> sec.
      The trail's damage is based on your magic attack.
      Consumes <span>40</span> spirit.
    `,
        }, {
            values: {
                damage: [53, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89],
                additionalDamage: [94, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148],
            },
            description: `
      Charge forward <span>7.5</span> m, splitting the ground with your blade to deal <span>{damage}%</span> ice damage to <span>5</span> enemies in your path.
      Shards of ice burst from the chasm, dealing <span>{additionalDamage}%</span> ice damage to <span>8</span> enemies within <span>1.5</span> m.
      The shards' damage is based on your magic attack.
      Consumes <span>40</span> spirit.
    `,
        }, {
            values: {
                damage: [83, 83, 89, 95, 101, 107, 113, 119, 125, 131, 137],
                additionalDamage: [573, 573, 614, 655, 696, 737, 778, 819, 860, 901, 942],
            },
            description: `
      Charge forward <span>7.5</span> m, splitting the ground with your blade to deal <span>{damage}%</span> electric damage to <span>5</span> enemies in your path.
      Thunderbolts trail behind <span>0.5</span> sec later, dealing <span>{additionalDamage}%</span> electric damage to <span>5</span> enemies in range.
      The thunderbolts' damage is based on your magic attack.
      Consumes <span>40</span> spirit.
    `,
        }],
};
export const WhirlingBlades = {
    name: "Whirling Blades",
    attr: "whirling-blades",
    prop: "whirlingBlades",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Blade",
    spirit: 40,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    skillRequirements: [{
            skill: Flurry,
            level: 2,
        }],
    values: {
        damage: [49, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85],
    },
    description: `
    Throw <span>3</span> arcane blades at the closest enemy up to <span>7.5</span> m
    in front of you, dealing <span>{damage}%</span> damage.
    This skill attunes with your Flame, Frost, and Storm sigil skills.
    Consumes <span>40</span> spirit.
  `,
    extras: [{
            values: {
                damage: [43, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70],
                additionalDamage: [73, 73, 79, 85, 91, 97, 103, 109, 115, 121, 127],
            },
            description: `
      Throw <span>3</span> flame blades at the closest enemy up to <span>7.5</span> m in front of you,
      dealing <span>{damage}%</span> fire damage to <span>5</span> enemies in their path.
      Targets are set ablaze, taking an additional <span>{additionalDamage}%</span> fire damage every sec for <span>12</span> sec.
      Consumes <span>60</span> spirit.
    `,
        }, {
            values: {
                damage: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
                additionalDamage: [109, 109, 117, 125, 133, 141, 149, 157, 165, 173, 181],
            },
            description: `
      Throw <span>3</span> frost blades at the closest enemy up to <span>7.5</span> m in front of you, each dealing <span>{damage}%</span> ice damage.
      The blades then explode, dealing an additional <span>{additionalDamage}%</span> ice damage to 8 enemies within <span>3</span> m
      and decreasing their movement speed and jump power by <span>15%</span> for <span>3</span> sec.
      Consumes <span>40</span> spirit.
    `,
        }, {
            values: {
                damage: [122, 122, 131, 140, 149, 158, 167, 176, 185, 194, 203],
            },
            description: `
      Throw <span>3</span> storm blades at the closest enemy up to <span>7.5</span> m in front of you, each dealing <span>{damage}%</span> electric damage.
      The blades bounce to another enemy within <span>3</span> m, dealing <span>{damage}%</span> electric damage.
      Each blade can bounce up to <span>4</span> times.
      Consumes <span>40</span> spirit.
    `,
        }],
};
export const IllusoryBlades = {
    name: "Illusory Blades",
    attr: "illusory-blades",
    prop: "illusoryBlades",
    rank: 1,
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    spirit: 15,
    cooldown: 18,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: Flurry,
            level: 4,
        }, {
            skill: WhirlingBlades,
            level: 3,
        }],
    values: {
        damage: [113, 113, 120, 127, 134, 141, 148, 155, 162, 169, 176],
    },
    description: `
    Conjure <span>5</span> arcane blades.
    Once per sec, <span>1</span> blade flies at the
    closest enemy within <span>7.5</span> m,
    dealing <span>{damage}%</span> damage.
    Consumes <span>15</span> spirit.
  `,
};
export const BladeMastery = {
    name: "Blade Mastery",
    attr: "blade-mastery",
    prop: "bladeMastery",
    rank: 1,
    row: 5,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: Flurry,
            level: 5,
        }, {
            skill: IllusoryBlades,
            level: 3,
        }],
    values: {
        damage: [1, 1, 1.6, 2.4, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
    },
    description: `
    The teachings of the Pelgia Sect have sharpened your swordsmanship.
    Increases weapon attack by <span>{damage}%</span> when you have a blade equipped.
  `,
};
export const FlameSigil = {
    name: "Flame Sigil",
    attr: "flame-sigil",
    prop: "flameSigil",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    weaponRequired: "Two-handed Blade",
    cooldown: 1,
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    description: `
    Apply a fire rune to your blade that lasts <span>240</span> sec,
    increasing fire damage by <span>{damage}%</span>.
    While active, certain skills become fire skills.
  `,
};
export const FrostSigil = {
    name: "Frost Sigil",
    attr: "frost-sigil",
    prop: "frostSigil",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Ice",
    weaponRequired: "Two-handed Blade",
    cooldown: 1,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    values: {
        damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    description: `
    Apply an ice rune to your blade that lasts <span>240</span> sec,
    increasing ice damage by <span>{damage}%</span>.
    While active, certain skills become ice skills.
  `,
};
export const StormSigil = {
    name: "Storm Sigil",
    attr: "storm-sigil",
    prop: "stormSigil",
    rank: 1,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Electric",
    weaponRequired: "Two-handed Blade",
    cooldown: 1,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    values: {
        damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    description: `
    Apply an electric rune to your blade that lasts <span>240</span> sec,
    increasing electric damage by <span>{damage}%</span>.
    While active, certain skills become electric skills.
  `,
};
export const HoningRunes = {
    name: "Honing Runes",
    attr: "honing-runes",
    prop: "honingRunes",
    rank: 1,
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 180,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    values: {
        criticalAllies: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        criticalSelf: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    description: `
    Place <span>9</span> runes of honing in a square around you. Allies who touch the runes
    gain <span>{criticalAllies}%</span> critical damage for <span>180</span> sec.
    Increaes your own critical damage by an additional <span>{criticalSelf}%</span>.
  `,
};
export const GravityRune = {
    name: "Gravity Rune",
    attr: "gravity-rune",
    prop: "gravityRune",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    cooldown: 10,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    values: {
        damage: [114, 114, 122, 130, 138, 146, 154, 162, 170, 178, 186],
    },
    description: `
    Summon a rune <span>3</span> m in front of you.
    The rune pulls enemies into it, dealing <span>{damage}%</span> damage
    to <span>8</span> enemies within <span>3.75</span> m.
  `,
};
export const WardingRune = {
    name: "Warding Rune",
    attr: "warding-rune",
    prop: "wardingRune",
    rank: 1,
    row: 4,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 30,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: GravityRune,
            level: 3,
        }],
    values: {
        resistance: [10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
    description: `
    Summon a shield that lasts <span>9</span> sec, increasing physical resistance
    and magic resistance by <span>{resistance}%</span>.
    This skill attunes with your Flame, Frost, and Storm sigil skills.
  `,
    extras: [{
            values: {
                resistance: [10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                fireReduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                damage: [36, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
            },
            description: `
      Summon a flame shield that lasts <span>9</span> sec, increasing physical resistance and magic resistance
      by <span>{resistance}</span> and reducing fire damage by <span>{fireReduction}%</span>.
      Every <span>0.5</span> sec deals <span>{damage}%</span> fire damage to <span>5</span> enemies within <span>3</span> m.
      The flame shield's damage is based on your magic attack.
    `,
        }, {
            values: {
                resistance: [10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                iceReduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                shield: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
            description: `
      Summon a frost shield that lasts <span>9</span> sec, increasing physical resistance and magic resistance
      by <span>{resistance}</span> and reducing ice damage by <span>{iceReduction}%</span>.
      The frost shield absorbs damage up to <span>{shield}%</span> of your max health.
      Cannot be combined with other barrier effects.
    `,
        }, {
            values: {
                resistance: [10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                electricReduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                damage: [102, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174],
            },
            description: `
      Summon a storm shield that lasts <span>9</span> sec, increasing physical resistance and magic resistance
      by <span>{resistance}</span> and reducing electric damage by <span>{electricReduction}%</span>.
      Every sec, a lightning bolt strikes the closest enemy within <span>6</span> m in front of you,
      dealing <span>{damage}%</span> electric damage to <span>3</span> enemies within <span>1.5</span> m.
      The bolt's damage is based on your magic attack.
    `,
        }],
};
export const ElementalPotency = {
    name: "Elemental Potency",
    attr: "elemental-potency",
    prop: "elementalPotency",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 60,
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: WardingRune,
            level: 4,
        }],
    values: {
        damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    description: `
    Amplify your rune power with this secret technique handed down by Master Ishura.
    Increases fire, ice, and electric damage to enemies
    by <span>{damage}%</span> for <span>10</span> sec.
  `,
};
export const PhysicalBoost = {
    name: "Physical Boost",
    attr: "physical-boost",
    prop: "physicalBoost",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    stamina: 120,
    cooldown: 6,
    description: `
    Charge your body with rune magic, increasing your physical capabilities.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases movement speed by <span>30%</span> and defence by <span>20%</span>.
    <br/><br/>
    Permanently increases strength by <span>40</span>.
  `,
};
export const QuintupleCut = {
    name: "Quintuple Cut",
    attr: "quintuple-cut",
    prop: "quintupleCut",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Blade",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [46, 46, 50, 54, 58],
    },
    description: `
    Unleash <span>5</span> wild, flashy attacks with your blade.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage per hit.
    <br/><br/>
    This skill attunes with your Flame, Frost and Storm Sigil skills.
  `,
};
export const BladeWhip = {
    name: "Blade Whip",
    attr: "blade-whip",
    prop: "bladeWhip",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Blade",
    spirit: 40,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: QuintupleCut,
            level: 3,
        }],
    values: {
        damage: [49, 49, 53, 57, 61],
    },
    description: `
    Turn your blade into a whip, striking <span>2</span> times.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage per hit.
    <br/><br/>
    This skill attunes with your Flame, Frost and Storm Sigil skills.
  `,
};
export const BladeExpert = {
    name: "Blade Expert",
    attr: "blade-expert",
    prop: "bladeExpert",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: BladeWhip,
            level: 2,
        }],
    values: {
        increase: [2, 2, 4, 6, 8],
    },
    description: `
    You've honed your swordplay through careful study of the Twin Arts.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases the damage of Quintuple Cut, Blade Whip, and Phantasm Slash by <span>{increase}%</span>.
  `,
};
export const PhantasmSlash = {
    name: "Phantasm Slash",
    attr: "phantasm-slash",
    prop: "phantasmSlash",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Blade",
    cooldown: 10,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: BladeWhip,
            level: 3,
        }, {
            skill: BladeExpert,
            level: 3,
        }],
    values: {
        damage: [890, 890, 993, 1096, 1199],
        additionalDamage: [445, 445, 496, 547, 598],
        spellSplitterDamage: [640, 640, 693, 746, 799],
    },
    description: `
    Create a circle of rune magic, then use your blade to lash the magic at enemies.
    Reactivate the skill after the initial strike to use Spell Splitter.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage,
    then make multiple blade strikes that deal <span>{additionalDamage}%</span> damage each.
    <br/><br/>
    Use the skill again after the initial strike to use Spell Splitter.
    <br/><br/>
    Grants knockback immunity.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Spell Splitter deals <span>{spellSplitterDamage}%</span> damage <span>10</span> times
    and refreshes the damage area every <span>0.1</span> sec.
  `,
};
export const RuneTrigger = {
    name: "Rune Trigger",
    attr: "rune-trigger",
    prop: "runeTrigger",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [110, 110, 119, 128, 137],
    },
    description: `
    Cast focused rune magic at an enemy in front of you.
    The magic explodes from within the target.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage to enemies within the explosion.
    <br/><br/>
    This skill attunes with your Flame, Frost, and Storm Sigil skills.
  `,
};
export const DimensionBlade = {
    name: "Dimension Blade",
    attr: "dimension-blade",
    prop: "dimensionBlade",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Blade",
    spirit: 20,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: RuneTrigger,
            level: 3,
        }],
    values: {
        damage: [58, 58, 86, 115, 143],
    },
    description: `
    Conjure a globe of chaotic blade magic.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage.
    <br/><br/>
    This skill attunes with your Flame, Frost, and Storm Sigil skills.
  `,
};
export const RuneExpert = {
    name: "Rune Expert",
    attr: "rune-expert",
    prop: "runeExpert",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: DimensionBlade,
            level: 3,
        }],
    values: {
        increase: [2, 2, 4, 6, 8],
    },
    description: `
    You've honed your runecraft through careful study of the Twin Arts.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases the damage of Rune Trigger, Dimension Blade and Rune Ignition by <span>{increase}%</span>.
  `,
};
export const RuneIgnition = {
    name: "Rune Ignition",
    attr: "rune-ignition",
    prop: "runeIgnition",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Blade",
    spirit: 45,
    cooldown: 12,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: RuneExpert,
            level: 3,
        }],
    values: {
        damage: [300, 300, 315, 330, 345],
    },
    description: `
    Plunge your blade into the ground to send forth <span>4</span> shockwaves.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage per shockwave.
    <br/><br/>
    Grants knockback immunity.
    <br/><br/>
    This skill attunes with your Flame, Frost, and Storm Sigil skills.
  `,
};
export const RankOneSkills = {
    BladeChasm: BladeChasm,
    BladeMastery: BladeMastery,
    Blink: Blink,
    ElementalPotency: ElementalPotency,
    EchoingBlade: EchoingBlade,
    FlameSigil: FlameSigil,
    Flurry: Flurry,
    FrostSigil: FrostSigil,
    GravityRune: GravityRune,
    HoningRunes: HoningRunes,
    IllusoryBlades: IllusoryBlades,
    Impact: Impact,
    RuneBalance: RuneBalance,
    RuneFocus: RuneFocus,
    StormSigil: StormSigil,
    WardingRune: WardingRune,
    WhirlingBlades: WhirlingBlades,
};
export const RankTwoSkills = {
    PhysicalBoost: PhysicalBoost,
    QuintupleCut: QuintupleCut,
    BladeWhip: BladeWhip,
    BladeExpert: BladeExpert,
    PhantasmSlash: PhantasmSlash,
    RuneTrigger: RuneTrigger,
    DimensionBlade: DimensionBlade,
    RuneExpert: RuneExpert,
    RuneIgnition: RuneIgnition,
};
export const RunebladeSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
