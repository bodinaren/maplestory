var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { e as registerInstance, f as createEvent, d as h } from './maplestory-skills-ce472e77.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-ead6e7d7.js';
import { a as getOptimizedAssetPath, b as ConstructibleStyle } from './chunk-4a5aa271.js';
var RuneBalance = {
    name: "Rune Balance",
    attr: "rune-balance",
    prop: "runeBalance",
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    sp: true,
    description: "\n    Your training allows you to absorb <span>1</span> spirit every <span>0.1</span> sec\n    and increases your intelligence by <span>70%</span> of your strength.\n  ",
};
var Blink = {
    name: "Blink",
    attr: "blink",
    prop: "blink",
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: "\n    Teleport to the nearest enemy within <span>6</span> m.\n    If there are no enemies in range, teleport <span>3</span> m instead.\n    This skill can cancel other skills.\n    You are immune to knockback while casting this skill.\n  ",
};
var Flurry = {
    name: "Flurry",
    attr: "flurry",
    prop: "flurry",
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
    description: "\n    Attack with <span>3</span> slashes of your blade, each dealing <span>[damage]%</span> damage\n    to <span>5</span> enemies up to <span>3</span> m in front of you.\n    This skill attunes with your Flame, Frost, and Storm Sigil skills.\n  ",
    extras: [{
            values: {
                damage: [45, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72],
                additionalDamage: [36, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
            },
            description: "\n      Attack with <span>3</span> fiery slashes of your blade,\n      each dealing <span>[damage]%</span> fire damage to <span>5</span> enemies up to <span>3</span> m in front of you.\n      Targets burst into flame, taking an additional <span>[additionalDamage]%</span> fire damage.\n      The first burst's damage is based on your magic attack.\n    ",
        }, {
            values: {
                damage: [63, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99],
            },
            description: "\n      Attack with <span>3</span> freezing slashes of your blade,\n      each dealing <span>[damage]%</span> ice damage to <span>5</span> enemies up to <span>4.5</span> m in front of you.\n    ",
        }, {
            values: {
                damage: [71, 71, 76, 81, 86, 91, 96, 101, 106, 111, 116],
            },
            description: "\n      Attack with <span>3</span> electrified slashes of your blade,\n      each dealing <span>[damage]%</span> electric damage to <span>5</span> enemies up to <span>3</span> m in front of you.\n      Common monsters are momentarily stunned.\n    ",
        }],
};
var EchoingBlade = {
    name: "Echoing Blade",
    attr: "echoing-blade",
    prop: "echoingBlade",
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
    description: "\n    Summon arcane echoes of your blade, dealing <span>[damage]%</span> damage\n    <span>7</span> times to <span>8</span> enemies up to <span>3</span> m in front of you.\n    The echoes fade when you perform another action.\n    This skill attunes with your Flame, Frost, and Storm Sigil skills.\n    Consumes <span>30</span> spirit.\n  ",
    extras: [{
            values: {
                damage: [33, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51],
            },
            description: "\n      Summon flame echoes of your blade, dealing <span>[damage]%</span> fire damage\n      <span>14</span> times to <span>8</span> enemies up to <span>3</span> m in front of you.\n      The echoes fade when you perform another action.\n      Consumes <span>30</span> spirit.\n    ",
        }, {
            values: {
                damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
            },
            description: "\n      Summon frost echoes of your blade, dealing <span>[damage]%</span> ice damage\n      <span>7</span> times to <span>8</span> enemies up to <span>4.5</span> m in front of you.\n      Reduces enemy movement speed by 30% and jump power by 30%.\n      The echoes fade when you perform another action.\n      Consumes <span>30</span> spirit.\n    ",
        }, {
            values: {
                damage: [44, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71],
                additionalDamage: [22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
            description: "\n      Summon storm echoes of your blade, dealing <span>[damage]%</span> electric damage\n      <span>7</span> times to <span>8</span> enemies up to <span>3</span> m in front of you.\n      Targets are also struck by lightning, taking an additional <span>[additionalDamage]%</span> electric damage.\n      The echoes fade when you perform another action.\n      Consumes <span>30</span> spirit.\n    ",
        }],
};
var Impact = {
    name: "Impact",
    attr: "impact",
    prop: "impact",
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
    description: "\n    Drive your blade into the ground, creating a shock wave that deals <span>[damage]%</span>\n    damage to <span>5</span> enemies within <span>2.25</span> m.\n    This skill attunes with your Flame, Frost, and Storm Sigil skills.\n    You are immune to knockback while casting this skill.\n    Consumes <span>45</span> spirit.\n  ",
    extras: [{
            values: {
                damage: [257, 257, 274, 291, 308, 325, 342, 359, 376, 393, 410],
                additionalDamage: [224, 224, 239, 254, 269, 284, 299, 314, 329, 344, 359],
            },
            description: "\n      Drive your blade into the ground, creating a flaming shock wave that deals\n      <span>[damage]%</span> fire damage to <span>5</span> enemies within <span>2.25</span> m.\n      Spews forth a flaming pillar that deals <span>[additionalDamage]%</span> fire damage\n      to <span>5</span> enemies within <span>2.25</span> m every sec for <span>5</span> sec.\n      The pillar's damage is based on your magic attack.\n      You are immune to knockback while casting this skill.\n      Consumes <span>45</span> spirit.\n    ",
        }, {
            values: {
                damage: [682, 682, 731, 780, 829, 878, 927, 976, 1025, 1074, 1123],
                additionalDamage: [255, 255, 272, 289, 306, 323, 340, 357, 374, 391, 408],
            },
            description: "\n      Drive your blade into the ground, creating a freezing shock wave that deals\n      <span>[damage]%</span> ice damage to <span>5</span> enemies within <span>2.25</span> m.\n      Icy shards deal an additional <span>[additionalDamage]%</span> ice damage\n      to <span>8</span> enemies within <span>1.5</span> m.\n      The shards' damage is based on your magic attack.\n      You are immune to knockback while casting this skill.\n      Consumes <span>45</span> spirit.\n    ",
        }, {
            values: {
                damage: [180, 180, 193, 206, 219, 232, 245, 258, 271, 284, 297],
                additionalDamage: [72, 72, 77, 82, 87, 92, 97, 102, 107, 112, 117],
                finalDamage: [396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396],
            },
            description: "\n      Drive your blade into the ground, creating a stormy shock wave that deals\n      <span>[damage]%</span> electric damage to <span>5</span> enemies within <span>2.25</span> m.\n      Conjures a thunderstorm to deal <span>[additionalDamage]%</span> electric damage\n      <span>4</span> times, once every <span>0.2</span> sec, to <span>5</span> enemies within <span>2.25</span> m.\n      A final thunderbolt deals <span>[finalDamage]%</span> electric damage to <span>5</span> enemies within <span>2.25</span> m.\n      The damage of the storm and bolt are based on your magic attack.\n      Consumes <span>45</span> spirit.\n    ",
        }],
};
var RuneFocus = {
    name: "Rune Focus",
    attr: "rune-focus",
    prop: "runeFocus",
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
    description: "\n    The teachings of the Jibricia Sect unlock the power of your rune magic.\n    While Flame Sigil is active, your max health increases by <span>[defence]%</span>\n    and fire damage increases by <span>[damage]%</span>.\n    While Frost Sigil is active, your defense increases by <span>[defence]%</span>\n    and ice damage increases by <span>[damage]%</span>.\n    While Storm Sigil is active, your evasion increases by <span>[evasion]%</span>,\n    movement speed increases by <span>[movement]%</span>,\n    and your electric damage increases by <span>[damage]%</span>.\n  ",
};
var BladeChasm = {
    name: "Blade Chasm",
    attr: "blade-chasm",
    prop: "bladeChasm",
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
    description: "\n    Charge forward <span>7.5</span> m, splitting the ground with your blade to\n    deal <span>[damage]%</span> damage to <span>5</span> enemies in your path.\n    The split explodes, dealing <span>[aoe]%</span> damage to <span>8</span> enemies in range.\n    This skill attunes with your Flame, Frost, and Storm Sigil skills.\n    Consumes <span>40</span> spirit.\n  ",
    extras: [{
            values: {
                damage: [53, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89],
                additionalDamage: [52, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88],
            },
            description: "\n      Charge forward <span>7.5</span> m, splitting the ground with your blade to deal <span>[damage]%</span> fire damage to <span>5</span> enemies in your path.\n      Leaves behind a trail of fire for <span>5</span> sec, dealing <span>[additionalDamage]%</span> fire damage to <span>8</span> enemies in range every <span>0.5</span> sec.\n      The trail's damage is based on your magic attack.\n      Consumes <span>40</span> spirit.\n    ",
        }, {
            values: {
                damage: [53, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89],
                additionalDamage: [94, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148],
            },
            description: "\n      Charge forward <span>7.5</span> m, splitting the ground with your blade to deal <span>[damage]%</span> ice damage to <span>5</span> enemies in your path.\n      Shards of ice burst from the chasm, dealing <span>[additionalDamage]%</span> ice damage to <span>8</span> enemies within <span>1.5</span> m.\n      The shards' damage is based on your magic attack.\n      Consumes <span>40</span> spirit.\n    ",
        }, {
            values: {
                damage: [83, 83, 89, 95, 101, 107, 113, 119, 125, 131, 137],
                additionalDamage: [573, 573, 614, 655, 696, 737, 778, 819, 860, 901, 942],
            },
            description: "\n      Charge forward <span>7.5</span> m, splitting the ground with your blade to deal <span>[damage]%</span> electric damage to <span>5</span> enemies in your path.\n      Thunderbolts trail behind <span>0.5</span> sec later, dealing <span>[additionalDamage]%</span> electric damage to <span>5</span> enemies in range.\n      The thunderbolts' damage is based on your magic attack.\n      Consumes <span>40</span> spirit.\n    ",
        }],
};
var WhirlingBlades = {
    name: "Whirling Blades",
    attr: "whirling-blades",
    prop: "whirlingBlades",
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
    description: "\n    Throw <span>3</span> arcane blades at the closest enemy up to <span>7.5</span> m\n    in front of you, dealing <span>[damage]%</span> damage.\n    This skill attunes with your Flame, Frost, and Storm sigil skills.\n    Consumes <span>40</span> spirit.\n  ",
    extras: [{
            values: {
                damage: [43, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70],
                additionalDamage: [73, 73, 79, 85, 91, 97, 103, 109, 115, 121, 127],
            },
            description: "\n      Throw <span>3</span> flame blades at the closest enemy up to <span>7.5</span> m in front of you,\n      dealing <span>[damage]%</span> fire damage to <span>5</span> enemies in their path.\n      Targets are set ablaze, taking an additional <span>[additionalDamage]%</span> fire damage every sec for <span>12</span> sec.\n      Consumes <span>60</span> spirit.\n    ",
        }, {
            values: {
                damage: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
                additionalDamage: [109, 109, 117, 125, 133, 141, 149, 157, 165, 173, 181],
            },
            description: "\n      Throw <span>3</span> frost blades at the closest enemy up to <span>7.5</span> m in front of you, each dealing <span>[damage]%</span> ice damage.\n      The blades then explode, dealing an additional <span>[additionalDamage]%</span> ice damage to 8 enemies within <span>3</span> m\n      and decreasing their movement speed and jump power by <span>15%</span> for <span>3</span> sec.\n      Consumes <span>40</span> spirit.\n    ",
        }, {
            values: {
                damage: [122, 122, 131, 140, 149, 158, 167, 176, 185, 194, 203],
            },
            description: "\n      Throw <span>3</span> storm blades at the closest enemy up to <span>7.5</span> m in front of you, each dealing <span>[damage]%</span> electric damage.\n      The blades bounce to another enemy within <span>3</span> m, dealing <span>[damage]%</span> electric damage.\n      Each blade can bounce up to <span>4</span> times.\n      Consumes <span>40</span> spirit.\n    ",
        }],
};
var IllusoryBlades = {
    name: "Illusory Blades",
    attr: "illusory-blades",
    prop: "illusoryBlades",
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
    description: "\n    Conjure <span>5</span> arcane blades.\n    Once per sec, <span>1</span> blade flies at the\n    closest enemy within <span>7.5</span> m,\n    dealing <span>[damage]%</span> damage.\n    Consumes <span>15</span> spirit.\n  ",
};
var BladeMastery = {
    name: "Blade Mastery",
    attr: "blade-mastery",
    prop: "bladeMastery",
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
    description: "\n    The teachings of the Pelgia Sect have sharpened your swordsmanship.\n    Increases weapon attack by <span>[damage]%</span> when you have a blade equipped.\n  ",
};
var FlameSigil = {
    name: "Flame Sigil",
    attr: "flame-sigil",
    prop: "flameSigil",
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
    description: "\n    Apply a fire rune to your blade that lasts <span>240</span> sec,\n    increasing fire damage by <span>[damage]%</span>.\n    While active, certain skills become fire skills.\n  ",
};
var FrostSigil = {
    name: "Frost Sigil",
    attr: "frost-sigil",
    prop: "frostSigil",
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
    description: "\n    Apply an ice rune to your blade that lasts <span>240</span> sec,\n    increasing ice damage by <span>[damage]%</span>.\n    While active, certain skills become ice skills.\n  ",
};
var StormSigil = {
    name: "Storm Sigil",
    attr: "storm-sigil",
    prop: "stormSigil",
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
    description: "\n    Apply an electric rune to your blade that lasts <span>240</span> sec,\n    increasing electric damage by <span>[damage]%</span>.\n    While active, certain skills become electric skills.\n  ",
};
var HoningRunes = {
    name: "Honing Runes",
    attr: "honing-runes",
    prop: "honingRunes",
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
    description: "\n    Place <span>9</span> runes of honing in a square around you. Allies who touch the runes\n    gain <span>[criticalAllies]%</span> critical damage for <span>180</span> sec.\n    Increaes your own critical damage by an additional <span>[criticalSelf]%</span>.\n  ",
};
var GravityRune = {
    name: "Gravity Rune",
    attr: "gravity-rune",
    prop: "gravityRune",
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
    description: "\n    Summon a rune <span>3</span> m in front of you.\n    The rune pulls enemies into it, dealing <span>[damage]%</span> damage\n    to <span>8</span> enemies within <span>3.75</span> m.\n  ",
};
var WardingRune = {
    name: "Warding Rune",
    attr: "warding-rune",
    prop: "wardingRune",
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
    description: "\n    Summon a shield that lasts <span>9</span> sec, increasing physical resistance\n    and magic resistance by <span>[resistance]%</span>.\n    This skill attunes with your Flame, Frost, and Storm sigil skills.\n  ",
    extras: [{
            values: {
                resistance: [10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                fireReduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                damage: [36, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
            },
            description: "\n      Summon a flame shield that lasts <span>9</span> sec, increasing physical resistance and magic resistance\n      by <span>[resistance]</span> and reducing fire damage by <span>[fireReduction]%</span>.\n      Every <span>0.5</span> sec deals <span>[damage]%</span> fire damage to <span>5</span> enemies within <span>3</span> m.\n      The flame shield's damage is based on your magic attack.\n    ",
        }, {
            values: {
                resistance: [10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                iceReduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                shield: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
            description: "\n      Summon a frost shield that lasts <span>9</span> sec, increasing physical resistance and magic resistance\n      by <span>[resistance]</span> and reducing ice damage by <span>[iceReduction]%</span>.\n      The frost shield absorbs damage up to <span>[shield]%</span> of your max health.\n      Cannot be combined with other barrier effects.\n    ",
        }, {
            values: {
                resistance: [10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                electricReduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                damage: [102, 102, 110, 118, 126, 134, 142, 150, 158, 166, 174],
            },
            description: "\n      Summon a storm shield that lasts <span>9</span> sec, increasing physical resistance and magic resistance\n      by <span>[resistance]</span> and reducing electric damage by <span>[electricReduction]%</span>.\n      Every sec, a lightning bolt strikes the closest enemy within <span>6</span> m in front of you,\n      dealing <span>[damage]%</span> electric damage to <span>3</span> enemies within <span>1.5</span> m.\n      The bolt's damage is based on your magic attack.\n    ",
        }],
};
var ElementalPotency = {
    name: "Elemental Potency",
    attr: "elemental-potency",
    prop: "elementalPotency",
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
    description: "\n    Amplify your rune power with this secret technique handed down by Master Ishura.\n    Increases fire, ice, and electric damage to enemies\n    by <span>[damage]%</span> for <span>10</span> sec.\n  ",
};
var RunebladeSkills = /*#__PURE__*/ Object.freeze({
    RuneBalance: RuneBalance,
    Blink: Blink,
    Flurry: Flurry,
    EchoingBlade: EchoingBlade,
    Impact: Impact,
    RuneFocus: RuneFocus,
    BladeChasm: BladeChasm,
    WhirlingBlades: WhirlingBlades,
    IllusoryBlades: IllusoryBlades,
    BladeMastery: BladeMastery,
    FlameSigil: FlameSigil,
    FrostSigil: FrostSigil,
    StormSigil: StormSigil,
    HoningRunes: HoningRunes,
    GravityRune: GravityRune,
    WardingRune: WardingRune,
    ElementalPotency: ElementalPotency
});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RunebladeComponent = /** @class */ (function () {
    function RunebladeComponent(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.extras = false;
        this.sigil = "";
        this.bladeChasm = BladeChasm.minLevel;
        this.bladeMastery = BladeMastery.minLevel;
        this.blink = Blink.minLevel;
        this.elementalPotency = ElementalPotency.minLevel;
        this.echoingBlade = EchoingBlade.minLevel;
        this.flameSigil = FlameSigil.minLevel;
        this.flurry = Flurry.minLevel;
        this.frostSigil = FrostSigil.minLevel;
        this.gravityRune = GravityRune.minLevel;
        this.honingRunes = HoningRunes.minLevel;
        this.illusoryBlades = IllusoryBlades.minLevel;
        this.impact = Impact.minLevel;
        this.runeBalance = RuneBalance.minLevel;
        this.runeFocus = RuneFocus.minLevel;
        this.stormSigil = StormSigil.minLevel;
        this.wardingRune = WardingRune.minLevel;
        this.whirlingBlades = WhirlingBlades.minLevel;
        this.styles = RunebladeComponent.getStyles.bind(this);
        this.runebladeSkills = {};
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    RunebladeComponent.prototype.componentWillLoad = function () {
        var _this = this;
        Object.keys(RunebladeSkills).map(function (prop) {
            // create copies of each skill so we can toggle the extras for skill attunes
            _this.runebladeSkills[prop] = Object.assign({}, RunebladeSkills[prop]);
        });
        processSkills(this, this.runebladeSkills);
        this.updateSigil();
    };
    RunebladeComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, RunebladeSkills)];
            });
        });
    };
    RunebladeComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, this.runebladeSkills, skill);
        if (skill.prop === this.sigil && level === 0) {
            this.changeSigil();
        }
        else { // else, to make sure we only emit one change event
            this.updateSigil();
            this.emitChangeEvent();
        }
    };
    RunebladeComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, this.runebladeSkills, this.sigil && { sigil: this.sigil } || undefined));
    };
    RunebladeComponent.prototype.render = function () {
        var _this = this;
        return ([
            h("ms-chart", { msClass: "runeblade" }, renderLevelControls(this, this.runebladeSkills, this.editable, this.extras, {
                onSkillclicked: function (evt) { return _this.changeSigil(evt.detail); },
            }))
        ]);
    };
    RunebladeComponent.prototype.changeSigil = function (skill) {
        if (!this.extras)
            return;
        var sigil = "";
        if (skill) {
            switch (skill.prop) {
                case FlameSigil.prop:
                    sigil = "flameSigil";
                    break;
                case FrostSigil.prop:
                    sigil = "frostSigil";
                    break;
                case StormSigil.prop:
                    sigil = "stormSigil";
                    break;
                default: return; // don't do any changes if it wasn't a sigil that was clicked.
            }
        }
        if (!skill || this[skill.prop] > 0) {
            if (sigil === this.sigil)
                this.sigil = "";
            else
                this.sigil = sigil;
            this.updateSigil();
            this.emitChangeEvent();
        }
    };
    RunebladeComponent.prototype.updateSigil = function () {
        var _this = this;
        if (this.extras) {
            var sigilIdx_1 = this.sigil === "flameSigil" ? 0
                : this.sigil === "frostSigil" ? 1
                    : this.sigil === "stormSigil" ? 2
                        : -1;
            Object.keys(this.runebladeSkills).forEach(function (prop) {
                var originalSkill = RunebladeSkills[prop];
                if (originalSkill.extras) {
                    if (_this.sigil) {
                        _this.runebladeSkills[prop] = Object.assign({}, originalSkill, originalSkill.extras[sigilIdx_1], { extras: [{
                                    description: "This skill is attuned to " +
                                        (_this.sigil === "flameSigil" ? FlameSigil.name
                                            : _this.sigil === "frostSigil" ? FrostSigil.name
                                                : _this.sigil === "stormSigil" ? StormSigil.name
                                                    : "")
                                        + "."
                                }] });
                    }
                    else {
                        _this.runebladeSkills[prop] = Object.assign({}, originalSkill, { extras: [{
                                    description: "Click on a sigil to show how this skill attunes."
                                }] });
                    }
                }
                else if (["flameSigil", "frostSigil", "stormSigil"].indexOf(originalSkill.prop) > -1) {
                    var description = void 0;
                    if (_this.sigil === originalSkill.prop) {
                        description = "Click on the icon again to deactivate this sigil.";
                    }
                    else if (_this[originalSkill.prop] > 0) {
                        description = "Click on the icon to activate this sigil. All relevant skills will show information based on this sigil being active.";
                    }
                    else {
                        description = "After putting points in this skill, click on the icon to activate the sigil. All relevant skills will show information based on this sigil being active.";
                    }
                    _this.runebladeSkills[prop] = Object.assign({}, originalSkill, { extras: [{
                                description: description,
                            }] });
                }
            });
        }
    };
    RunebladeComponent.getStyles = function () {
        return "\n      ms-runeblade[extras] ms-skill:before { background: url(" + getOptimizedAssetPath("assets/skill-shield-selected.png") + ") }\n      :host([extras]) ms-skill:before { background: url(" + getOptimizedAssetPath("assets/skill-shield-selected.png") + ") }\n    ";
    };
    Object.defineProperty(RunebladeComponent, "watchers", {
        get: function () {
            return {
                "extras": ["emitChangeEvent"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RunebladeComponent, "style", {
        get: function () { return ":host{display:block}:host([extras]) ms-skill:before{position:absolute;top:2px;left:-1px;width:72px;height:84px;pointer-events:none}:host([extras][sigil=flameSigil]) ms-skill.flameSigil:not([level=\"0\"]):before,:host([extras][sigil=frostSigil]) ms-skill.frostSigil:not([level=\"0\"]):before,:host([extras][sigil=stormSigil]) ms-skill.stormSigil:not([level=\"0\"]):before,ms-skill.flameSigil:not([level=\"0\"]):hover:before,ms-skill.frostSigil:not([level=\"0\"]):hover:before,ms-skill.stormSigil:not([level=\"0\"]):hover:before{content:\"\"}"; },
        enumerable: true,
        configurable: true
    });
    return RunebladeComponent;
}());
__decorate([
    ConstructibleStyle({ cacheKeyProperty: "extras" })
], RunebladeComponent.prototype, "styles", void 0);
export { RunebladeComponent as ms_runeblade };
