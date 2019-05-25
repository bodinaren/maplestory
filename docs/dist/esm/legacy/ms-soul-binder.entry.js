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
import { e as registerInstance, f as createEvent, d as h, g as getElement } from './maplestory-skills-fe8c7252.js';
import { a as Rank } from './chunk-7c277b0f.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-bb329b0b.js';
var MantraArray = {
    name: "Mantra Array",
    attr: "mantra-array",
    prop: "mantraArray",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    sp: true,
    description: "\n    Focus the mysterious animus energy within you to create Mantra Cores (orb energy) and\n    restore <span>12</span> spirit. You can create up to <span>4</span> Mantra Cores,\n    which can be activated consecutively as long as you continue to hold the key.\n    While you are creating Mantra Cores, you can control a greater amount of energy\n    and enhance some skills prior to activation.\n  ",
};
var Illusion = {
    name: "Illusion",
    attr: "illusion",
    prop: "illusion",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: "\n    Consume <span>40</span> stamina to release a mysterious aura from your body\n    and rush <span>4.5</span> m, leaving and afterimage in your wake.\n    Gain <span>50</span> evasion while moving.\n    The skill can be both canceled and triggered immediately while using other skills.\n    You are immune to knockback while this skill is active.\n  ",
};
var SoaringOrb = {
    name: "Soaring Orb",
    attr: "soaring-orb",
    prop: "soaringOrb",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [38, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65],
        aoe: [170, 170, 182, 194, 206, 218, 230, 242, 254, 266, 278],
    },
    description: "\n    Gather energy from your surroundings to form and launch an orb at the nearest enemy\n    up to <span>7.5</span> m in front of you, dealing <span>{damage}%</span> damage.\n    Keep pressing the key to trigger a 3-hit combo.\n    The third strike launches an energy orb that explodes upon collision,\n    dealing <span>{aoe}%</span> damage to <span>5</span> enemies within a <span>2.25</span> m radius.\n  ",
};
var RadiantSalvo = {
    name: "Radiant Salvo",
    attr: "radiant-salvo",
    prop: "radiantSalvo",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 3,
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
    },
    description: "\n    Concentrate life energy in the palms of your hands, then launch a salvo of orbs at the nearest enemy\n    within <span>7.5</span> m, dealing <span>{damage}%</span> damage <span>4</span> times.\n    Each orb that collides with an enemy ricochets <span>4</span> times\n    onto other enemies within a <span>3</span> m radius, dealing <span>{damage}%</span> damage.\n    Energy orbs do not damage the same target twice.\n    Consumes <span>3</span> spirit.\n  ",
};
var ExpansionBlast = {
    name: "Expansion Blast",
    attr: "expansion-blast",
    prop: "expansionBlast",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 4,
    cooldown: 8,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    skillRequirements: [{
            skill: SoaringOrb,
            level: 2,
        }, {
            skill: RadiantSalvo,
            level: 2,
        }],
    values: {
        damage: [625, 625, 669, 713, 757, 801, 845, 889, 933, 977, 1021],
    },
    description: "\n    Condense the energy of Narubashan into a powerful,\n    one-meter-wide electric energy orb and shoot it <span>7.5</span> m forward,\n    dealing <span>{damage}%</span> damage to up to <span>8</span> enemies in its path.\n    The orb also shocks targets, dealing an additional <span>20%</span> electric damage every sec for <span>3</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>4</span> spirit.\n  ",
};
var FlashStrike = {
    name: "Flash Strike",
    attr: "flash-strike",
    prop: "flashStrike",
    rank: 1,
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 6,
    cooldown: 15,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: ExpansionBlast,
            level: 5,
        }],
    values: {
        damage: [688, 688, 736, 784, 832, 880, 928, 976, 1024, 1072, 1120],
    },
    description: "\n    Gather light energy in your hands and fire a beam with energy force to push you back <span>1.5</span> m.\n    The light beam deals <span>{damage}%</span> damage to up\n    to <span>8</span> enemies up to <span>10.5</span> m in front of you.\n    Consumes <span>6</span> spirit.\n  ",
};
var ShootingStar = {
    name: "Shooting Star",
    attr: "shooting-star",
    prop: "shootingStar",
    rank: 1,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 4,
    cooldown: 8,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: RadiantSalvo,
            level: 6,
        }, {
            skill: FlashStrike,
            level: 4,
        }],
    values: {
        damage: [242, 242, 259, 276, 293, 310, 327, 344, 361, 378, 395],
    },
    description: "\n    Channel the strength of the animus to form <span>3</span> orbs infused with the\n    celestral energy and launch them at enemies up to <span>8</span>\u00A0m in front of you.\n    The orbs will explode upon collision, spreading celestral energy over the area and dealing\n    <span>{damage}%</span> damage to up to <span>5</span> enemies within a <span>2.25</span>\u00A0m radius.\n    Skill effects are enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>4</span> spirit.\n  ",
};
var ConcussionOrb = {
    name: "Concussion Orb",
    attr: "concussion-orb",
    prop: "concussionOrb",
    rank: 1,
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: SoaringOrb,
            level: 8,
        }],
    values: {
        damage: [179, 179, 191, 203, 215, 227, 239, 251, 263, 275, 287],
    },
    description: "\n    Gather energy from your surroundings to form and launch an orb\n    at the nearest enemy up to <span>7.5</span> m in front of you.\n    The energy orb explodes upon collision, dealing <span>{damage}%</span> damage\n    to <span>5</span> enemies within a <span>2.25</span> m radius.\n    Keep pressing the trigger for a 2-hit combo.\n  ",
};
var RagingTempest = {
    name: "Raging Tempest",
    attr: "raging-tempest",
    prop: "ragingTempest",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    cooldown: 15,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    skillRequirements: [{
            skill: SoaringOrb,
            level: 4,
        }],
    values: {
        dot: [23, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41],
        additionalDamage: [68, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104],
        reduction: [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4],
    },
    description: "\n    Shift the flow of the atmosphere to create a whirlwind <span>6</span> m in front of you.\n    The whirlwind rages every <span>0.2</span> sec for a total of <span>4</span> times,\n    dealing <span>{dot}%</span> damage to up to <span>8</span> enemies\n    in a <span>3</span> m radius and gathering them at its center.\n    After <span>1</span> sec, the dence energy in the eye of the whirlwind explodes,\n    dealing <span>{additionalDamage}%</span> damage to up to <span>8</span> enemies within a <span>3</span> m radius\n    and decreasing their accuracy and evasion by <span>{reduction}</span>.\n  ",
};
var EnergySurge = {
    name: "Energy Surge",
    attr: "energy-surge",
    prop: "energySurge",
    rank: 1,
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 5,
    cooldown: 16,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: RagingTempest,
            level: 3
        }],
    values: {
        damage: [308, 308, 330, 352, 374, 396, 418, 440, 462, 484, 506],
        stun: [0.3, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2],
    },
    description: "\n    Stir up earth energy, driving it toward the nearest enemy up to\n    <span>8</span> m in front of you and forcing the ground upward,\n    dealing <span>{damage}%</span> damage to up to <span>8</span> enemies within a <span>2.25</span> m radius.\n    The massive quake will stun targets for <span>{stun}</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>5</span> spirit.\n  ",
};
var StaticFlash = {
    name: "Static Flash",
    attr: "static-flash",
    prop: "staticFlash",
    rank: 1,
    row: 5,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    spirit: 15,
    cooldown: 10,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: RagingTempest,
            level: 6,
        }, {
            skill: EnergySurge,
            level: 2,
        }],
    values: {
        damage: [44, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71],
        reduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    description: "\n    Reverse the flow of nature's pure energy within a <span>7.5</span> m radius,\n    exhausting the vitality of up to <span>8</span> enemies within range,\n    dealing <span>{damage}%</span> damage,\n    and reducing both defense and movement speed by <span>{reduction}%</span> for <span>10</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>15</span> spirit.\n  ",
};
var LightBarrier = {
    name: "Light Barrier",
    attr: "light-barrier",
    prop: "lightBarrier",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    spirit: 12,
    cooldown: 30,
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        damage: [10, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37],
    },
    description: "\n    Harness your animus energy to forge a shield that lasts for <span>4</span> sec\n    and absorbs damage equivalent to <span>{damage}%</span> of your max health.\n    This shield does not stack with other protective shield effects.\n    Consumes all Mantra Cores.\n    Skill effects are enhanced in proportion to number of Mantra Cores consumed.\n    Consumes <span>12</span> spirit.\n  ",
};
var HealingBond = {
    name: "Healing Bond",
    attr: "healing-bond",
    prop: "healingBond",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    spirit: 12,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    skillRequirements: [{
            skill: LightBarrier,
            level: 4,
        }],
    values: {
        health: [85, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130],
    },
    description: "\n    Restore your health and the health of <span>4</span> allies within a <span>3</span>\u00A0m radius\n    by <span>{health}%</span> of your magic attack by harnessing nature's pure energy.\n    Consumes all Mantra Cores.\n    Skill effects are enhanced in proportion to number of Mantra Cores consumed.\n    Consumes <span>12</span> spirit.\n  ",
};
var FountOfRenewal = {
    name: "Fount of Renewal",
    attr: "fount-of-renewal",
    prop: "fountOfRenewal",
    rank: 1,
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    cooldown: 30,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: HealingBond,
            level: 4,
        }],
    values: {
        health: [300, 300, 321, 342, 363, 384, 405, 426, 447, 468, 489],
        resistance: [200, 200, 213, 226, 239, 252, 265, 278, 291, 304, 317],
        healingBond: [4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    },
    description: "\n    Gather a field of concentrated life force <span>6</span>\u00A0m ahead of you\n    with a radius of <span>2.25</span>\u00A0m, lasting <span>3</span> sec.\n    This field restores the health of up to <span>8</span> allies within range by <span>{health}%</span>\n    of your magic attack and increases physical and magic resistance by <span>{resistance}</span>.\n    Increases the potency of Healing Bond by <span>{healingBond}%</span>.\n    While you are within the Fount of Renewal, you are immune to knockback from standard attacks.\n  ",
};
var OrbMastery = {
    name: "Orb Mastery",
    attr: "orb-mastery",
    prop: "orbMastery",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    values: {
        attack: [1, 1, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4],
    },
    description: "\n    Harmonize more effectively with your Mantra Orbs thanks to your valuable lessons from Guidance.\n    Increase the strength of your weapon attack by <span>{attack}%</span> when you have an orb equipped.\n  ",
};
var NarubashanUnleashed = {
    name: "Narubashan Unleashed",
    attr: "narubashan-unleashed",
    prop: "narubashanUnleashed",
    rank: 1,
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 60,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: OrbMastery,
            level: 4,
        }],
    values: {
        interval: [4, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0.5, 0.5],
        totalTime: [20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 22],
    },
    description: "\n    Unleash the incredible power of Narubashan as explosive energy courses through your veins.\n    This energy automatically forms into Mantra Cores every <span>{interval}</span> sec for <span>{totalTime}</span> sec.\n    No more than <span>4</span> Mantra Cores can be created.\n  ",
};
var AnimusFocus = {
    name: "Animus Focus",
    attr: "animus-focus",
    prop: "animusFocus",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: OrbMastery,
            level: 6,
        }, {
            skill: NarubashanUnleashed,
            level: 3,
        }],
    values: {
        damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        recovery: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    Focus the strength of animus within yourself and amplify the Mantra Core's energy.\n    Increases the damage of Expansion Blast, Energy Surge, and Shooting Star\n    (which activate when the maximum quantity of Mantra Cores has been achieved) by\n    <span>{damage}%</span> and increases the recovery of Healing Bond by <span>{recovery}%</span>.\n  ",
};
var AwakenedMantra = {
    name: "Awakened Mantra",
    attr: "awakened-mantra",
    prop: "awakenedMantra",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    cooldown: 12,
    description: "\n    Harness your animus to create a purer form of Mantra Core.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases intelligence by <span>40</span>.\n    <br/>\n    Create up to <span>2</span>.\n    <br/>\n    Grants <mark>Awakened Mantra Core</mark>, and restores <span>50</span> spirit.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Awakened Mantra Cores empower Expansion Blast, Spirit Crush, Soul Shield and Soul Harmony.\n  ",
};
var SpiritBound = {
    name: "Spirit Bound",
    attr: "spirit-bound",
    prop: "spiritBound",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [189, 189, 189, 189, 189],
        thirdDamage: [414, 414, 414, 414, 414],
    },
    description: "\n    Launch a spirit orb at enemies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    <br/>\n    Deals <span>{thirdDamage}%</span> damage on every third cast.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    The orb bounces from enemy to enemy up to <span>3</span> times.\n    <br/>\n    Skill changes if there is only <span>1</span> enemy in range.\n  ",
};
var SpiritCrush = {
    name: "Spirit Crush",
    attr: "spirit-crush",
    prop: "spiritCrush",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 20,
    cooldown: 5,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: SpiritBound,
            level: 3,
        }],
    values: {
        damage: [1239, 1239, 1239, 1239, 1239],
    },
    description: "\n    Project spectral blades through enemeis in front of you.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Consumes <span>1</span> Awakened Mantra to become Spirit Gouge.\n    <br/>\n    Use Vision Torrent to turn this skill into Vision Crush.\n  ",
};
var VisionTorrent = {
    name: "Vision Torrent",
    attr: "vision-torrent",
    prop: "visionTorrent",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    cooldown: 60,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: SpiritCrush,
            level: 2,
        }],
    values: {
        damage: [8, 8, 8, 8, 8],
    },
    description: "\n    Manifest your bond with Vision in the physical world.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases magic attack by <span>{damage}%</span> for <span>20</span> sec.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Spirit Crush becomes Vision Crush.\n    <br/>\n    Flash Strike becomes Vision Strike.\n  ",
};
var AwakenedMind = {
    name: "Awakened Mind",
    attr: "awakened-mind",
    prop: "awakenedMind",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: SpiritCrush,
            level: 3,
        }, {
            skill: VisionTorrent,
            level: 3,
        }],
    values: {
        increase: [12, 12, 12, 12, 12],
    },
    description: "\n    Vision strengthens your mental fortitude, enhancing certain skills.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases the damage of Spirit Bound, Spirit Crush, and Vision Strike by <span>{increase}%</span>.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Increases movement speed by <span>20%</span> after using Vision Strike.\n  ",
};
var SoulFlock = {
    name: "Soul Flock",
    attr: "soul-flock",
    prop: "soulFlock",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [205, 205, 205, 205, 205],
        defense: [1.2, 1.2, 1.2, 1.2, 1.2],
        movement: [1.2, 1.2, 1.2, 1.2, 1.2],
    },
    description: "\n    Summon a flock of soul birds to attack.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>3</span> times and inflicts Lethargy.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Lethargy decreases defense by <span>{defense}%</span> and\n    movement speed by <span>{movement}%</span> for <span>20</span> sec,\n    stacking up to <span>5</span> times.\n    <br/>\n    Lethargy does not stack with Static Flash.\n  ",
};
var SoulShield = {
    name: "Soul Shield",
    attr: "soul-shield",
    prop: "soulShield",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 50,
    cooldown: 30,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: SoulFlock,
            level: 3,
        }],
    values: {
        damage: [80, 80, 80, 80, 80],
        absorbs: [20, 20, 20, 20, 20],
    },
    description: "\n    Summons an animus cube that damages enemies and shields allies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage to enemies.\n    <br/><br/>\n    Allies receive a shield that absorbs damage equal to <span>{absorbs}%</span> of their max health\n    and lasts for <span>30</span> sec.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Consumes <span>1</span> Awakened Mantra Core to becomes Awakened Soul Shield.\n    <br/>\n    Shields do not trigger in arenas.\n  ",
};
var SoulHarmony = {
    name: "Soul Harmony",
    attr: "soul-harmony",
    prop: "soulHarmony",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    passive: true,
    spirit: 10,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: SoulShield,
            level: 3,
        }],
    values: {
        health: [145, 145, 145, 145, 145],
    },
    description: "\n    Draw animus from your soul to heal nearby allies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    heals <span>4</span> nearby allies by <span>{health}%</span> of magic attack per tick.\n    Hold down the skill key to channel.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Consumes <span>1</span> Awakened Mantra Core to become Soul Dissonance.\n  ",
};
var TriuneLink = {
    name: "Triune Link",
    attr: "triune-link",
    prop: "triuneLink",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: SoulHarmony,
            level: 3,
        }],
    values: {
        increase: [3, 3, 3, 3, 3],
        soulHarmony: [5, 5, 5, 5, 5],
    },
    description: "\n    Strengthens the bond between the Soul Binder, Vision, and Narubashan.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases the damage of Soul Flock, Soul Shield, and Soul Dissonance by <span>{increase}%</span>.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Increases the healing of Soul Harmony by <span>{soulHarmony}%</span>.\n    <br/>\n    Soul Clash reduces an additional <span>10</span> critical evasion and <span>1</span> evasion.\n  ",
};
var RankOneSkills = {
    AnimusFocus: AnimusFocus,
    ConcussionOrb: ConcussionOrb,
    SoaringOrb: SoaringOrb,
    RagingTempest: RagingTempest,
    StaticFlash: StaticFlash,
    EnergySurge: EnergySurge,
    ExpansionBlast: ExpansionBlast,
    FlashStrike: FlashStrike,
    Illusion: Illusion,
    HealingBond: HealingBond,
    MantraArray: MantraArray,
    NarubashanUnleashed: NarubashanUnleashed,
    OrbMastery: OrbMastery,
    RadiantSalvo: RadiantSalvo,
    ShootingStar: ShootingStar,
    LightBarrier: LightBarrier,
    FountOfRenewal: FountOfRenewal,
};
var RankTwoSkills = {
    AwakenedMantra: AwakenedMantra,
    SpiritBound: SpiritBound,
    SpiritCrush: SpiritCrush,
    VisionTorrent: VisionTorrent,
    AwakenedMind: AwakenedMind,
    SoulFlock: SoulFlock,
    SoulShield: SoulShield,
    SoulHarmony: SoulHarmony,
    TriuneLink: TriuneLink,
};
var SoulBinderSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
var SoulBinderComponent = /** @class */ (function () {
    function SoulBinderComponent(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.animusFocus = SoulBinderSkills.AnimusFocus.minLevel;
        this.concussionOrb = SoulBinderSkills.ConcussionOrb.minLevel;
        this.soaringOrb = SoulBinderSkills.SoaringOrb.minLevel;
        this.ragingTempest = SoulBinderSkills.RagingTempest.minLevel;
        this.staticFlash = SoulBinderSkills.StaticFlash.minLevel;
        this.energySurge = SoulBinderSkills.EnergySurge.minLevel;
        this.expansionBlast = SoulBinderSkills.ExpansionBlast.minLevel;
        this.flashStrike = SoulBinderSkills.FlashStrike.minLevel;
        this.illusion = SoulBinderSkills.Illusion.minLevel;
        this.healingBond = SoulBinderSkills.HealingBond.minLevel;
        this.mantraArray = SoulBinderSkills.MantraArray.minLevel;
        this.narubashanUnleashed = SoulBinderSkills.NarubashanUnleashed.minLevel;
        this.orbMastery = SoulBinderSkills.OrbMastery.minLevel;
        this.radiantSalvo = SoulBinderSkills.RadiantSalvo.minLevel;
        this.shootingStar = SoulBinderSkills.ShootingStar.minLevel;
        this.lightBarrier = SoulBinderSkills.LightBarrier.minLevel;
        this.fountOfRenewal = SoulBinderSkills.FountOfRenewal.minLevel;
        this.awakenedMantra = SoulBinderSkills.AwakenedMantra.minLevel;
        this.spiritBound = SoulBinderSkills.SpiritBound.minLevel;
        this.spiritCrush = SoulBinderSkills.SpiritCrush.minLevel;
        this.visionTorrent = SoulBinderSkills.VisionTorrent.minLevel;
        this.awakenedMind = SoulBinderSkills.AwakenedMind.minLevel;
        this.soulFlock = SoulBinderSkills.SoulFlock.minLevel;
        this.soulShield = SoulBinderSkills.SoulShield.minLevel;
        this.soulHarmony = SoulBinderSkills.SoulHarmony.minLevel;
        this.triuneLink = SoulBinderSkills.TriuneLink.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    SoulBinderComponent.prototype.componentWillLoad = function () {
        processSkills(this, SoulBinderSkills);
    };
    SoulBinderComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, SoulBinderSkills)];
            });
        });
    };
    SoulBinderComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, SoulBinderSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    };
    SoulBinderComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, SoulBinderSkills));
    };
    SoulBinderComponent.prototype.render = function () {
        var _this = this;
        return (h("ms-chart", { msClass: "soul-binder", rank: this.rank, onRankChange: function (_a) {
                var detail = _a.detail;
                return _this.rank = detail;
            } }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    };
    Object.defineProperty(SoulBinderComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoulBinderComponent, "watchers", {
        get: function () {
            return {
                "extras": ["emitChangeEvent"],
                "rank": ["emitChangeEvent"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoulBinderComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return SoulBinderComponent;
}());
export { SoulBinderComponent as ms_soul_binder };
