'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./maplestory-skills-10f6f6cf.js');
const __chunk_2 = require('./chunk-555a25f0.js');
const __chunk_3 = require('./chunk-6418e17c.js');

const IronDefense = {
    name: "Iron Defense",
    attr: "iron-defense",
    prop: "ironDefense",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    weaponRequired: "Off-hand Shield",
    cooldown: 5,
    sp: true,
    description: `
    Adopt a knightly defensive stance, restoring <span>4</span> spirit every <span>0.3</span> sec
    and decreasing damage taken by <span>10%</span>, but also reducing physical and magic attack by <span>25%</span>.
    Press the skill key again to toggle the stance.
  `,
};
const ShieldCharge = {
    name: "Shield Charge",
    attr: "shield-charge",
    prop: "shieldCharge",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    attackType: "Physical",
    weaponRequired: "Off-hand Shield",
    description: `
    Charge forward <span>4.5</span> m, dealing <span>70%</span> damage to <span>5</span> enemies
    and knocking them back <span>3</span> m. While charging, you cannot be knocked back.
    This skill can cancel other skills.
    Consumes <span>40</span> stamina.
  `,
};
const CrossCut = {
    name: "Cross Cut",
    attr: "cross-cut",
    prop: "crossCut",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [79, 79, 85, 91, 97, 103, 109, 115, 121, 127, 133],
    },
    description: `
    A swing of your sword deals <span>{damage}%</span> damage <span>2</span> times
    to <span>5</span> enemies up to <span>3</span> m in front of you.
  `,
};
const TornadoSlash = {
    name: "Tornado Slash",
    attr: "tornado-slash",
    prop: "tornadoSlash",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    spirit: 12,
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [81, 81, 86, 91, 96, 101, 106, 111, 116, 121, 126],
    },
    description: `
    Perform a spin slash, dealing <span>{damage}%</span> damage <span>3</span> times
    to <span>8</span> enemies within <span>3</span> m and pulling them in <span>1</span> m.
    Consumes <span>12</span> spirit.
  `,
};
const DivineStrike = {
    name: "Divine Strike",
    attr: "divine-strike",
    prop: "divineStrike",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    cooldown: 8,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    skillRequirements: [{
            skill: TornadoSlash,
            level: 2,
        }, {
            skill: CrossCut,
            level: 2,
        }],
    values: {
        damage: [501, 501, 536, 571, 606, 641, 676, 711, 746, 781, 816],
    },
    description: `
    Gathers light and smashes it down, creating a shockwave that deals <span>{damage}%</span>
    holy damage to <span>8</span> enemies and knocks them back <span>2</span> m.
    Enemy attacks will not push you back while this skill is active.
  `,
};
const StingingFlurry = {
    name: "Stinging Flurry",
    attr: "stinging-flurry",
    prop: "stingingFlurry",
    rank: 1,
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    spirit: 13,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: CrossCut,
            level: 5,
        }, {
            skill: DivineStrike,
            level: 5,
        }],
    values: {
        damage: [83, 83, 89, 95, 101, 107, 113, 119, 125, 131, 137],
    },
    description: `
    Captain Allon's special skill stabs quickly,
    dealing <span>{damage}%</span> damage <span>3</span> times
    to <span>3</span> enemies up to <span>3</span> m in front of you.
    The skill lasts while the skill key is held down.
    Consumes <span>13</span> spirit.
  `,
};
const DrillThrust = {
    name: "Drill Thrust",
    attr: "drill-thrust",
    prop: "drillThrust",
    rank: 1,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    cooldown: 8,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: DivineStrike,
            level: 6,
        }],
    values: {
        damage: [412, 412, 441, 470, 499, 528, 557, 586, 615, 644, 673],
    },
    description: `
  Strike forth with your weapon, moving you <span>4.5</span> m and creating a whirlwind.
  You pierce enemies in your path,
  dealing <span>{damage}%</span> damage on up to <span>8</span> enemies.
  `,
};
const LongswordMastery = {
    name: "Longsword Mastery",
    attr: "longsword-mastery",
    prop: "longswordMastery",
    rank: 1,
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: CrossCut,
            level: 6,
        }, {
            skill: DrillThrust,
            level: 2,
        }],
    values: {
        attack: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
    },
    description: `
    Captain Allon's secret training improves your swordsmanship, increasing your weapon attack
    by <span>{attack}%</span> when you have a longsword equipped.
  `,
};
const TyphoonSlash = {
    name: "Typhoon Slash",
    attr: "typhoon-slash",
    prop: "typhoonSlash",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    spirit: 50,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    skillRequirements: [{
            skill: TornadoSlash,
            level: 3,
        }],
    values: {
        damage: [147, 147, 158, 169, 180, 191, 202, 213, 224, 235, 246],
    },
    description: `
    Spin with your weapon out, dealing <span>{damage}%</span> damage <span>5</span> times
    to <span>8</span> enemies within <span>3</span> m. Each hit pulls them in <span>1</span> m.
    During the attack, press a direction key to move <span>4.5</span> m.
    Consumes <span>50</span> spirit.
  `,
};
const IronShield = {
    name: "Iron Shield",
    attr: "iron-shield",
    prop: "ironShield",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    weaponRequired: "Off-hand Shield",
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        reduction: [25, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
    },
    description: `
    Adopt a defensive stance with your shield, reducing incoming damage by <span>{reduction}%</span>.
    The skill lasts while the skill key is held down, although powerful attacks may break the skill early.
    This skill can cancel other skills.
    In PvP zones, the damage reduction is halved.
  `,
};
const ShieldToss = {
    name: "Shield Toss",
    attr: "shield-toss",
    prop: "shieldToss",
    rank: 1,
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "Off-hand Shield",
    spirit: 12,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: IronShield,
            level: 4,
        }, {
            skill: TyphoonSlash,
            level: 4,
        }],
    values: {
        damage: [60, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
        reduction: [1.0, 1.0, 1.2, 2.2, 2.2, 3.2, 4.0, 4.2, 5.2, 5.8, 6.4],
    },
    description: `
    Toss your shield <span>7.5</span> m forward like a boomerang,
    dealing <span>{damage}%</span> damage <span>2</span> times
    to <span>8</span> enemies and reducing their defense
    by <span>{reduction}%</span> for <span>12</span> sec.
    Consumes <span>16</span> spirit.
  `,
};
const ShieldMastery = {
    name: "Shield Mastery",
    attr: "shield-mastery",
    prop: "shieldMastery",
    rank: 1,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: IronShield,
            level: 4,
        }],
    values: {
        evasion: [9, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
        perfectGuard: [5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        increaseChance: [40, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
        damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: `
    Your fervent desire to protect others increases your shield mastery,
    increasing critical evasion by <span>{evasion}</span> and perfect guard chance
    by <span>{perfectGuard}%</span> when you have a shield equipped when using Iron Shield.
    Blocking an attack grants a <span>{increaseChance}%</span> chance to increase your damage
    by <span>{damage}%</span> for <span>10</span> sec.
  `,
};
const ShieldBooster = {
    name: "Shield Booster",
    attr: "shield-booster",
    prop: "shieldBooster",
    rank: 1,
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Off-hand Shield",
    cooldown: 16,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: ShieldMastery,
            level: 2,
        }],
    values: {
        damage: [190, 190, 204, 218, 232, 246, 260, 274, 288, 302, 316],
        increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: `
    Lift <span>5</span> enemies up to <span>2</span> m in front of you with your shield,
    dealing <span>{damage}%</span> damage.
    Increases physical and magic resistance by <span>450</span>.
    For <span>10</span> sec, has a chance to trigger counter when hit.
    Also increases your counterattack damage
    by an additional <span>{increase}%</span>.
  `,
};
const ShieldWall = {
    name: "Shield Wall",
    attr: "shield-wall",
    prop: "shieldWall",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    weaponRequired: "Off-hand Shield",
    cooldown: 45,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    values: {
        resistance: [90, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
    },
    description: `
    Create a <span>3</span> m holy field around you for <span>10</span> sec,
    increasing the physical resistance and magic resistance of <span>10</span> allies,
    including yourself, by <span>{resistance}</span>.
  `,
};
const Warhorn = {
    name: "Warhorn",
    attr: "warhorn",
    prop: "warhorn",
    rank: 1,
    row: 4,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    spirit: 40,
    cooldown: 30,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    skillRequirements: [{
            skill: ShieldWall,
            level: 3,
        }],
    values: {
        allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: `
    Shout to raise morale, increasing the physical attack and magic attack of <span>{allies}%</span>
    within <span>3</span> m, plus yourself, by <span>{increase}%</span> for <span>10</span> sec.
    Consumes <span>40</span> spirit.
  `,
};
const Bulwark = {
    name: "Bulwark",
    attr: "bulwark",
    prop: "bulwark",
    rank: 1,
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    weaponRequired: "Off-hand Shield",
    cooldown: [130, 130, 120, 110, 100, 90, 80, 70, 60, 55, 50],
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: ShieldWall,
            level: 4,
        }, {
            skill: Warhorn,
            level: 3,
        }],
    values: {
        allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    description: `
    Create a protective barrier for <span>3</span> sec to make <span>{allies}</span> allies,
    including yourself, invulnerable to enemy attacks.
    Some attacks cannot be blocked.
  `,
};
const DefenderOfTheFaith = {
    name: "Defender of the Faith",
    attr: "defender-of-the-faith",
    prop: "defenderOfTheFaith",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    weaponRequired: "Off-hand Shield",
    cooldown: [130, 130, 120, 110, 100, 90, 80, 70, 60, 55, 50],
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: ShieldWall,
            level: 4,
        }, {
            skill: Warhorn,
            level: 3,
        }],
    values: {
        allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    description: `
    Dash to the nearest ally within <span>8</span> m to create a protective barrier that lasts
    <span>3</span> sec and makes <span>{allies}</span> allies, including yourself, invulnerable to enemy attacks.
    Some attacks cannot be blocked.
  `,
};
const DualTactics = {
    name: "Dual Tactics",
    attr: "dual-tactics",
    prop: "dualTactics",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    description: `
    Change up your tactics based on your current health.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    When max health is at least <span>80%</span>, activates Offensive Tactics.
    <br/><br/>
    When max health is <span>30%</span> or less, activates Defensive Tactics.
    <br/><br/>
    Permanently increases strength by <span>40</span>.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Offensive Tactics increases all damage by 10%.<br/>
    Defensive Tactics increases physical and magic defence by <span>150</span>.
  `,
};
const ConvictionStrike = {
    name: "Conviction Strike",
    attr: "conviction-strike",
    prop: "convictionStrike",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    weaponRequired: "Main Hand Longsword",
    spirit: 20,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [989, 989, 989, 989, 989],
    },
    description: `
    Focus your strength into a precise word thrust.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage. Grants knockback immunity.
  `,
};
const DivineRetribution = {
    name: "Divine Retribution",
    attr: "divine-retribution",
    prop: "divineRetribution",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    spirit: 40,
    cooldown: 30,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: ConvictionStrike,
            level: 3,
        }],
    values: {
        attack: [15, 15, 15, 15, 15],
        defense: [30, 30, 30, 30, 30],
    },
    description: `
    Channel divine fury through your sword, gaining offensive power at the expense of defense.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases physical and magic attack by <span>{attack}%</span>, but decreases defense by <span>{defense}%</span>.
    Disables all shield skills except for Shield Charge.
  `,
};
const SwordDiscipline = {
    name: "Sword Discipline",
    attr: "sword-discipline",
    prop: "swordDiscipline",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: DivineRetribution,
            level: 2,
        }],
    values: {
        increase: [9, 9, 9, 9, 9],
    },
    description: `
    You have devoted yourself to the mastery of the sword.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases Conviction Strike and Light Bringer damage by <span>{increase}%</span>.
  `,
};
const LightBringer = {
    name: "Light Bringer",
    attr: "light-bringer",
    prop: "lightBringer",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    attackType: "Physical",
    weaponRequired: "Main Hand Longsword",
    cooldown: 30,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: DivineRetribution,
            level: 3,
        }, {
            skill: SwordDiscipline,
            level: 3,
        }],
    values: {
        damage: [1912, 1912, 1912, 1912, 1912],
    },
    description: `
    Summon holy swords to damage enemies in a large area before you.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage per hit. Grants knockback immunity.
  `,
};
const GuardiansWings = {
    name: "Guardian's Wings",
    attr: "guardians-wings",
    prop: "guardiansWings",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    weaponRequired: "Off-hand Shield",
    spirit: 8,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [227, 227, 227, 227, 227],
        reduction: [30, 30, 30, 30, 30],
        perfectGuard: [9, 9, 9, 9, 9],
        additionalDamage: [505, 505, 505, 505, 505],
        pierces: [8, 8, 8, 8, 8],
    },
    description: `
    Spread wings of light to create a curtain of divine energy.
    Hold down the skill key to project a Guardian Shield in front of you.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage.
    Reduces incoming damage by <span>{reduction}%</span>.
    Increases perfect guard by <span>{perfectGuard}%</span>.
    Able to move while this is active.
    Grants knockback immunity.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Guardian Shield deals <span>{additionalDamage}%</span> damage and pierces targets <span>{pierces}</span> times.
  `,
};
const CycloneShield = {
    name: "Cyclone Shield",
    attr: "cyclone-shield",
    prop: "cycloneShield",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Physical",
    weaponRequired: "Off-hand Shield",
    spirit: 20,
    cooldown: 8,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: GuardiansWings,
            level: 3,
        }],
    values: {
        damage: [274, 274, 274, 274, 274],
        interval: [0.2, 0.2, 0.2, 0.2, 0.2],
        reduction: [6, 6, 6, 6, 6],
    },
    description: `
    Toss your shield like a boomerang to create a whirlwind.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage every <span>{interval}</span> sec.
    Decreases enemy defence by <span>{reduction}%</span>.
    This does not stack with Shield Toss.
  `,
};
const ShieldTraining = {
    name: "Shield Training",
    attr: "shield-training",
    prop: "shieldTraining",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: CycloneShield,
            level: 3,
        }],
    values: {
        damage: [3, 3, 3, 3, 3],
    },
    description: `
    You have dedicated yourself to the mastery of the shield.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases Cyclone Shield and Heaven's Judgement damage by <span>{damage}%</span>.
  `,
};
const HeavensJudgement = {
    name: "Heaven's Judgement",
    attr: "heavens-judgement",
    prop: "heavensJudgement",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    weaponRequired: "Off-hand Shield",
    spirit: 40,
    cooldown: 8,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: ShieldTraining,
            level: 3,
        }],
    values: {
        damage: [1125, 1125, 1125, 1125, 1125],
    },
    description: `
    Gather divine energy in your shield, then release it to smite your enemies.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage.
    Grants knockback immunity.
  `,
};
const RankOneSkills = {
    Bulwark: Bulwark,
    CrossCut: CrossCut,
    DefenderOfTheFaith: DefenderOfTheFaith,
    DivineStrike: DivineStrike,
    DrillThrust: DrillThrust,
    IronDefense: IronDefense,
    IronShield: IronShield,
    LongswordMastery: LongswordMastery,
    ShieldBooster: ShieldBooster,
    ShieldCharge: ShieldCharge,
    ShieldMastery: ShieldMastery,
    ShieldToss: ShieldToss,
    ShieldWall: ShieldWall,
    StingingFlurry: StingingFlurry,
    TornadoSlash: TornadoSlash,
    TyphoonSlash: TyphoonSlash,
    Warhorn: Warhorn,
};
const RankTwoSkills = {
    DualTactics: DualTactics,
    ConvictionStrike: ConvictionStrike,
    DivineRetribution: DivineRetribution,
    SwordDiscipline: SwordDiscipline,
    LightBringer: LightBringer,
    GuardiansWings: GuardiansWings,
    CycloneShield: CycloneShield,
    ShieldTraining: ShieldTraining,
    HeavensJudgement: HeavensJudgement,
};
const KnightSkills = Object.assign({}, RankOneSkills, RankTwoSkills);

class KnightComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.editable = false;
        this.rank = __chunk_2.Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
        this.bulwark = KnightSkills.Bulwark.minLevel;
        this.crossCut = KnightSkills.CrossCut.minLevel;
        this.defenderOfTheFaith = KnightSkills.DefenderOfTheFaith.minLevel;
        this.divineStrike = KnightSkills.DivineStrike.minLevel;
        this.drillThrust = KnightSkills.DrillThrust.minLevel;
        this.ironDefense = KnightSkills.IronDefense.minLevel;
        this.ironShield = KnightSkills.IronShield.minLevel;
        this.longswordMastery = KnightSkills.LongswordMastery.minLevel;
        this.shieldBooster = KnightSkills.ShieldBooster.minLevel;
        this.shieldCharge = KnightSkills.ShieldCharge.minLevel;
        this.shieldMastery = KnightSkills.ShieldMastery.minLevel;
        this.shieldToss = KnightSkills.ShieldToss.minLevel;
        this.shieldWall = KnightSkills.ShieldWall.minLevel;
        this.stingingFlurry = KnightSkills.StingingFlurry.minLevel;
        this.tornadoSlash = KnightSkills.TornadoSlash.minLevel;
        this.typhoonSlash = KnightSkills.TyphoonSlash.minLevel;
        this.warhorn = KnightSkills.Warhorn.minLevel;
        this.dualTactics = KnightSkills.DualTactics.minLevel;
        this.convictionStrike = KnightSkills.ConvictionStrike.minLevel;
        this.divineRetribution = KnightSkills.DivineRetribution.minLevel;
        this.swordDiscipline = KnightSkills.SwordDiscipline.minLevel;
        this.lightBringer = KnightSkills.LightBringer.minLevel;
        this.guardiansWings = KnightSkills.GuardiansWings.minLevel;
        this.cycloneShield = KnightSkills.CycloneShield.minLevel;
        this.shieldTraining = KnightSkills.ShieldTraining.minLevel;
        this.heavensJudgement = KnightSkills.HeavensJudgement.minLevel;
        this.onSkillChanged = __chunk_1.createEvent(this, "skillchanged", 7);
    }
    componentWillLoad() {
        __chunk_3.processSkills(this, KnightSkills, this.ignoreMax);
    }
    async getData() {
        return __chunk_3.toSkillChangeEventObject(this, KnightSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        __chunk_3.processSkills(this, KnightSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    ignoreMaxChanged() {
        __chunk_3.processSkills(this, KnightSkills, this.ignoreMax);
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(__chunk_3.toSkillChangeEventObject(this, KnightSkills));
    }
    render() {
        return (__chunk_1.h("ms-chart", { msClass: "knight", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail }, __chunk_3.renderLevelControls(this, RankOneSkills, this.editable, this.extras, __chunk_2.Rank.Basic), __chunk_3.renderLevelControls(this, RankTwoSkills, this.editable, this.extras, __chunk_2.Rank.Awakening)));
    }
    get host() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "ignoreMax": ["ignoreMaxChanged"],
        "extras": ["emitChangeEvent"],
        "rank": ["emitChangeEvent"]
    }; }
    static get style() { return ":host{display:block}"; }
}

exports.ms_knight = KnightComponent;
