var __awaiter=this&&this.__awaiter||function(e,n,a,i){return new(a||(a=Promise))(function(s,r){function t(e){try{o(i.next(e))}catch(e){r(e)}}function l(e){try{o(i["throw"](e))}catch(e){r(e)}}function o(e){e.done?s(e.value):new a(function(n){n(e.value)}).then(t,l)}o((i=i.apply(e,n||[])).next())})};var __generator=this&&this.__generator||function(e,n){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,t;return t={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(t[Symbol.iterator]=function(){return this}),t;function l(e){return function(n){return o([e,n])}}function o(t){if(i)throw new TypeError("Generator is already executing.");while(a)try{if(i=1,s&&(r=t[0]&2?s["return"]:t[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,t[1])).done)return r;if(s=0,r)t=[t[0]&2,r.value];switch(t[0]){case 0:case 1:r=t;break;case 4:a.label++;return{value:t[1],done:false};case 5:a.label++;s=t[1];t=[0];continue;case 7:t=a.ops.pop();a.trys.pop();continue;default:if(!(r=a.trys,r=r.length>0&&r[r.length-1])&&(t[0]===6||t[0]===2)){a=0;continue}if(t[0]===3&&(!r||t[1]>r[0]&&t[1]<r[3])){a.label=t[1];break}if(t[0]===6&&a.label<r[1]){a.label=r[1];r=t;break}if(r&&a.label<r[2]){a.label=r[2];a.ops.push(t);break}if(r[2])a.ops.pop();a.trys.pop();continue}t=n.call(e,a)}catch(e){t=[6,e];s=0}finally{i=r=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:true}}};System.register(["./p-a868d0a0.system.js","./p-832ce77e.system.js","./p-e17c4c91.system.js"],function(e,n){"use strict";var a,i,s,r,t,l,o,p;return{setters:[function(e){a=e.e;i=e.f;s=e.d;r=e.g},function(e){t=e.a},function(e){l=e.a;o=e.b;p=e.c}],execute:function(){var n={name:"Iron Defense",attr:"iron-defense",prop:"ironDefense",rank:1,row:1,column:3,minLevel:1,maxLevel:1,weaponRequired:"Off-hand Shield",cooldown:5,sp:true,description:"\n    Adopt a knightly defensive stance, restoring <span>4</span> spirit every <span>0.3</span> sec\n    and decreasing damage taken by <span>10%</span>, but also reducing physical and magic attack by <span>25%</span>.\n    Press the skill key again to toggle the stance.\n  "};var d={name:"Shield Charge",attr:"shield-charge",prop:"shieldCharge",rank:1,row:1,column:4,minLevel:1,maxLevel:1,attackType:"Physical",weaponRequired:"Off-hand Shield",description:"\n    Charge forward <span>4.5</span> m, dealing <span>70%</span> damage to <span>5</span> enemies\n    and knocking them back <span>3</span> m. While charging, you cannot be knocked back.\n    This skill can cancel other skills.\n    Consumes <span>40</span> stamina.\n  "};var c={name:"Cross Cut",attr:"cross-cut",prop:"crossCut",rank:1,row:1,column:1,minLevel:1,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[79,79,85,91,97,103,109,115,121,127,133]},description:"\n    A swing of your sword deals <span>{damage}%</span> damage <span>2</span> times\n    to <span>5</span> enemies up to <span>3</span> m in front of you.\n  "};var h={name:"Tornado Slash",attr:"tornado-slash",prop:"tornadoSlash",rank:1,row:2,column:1,minLevel:1,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",spirit:12,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[81,81,86,91,96,101,106,111,116,121,126]},description:"\n    Perform a spin slash, dealing <span>{damage}%</span> damage <span>3</span> times\n    to <span>8</span> enemies within <span>3</span> m and pulling them in <span>1</span> m.\n    Consumes <span>12</span> spirit.\n  "};var m={name:"Divine Strike",attr:"divine-strike",prop:"divineStrike",rank:1,row:3,column:1,minLevel:0,maxLevel:10,element:"Holy",attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",cooldown:8,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:h,level:2},{skill:c,level:2}],values:{damage:[501,501,536,571,606,641,676,711,746,781,816]},description:"\n    Gathers light and smashes it down, creating a shockwave that deals <span>{damage}%</span>\n    holy damage to <span>8</span> enemies and knocks them back <span>2</span> m.\n    Enemy attacks will not push you back while this skill is active.\n  "};var u={name:"Stinging Flurry",attr:"stinging-flurry",prop:"stingingFlurry",rank:1,row:4,column:1,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",spirit:13,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:c,level:5},{skill:m,level:5}],values:{damage:[83,83,89,95,101,107,113,119,125,131,137]},description:"\n    Captain Allon's special skill stabs quickly,\n    dealing <span>{damage}%</span> damage <span>3</span> times\n    to <span>3</span> enemies up to <span>3</span> m in front of you.\n    The skill lasts while the skill key is held down.\n    Consumes <span>13</span> spirit.\n  "};var v={name:"Drill Thrust",attr:"drill-thrust",prop:"drillThrust",rank:1,row:5,column:1,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",cooldown:8,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:m,level:6}],values:{damage:[412,412,441,470,499,528,557,586,615,644,673]},description:"\n  Strike forth with your weapon, moving you <span>4.5</span> m and creating a whirlwind.\n  You pierce enemies in your path,\n  dealing <span>{damage}%</span> damage on up to <span>8</span> enemies.\n  "};var g={name:"Longsword Mastery",attr:"longsword-mastery",prop:"longswordMastery",rank:1,row:6,column:1,minLevel:0,maxLevel:10,passive:true,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:c,level:6},{skill:v,level:2}],values:{attack:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4]},description:"\n    Captain Allon's secret training improves your swordsmanship, increasing your weapon attack\n    by <span>{attack}%</span> when you have a longsword equipped.\n  "};var y={name:"Typhoon Slash",attr:"typhoon-slash",prop:"typhoonSlash",rank:1,row:3,column:2,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",spirit:50,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],skillRequirements:[{skill:h,level:3}],values:{damage:[147,147,158,169,180,191,202,213,224,235,246]},description:"\n    Spin with your weapon out, dealing <span>{damage}%</span> damage <span>5</span> times\n    to <span>8</span> enemies within <span>3</span> m. Each hit pulls them in <span>1</span> m.\n    During the attack, press a direction key to move <span>4.5</span> m.\n    Consumes <span>50</span> spirit.\n  "};var k={name:"Iron Shield",attr:"iron-shield",prop:"ironShield",rank:1,row:3,column:3,minLevel:0,maxLevel:10,weaponRequired:"Off-hand Shield",levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{reduction:[25,25,30,35,40,45,50,55,60,65,70]},description:"\n    Adopt a defensive stance with your shield, reducing incoming damage by <span>{reduction}%</span>.\n    The skill lasts while the skill key is held down, although powerful attacks may break the skill early.\n    This skill can cancel other skills.\n    In PvP zones, the damage reduction is halved.\n  "};var f={name:"Shield Toss",attr:"shield-toss",prop:"shieldToss",rank:1,row:4,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Off-hand Shield",spirit:12,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:k,level:4},{skill:y,level:4}],values:{damage:[60,60,64,68,72,76,80,84,88,92,96],reduction:[1,1,1.2,2.2,2.2,3.2,4,4.2,5.2,5.8,6.4]},description:"\n    Toss your shield <span>7.5</span> m forward like a boomerang,\n    dealing <span>{damage}%</span> damage <span>2</span> times\n    to <span>8</span> enemies and reducing their defense\n    by <span>{reduction}%</span> for <span>12</span> sec.\n    Consumes <span>16</span> spirit.\n  "};var w={name:"Shield Mastery",attr:"shield-mastery",prop:"shieldMastery",rank:1,row:5,column:3,minLevel:0,maxLevel:10,passive:true,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:k,level:4}],values:{evasion:[9,9,12,15,18,21,24,27,30,33,36],perfectGuard:[5,5,6,7,8,9,10,11,12,13,14],increaseChance:[40,40,44,48,52,56,60,64,68,72,76],damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Your fervent desire to protect others increases your shield mastery,\n    increasing critical evasion by <span>{evasion}</span> and perfect guard chance\n    by <span>{perfectGuard}%</span> when you have a shield equipped when using Iron Shield.\n    Blocking an attack grants a <span>{increaseChance}%</span> chance to increase your damage\n    by <span>{damage}%</span> for <span>10</span> sec.\n  "};var b={name:"Shield Booster",attr:"shield-booster",prop:"shieldBooster",rank:1,row:6,column:3,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Off-hand Shield",cooldown:16,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:w,level:2}],values:{damage:[190,190,204,218,232,246,260,274,288,302,316],increase:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Lift <span>5</span> enemies up to <span>2</span> m in front of you with your shield,\n    dealing <span>{damage}%</span> damage.\n    Increases physical and magic resistance by <span>450</span>.\n    For <span>10</span> sec, has a chance to trigger counter when hit.\n    Also increases your counterattack damage\n    by an additional <span>{increase}%</span>.\n  "};var L={name:"Shield Wall",attr:"shield-wall",prop:"shieldWall",rank:1,row:3,column:4,minLevel:0,maxLevel:10,element:"Holy",weaponRequired:"Off-hand Shield",cooldown:45,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{resistance:[90,90,120,150,180,210,240,270,300,330,360]},description:"\n    Create a <span>3</span> m holy field around you for <span>10</span> sec,\n    increasing the physical resistance and magic resistance of <span>10</span> allies,\n    including yourself, by <span>{resistance}</span>.\n  "};var S={name:"Warhorn",attr:"warhorn",prop:"warhorn",rank:1,row:4,column:4,minLevel:0,maxLevel:10,spirit:40,cooldown:30,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:L,level:3}],values:{allies:[4,4,5,6,7,8,9,10,11,12,13],increase:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Shout to raise morale, increasing the physical attack and magic attack of <span>{allies}%</span>\n    within <span>3</span> m, plus yourself, by <span>{increase}%</span> for <span>10</span> sec.\n    Consumes <span>40</span> spirit.\n  "};var R={name:"Bulwark",attr:"bulwark",prop:"bulwark",rank:1,row:5,column:4,minLevel:0,maxLevel:10,element:"Holy",weaponRequired:"Off-hand Shield",cooldown:[130,130,120,110,100,90,80,70,60,55,50],levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:L,level:4},{skill:S,level:3}],values:{allies:[4,4,5,6,7,8,9,10,11,12,13]},description:"\n    Create a protective barrier for <span>3</span> sec to make <span>{allies}</span> allies,\n    including yourself, invulnerable to enemy attacks.\n    Some attacks cannot be blocked.\n  "};var q={name:"Defender of the Faith",attr:"defender-of-the-faith",prop:"defenderOfTheFaith",rank:1,row:6,column:4,minLevel:0,maxLevel:10,element:"Holy",weaponRequired:"Off-hand Shield",cooldown:[130,130,120,110,100,90,80,70,60,55,50],levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:L,level:4},{skill:S,level:3}],values:{allies:[4,4,5,6,7,8,9,10,11,12,13]},description:"\n    Dash to the nearest ally within <span>8</span> m to create a protective barrier that lasts\n    <span>3</span> sec and makes <span>{allies}</span> allies, including yourself, invulnerable to enemy attacks.\n    Some attacks cannot be blocked.\n  "};var T={name:"Dual Tactics",attr:"dual-tactics",prop:"dualTactics",rank:2,row:1,column:4,minLevel:1,maxLevel:1,passive:true,description:"\n    Change up your tactics based on your current health.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    When max health is at least <span>80%</span>, activates Offensive Tactics.\n    <br/><br/>\n    When max health is <span>30%</span> or less, activates Defensive Tactics.\n    <br/><br/>\n    Permanently increases strength by <span>40</span>.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Offensive Tactics increases all damage by 10%.<br/>\n    Defensive Tactics increases physical and magic defence by <span>150</span>.\n  "};var C={name:"Conviction Strike",attr:"conviction-strike",prop:"convictionStrike",rank:2,row:1,column:1,minLevel:0,maxLevel:4,attackType:"Close Range / Physical",weaponRequired:"Main Hand Longsword",spirit:20,levelRequirement:[60,60,60,60,60],values:{damage:[734,734,819,904,989]},description:"\n    Focus your strength into a precise word thrust.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage. Grants knockback immunity.\n  "};var x={name:"Divine Retribution",attr:"divine-retribution",prop:"divineRetribution",rank:2,row:2,column:1,minLevel:0,maxLevel:4,element:"Holy",spirit:40,cooldown:30,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:C,level:3}],values:{attack:[5,5,10,15,20]},description:"\n    Channel divine fury through your sword, gaining offensive power at the expense of defense.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases physical and magic attack by <span>{attack}%</span>, but decreases defense by <span>30%</span>.\n    Disables all shield skills except for Shield Charge.\n  "};var D={name:"Sword Discipline",attr:"sword-discipline",prop:"swordDiscipline",rank:2,row:3,column:1,minLevel:0,maxLevel:4,passive:true,levelRequirement:[64,64,64,64,64],skillRequirements:[{skill:x,level:2}],values:{increase:[3,3,6,9,12]},description:"\n    You have devoted yourself to the mastery of the sword.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases Conviction Strike and Light Bringer damage by <span>{increase}%</span>.\n  "};var P={name:"Light Bringer",attr:"light-bringer",prop:"lightBringer",rank:2,row:5,column:1,minLevel:0,maxLevel:4,element:"Holy",attackType:"Physical",weaponRequired:"Main Hand Longsword",cooldown:30,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:x,level:3},{skill:D,level:3}],values:{damage:[1417,1417,1582,1747,1912]},description:"\n    Summon holy swords to damage enemies in a large area before you.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage per hit. Grants knockback immunity.\n  "};var M={name:"Guardian's Wings",attr:"guardians-wings",prop:"guardiansWings",rank:2,row:1,column:3,minLevel:0,maxLevel:4,element:"Holy",weaponRequired:"Off-hand Shield",spirit:8,levelRequirement:[60,60,60,60,60],values:{damage:[185,185,206,227,248],reduction:[10,10,20,30,40],perfectGuard:[3,3,6,9,12],additionalDamage:[411,411,458,505,552]},description:"\n    Spread wings of light to create a curtain of divine energy.\n    Hold down the skill key to project a Guardian Shield in front of you.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Reduces incoming damage by <span>{reduction}%</span>.\n    Increases perfect guard by <span>{perfectGuard}%</span>.\n    Able to move while this is active.\n    Grants knockback immunity.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Guardian Shield deals <span>{additionalDamage}%</span> damage and pierces targets <span>8</span> times.\n  "};var E={name:"Cyclone Shield",attr:"cyclone-shield",prop:"cycloneShield",rank:2,row:2,column:3,minLevel:0,maxLevel:4,attackType:"Long Range / Physical",weaponRequired:"Off-hand Shield",spirit:20,cooldown:8,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:M,level:3}],values:{damage:[222,222,248,274,300],reduction:[2,2,4,6,8]},description:"\n    Toss your shield like a boomerang to create a whirlwind.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage every <span>0.2</span> sec.\n    Decreases enemy defence by <span>{reduction}%</span>.\n    This does not stack with Shield Toss.\n  "};var O={name:"Shield Training",attr:"shield-training",prop:"shieldTraining",rank:2,row:4,column:3,minLevel:0,maxLevel:4,passive:true,levelRequirement:[66,66,66,66,66],skillRequirements:[{skill:E,level:3}],values:{damage:[3,3,6,9,12]},description:"\n    You have dedicated yourself to the mastery of the shield.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases Cyclone Shield and Heaven's Judgement damage by <span>{damage}%</span>.\n  "};var H={name:"Heaven's Judgement",attr:"heavens-judgement",prop:"heavensJudgement",rank:2,row:5,column:3,minLevel:0,maxLevel:4,attackType:"Close Range / Physical",weaponRequired:"Off-hand Shield",spirit:40,cooldown:8,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:O,level:3}],values:{damage:[1125,1125,1256,1387,1518]},description:"\n    Gather divine energy in your shield, then release it to smite your enemies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Grants knockback immunity.\n  "};var B={Bulwark:R,CrossCut:c,DefenderOfTheFaith:q,DivineStrike:m,DrillThrust:v,IronDefense:n,IronShield:k,LongswordMastery:g,ShieldBooster:b,ShieldCharge:d,ShieldMastery:w,ShieldToss:f,ShieldWall:L,StingingFlurry:u,TornadoSlash:h,TyphoonSlash:y,Warhorn:S};var W={DualTactics:T,ConvictionStrike:C,DivineRetribution:x,SwordDiscipline:D,LightBringer:P,GuardiansWings:M,CycloneShield:E,ShieldTraining:O,HeavensJudgement:H};var G=Object.assign({},B,W);var _=function(){function e(e){a(this,e);this.editable=false;this.rank=t.Basic;this.extras=false;this.ignoreMax=false;this.bulwark=G.Bulwark.minLevel;this.crossCut=G.CrossCut.minLevel;this.defenderOfTheFaith=G.DefenderOfTheFaith.minLevel;this.divineStrike=G.DivineStrike.minLevel;this.drillThrust=G.DrillThrust.minLevel;this.ironDefense=G.IronDefense.minLevel;this.ironShield=G.IronShield.minLevel;this.longswordMastery=G.LongswordMastery.minLevel;this.shieldBooster=G.ShieldBooster.minLevel;this.shieldCharge=G.ShieldCharge.minLevel;this.shieldMastery=G.ShieldMastery.minLevel;this.shieldToss=G.ShieldToss.minLevel;this.shieldWall=G.ShieldWall.minLevel;this.stingingFlurry=G.StingingFlurry.minLevel;this.tornadoSlash=G.TornadoSlash.minLevel;this.typhoonSlash=G.TyphoonSlash.minLevel;this.warhorn=G.Warhorn.minLevel;this.dualTactics=G.DualTactics.minLevel;this.convictionStrike=G.ConvictionStrike.minLevel;this.divineRetribution=G.DivineRetribution.minLevel;this.swordDiscipline=G.SwordDiscipline.minLevel;this.lightBringer=G.LightBringer.minLevel;this.guardiansWings=G.GuardiansWings.minLevel;this.cycloneShield=G.CycloneShield.minLevel;this.shieldTraining=G.ShieldTraining.minLevel;this.heavensJudgement=G.HeavensJudgement.minLevel;this.onSkillChanged=i(this,"skillchanged",7)}e.prototype.componentWillLoad=function(){l(this,G,this.ignoreMax)};e.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,o(this,G)]})})};e.prototype.levelChanged=function(e,n){this[e.prop]=n;l(this,G,this.ignoreMax,e);this.host.forceUpdate();this.emitChangeEvent()};e.prototype.ignoreMaxChanged=function(){l(this,G,this.ignoreMax)};e.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(o(this,G))};e.prototype.render=function(){var e=this;return s("ms-chart",{msClass:"knight",rank:this.rank,onRankChange:function(n){var a=n.detail;return e.rank=a}},p(this,B,this.editable,this.extras,t.Basic),p(this,W,this.editable,this.extras,t.Awakening))};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{ignoreMax:["ignoreMaxChanged"],extras:["emitChangeEvent"],rank:["emitChangeEvent"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return e}();e("ms_knight",_)}}});