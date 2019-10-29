var __awaiter=this&&this.__awaiter||function(e,n,a,t){return new(a||(a=Promise))(function(s,i){function r(e){try{o(t.next(e))}catch(e){i(e)}}function l(e){try{o(t["throw"](e))}catch(e){i(e)}}function o(e){e.done?s(e.value):new a(function(n){n(e.value)}).then(r,l)}o((t=t.apply(e,n||[])).next())})};var __generator=this&&this.__generator||function(e,n){var a={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,s,i,r;return r={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function l(e){return function(n){return o([e,n])}}function o(r){if(t)throw new TypeError("Generator is already executing.");while(a)try{if(t=1,s&&(i=r[0]&2?s["return"]:r[0]?s["throw"]||((i=s["return"])&&i.call(s),0):s.next)&&!(i=i.call(s,r[1])).done)return i;if(s=0,i)r=[r[0]&2,i.value];switch(r[0]){case 0:case 1:i=r;break;case 4:a.label++;return{value:r[1],done:false};case 5:a.label++;s=r[1];r=[0];continue;case 7:r=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(r[0]===6||r[0]===2)){a=0;continue}if(r[0]===3&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(r[0]===6&&a.label<i[1]){a.label=i[1];i=r;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(r);break}if(i[2])a.ops.pop();a.trys.pop();continue}r=n.call(e,a)}catch(e){r=[6,e];s=0}finally{t=i=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-a868d0a0.system.js","./p-832ce77e.system.js","./p-e17c4c91.system.js"],function(e,n){"use strict";var a,t,s,i,r,l,o,m;return{setters:[function(e){a=e.e;t=e.f;s=e.d;i=e.g},function(e){r=e.a},function(e){l=e.a;o=e.b;m=e.c}],execute:function(){var n={name:"Reload",attr:"reload",prop:"reload",rank:1,row:1,column:3,minLevel:1,maxLevel:1,weaponRequired:"Two-handed Cannon",sp:true,description:"\n    Rotate the cannon's ammo cannisters <span>2</span> times\n    in <span>0.25</span> sec intervals to maintain them,\n    restoring <span>50</span> spirit each time,\n    for a total of <span>100</span> spirit.\n  "};var p={name:"Jet Boots",attr:"jet-boots",prop:"jetBoots",rank:1,row:1,column:4,minLevel:1,maxLevel:1,attackType:"Long Range / Physical",description:"\n    Propel <span>6</span> m forward with your jet boots,\n    leaving behind a shockwave that deals <span>120%</span> damage\n    to <span>5</span> enemies within <span>1.5</span> m.\n    Consumes <span>60</span> stamina.\n  "};var c={name:"Bullet Spray",attr:"bullet-spray",prop:"bulletSpray",rank:1,row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[39,39,42,45,48,51,54,57,60,63,66]},description:"\n    Fire wildly as the cannon's barrel spins, dealing <span>{damage}%</span> damage\n    <span>4</span> times to the closest enemy up to <span>8</span> m in front of you.\n    The bullet cannot pierce multiple enemies.\n    Press the skill key again to trigger a <span>2-hit</span> combo.\n    On the second hit, the skill lasts while the skill key is held down.\n  "};var d={name:"Gatling Fire",attr:"gatling-fire",prop:"gatlingFire",rank:1,row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:5,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[44,44,48,52,56,60,64,68,72,76,80]},description:"\n    Fire wildly as the cannon's barrel spins, dealing <span>{damage}%</span> damage\n    <span>3</span> times to <span>5</span> enemies up to <span>8</span> m in front of you.\n    This skill uses a special piercing bullet to damage all targets in range.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The skill continues to alternate between the second and third hit while the skill key is held down.\n    Consumes <span>5</span> spirit.\n  "};var u={name:"Lock On",attr:"lock-on",prop:"lockOn",rank:1,row:3,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:15,cooldown:12,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],skillRequirements:[{skill:c,level:4},{skill:d,level:3}],values:{damage:[446,446,477,508,539,570,601,632,663,694,725]},description:"\n    Take a shooting stance, aiming at the closest target up to <span>8</span> m in\n    front of you and shooting a special bullet that deals <span>{damage}%</span> damage,\n    pierces the target up to <span>8</span> times, and can damage enemies behind the target.\n    Consumes <span>15</span> spirit.\n  "};var h={name:"Advanced Bullets",attr:"advanced-bullets",prop:"advancedBullets",rank:1,row:5,column:1,minLevel:0,maxLevel:10,passive:true,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:d,level:5},{skill:u,level:4}],values:{damage:[1.5,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15]},description:"\n    Upgrade to high performance bullets. Increases the damage of\n    Bullet Spray, Gatling Fire, and Lock-on by <span>{damage}%</span>.\n  "};var g={name:"Magnetic Bomb",attr:"magnetic-bomb",prop:"magneticBomb",rank:1,row:3,column:2,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:20,cooldown:10,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:c,level:2}],values:{damage:[165,165,177,189,201,213,225,237,249,261,273],movement:[3,3,6,9,12,15,18,21,24,27,30]},description:"\n    Launch a magnetic bomb at the closest enemy up to <span>9</span> m in front of you.\n    The bomb attracts <span>8</span> enemies within <span>3</span> m every second,\n    dealing <span>{damage}%</span> electric damage and decreasing\n    their movement speed by <span>{movement}%</span>.\n    Consumes <span>20</span> spirit.\n  "};var v={name:"Electric Blast",attr:"electric-blast",prop:"electricBlast",rank:1,row:4,column:2,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",cooldown:16,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:g,level:4}],values:{stage1:[455,455,487,519,551,583,615,647,679,711,743],stage2:[455,455,487,519,551,583,615,647,679,711,743],stage3:[455,455,487,519,551,583,615,647,679,711,743]},description:"\n    Activate the compact particle accelerator on your cannon to gather electricity and shoot,\n    dealing <span>{stage1}%</span> electric damage\n    to <span>3</span> enemies up to <span>9</span> m in front of you and knocking them back <span>1.5</span> m.\n    After starting to gather electricity, hold the skill key down for <span>0.5</span> sec to enhance the effect to <span>Stage 2</span> and\n    deal <span>{stage2}%</span> electric damage <span>2</span> times\n    to <span>5</span> enemies up to <span>9</span> m in front of you and knock them back <span>3</span> m.\n    Hold the skill key down for <span>0.5</span> sec at <span>Stage 2</span> to enhance the effect to <span>Stage 3</span> and\n    deal <span>{stage3}%</span> electric damage <span>3</span> times\n    to <span>8</span> enemies up to <span>9</span> m in front of you and knock them back <span>4.5</span> m.\n    You will fire automatically when the skill key is held down for <span>3</span> sec at <span>Stage 3</span>.\n  "};var y={name:"Advanced Pulse Weapons",attr:"advanced-pulse-weapons",prop:"advancedPulseWeapons",rank:1,row:5,column:2,minLevel:0,maxLevel:10,element:"Electric",passive:true,attackType:"Physical",levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:v,level:4}],values:{damage:[1.5,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15]},description:"\n    Upgrade your cannon's magnetic field engine to increase its output.\n    Increase the damage of Magnetic Bomb and Electric Blast by <span>{damage}%</span>.\n  "};var f={name:"BlastChargeKit",attr:"blast-charge-kit",prop:"blastChargeKit",rank:1,row:6,column:2,minLevel:0,maxLevel:10,passive:true,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:v,level:4}],values:{damage:[1.5,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15]},description:"\n    Equip your cannon with a blast charge kit to optimize Electric Blast's output power and efficiency.\n    Electric Blast can be cast repeatedly without cooling down in between, at the cost of lowered damage and spirit.\n    Blast Charge Kit increases the rapid-firing Electric Blast damage by <span>{damage}%</span>.\n  "};var b={name:"Rocket Launcher",attr:"rocket-launcher",prop:"rocketLauncher",rank:1,row:3,column:3,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:20,cooldown:12,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[152,152,163,174,185,196,207,218,229,240,251],aoeDamage:[167,167,175,189,200,211,222,233,244,255,266],burnDuration:[3,3,4,5,6,7,8,9,10,10,10],burnDamage:[51,51,54,57,60,63,66,69,72,75,78]},description:"\n    Fire a missile at the closest enemy up to <span>9</span> m in front of you.\n    The rocket deals <span>{damage}%</span> fire damage to the target,\n    then explodes to deal <span>{aoeDamage}%</span> fire damage\n    to <span>8</span> enemies within <span>3</span> m.\n    The area of the explosion burns for <span>{burnDuration}</span> sec,\n    dealing <span>{burnDamage}%</span> fire damage every second to <span>8</span> enemies.\n    Consumes <span>20</span> spirit.\n  "};var k={name:"Homing Missiles",attr:"homing-missiles",prop:"homingMissiles",rank:1,row:4,column:3,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:15,cooldown:10,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:b,level:4}],values:{damage:[88,88,94,100,106,112,118,124,130,136,142],missiles:[3,3,3,3,4,4,4,5,5,5,5]},description:"\n    Fire <span>{missiles}</span> homing missiles that each deal\n    <span>{damage}%</span> fire damage to enemies within <span>9</span> m.\n    Consumes <span>15</span> spirit.\n  "};var w={name:"M-Bomb",attr:"m-bomb",prop:"mBomb",rank:1,row:5,column:3,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Physical",spirit:15,cooldown:30,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:k,level:5}],values:{damage:[174,174,186,198,210,222,234,246,258,270,282],additionalDamage:[376,376,402,428,454,480,506,532,558,584,610]},description:"\n    Call in a high-tech bomb to drop <span>7.5</span> m in front of you, which deals\n    <span>{damage}%</span> fire damage to <span>8</span> enemies within <span>3</span> m.\n    A second blast occurs after <span>0.5</span> sec, dealing <span>{additionalDamage}%</span>\n    fire damage to <span>8</span> enemies within <span>6</span> m.\n    Consumes <span>15</span> spirit.\n  "};var L={name:"Advanced Missiles",attr:"advanced-missiles",prop:"advancedMissiles",rank:1,row:6,column:3,minLevel:0,maxLevel:10,element:"Fire",passive:true,attackType:"Physical",levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:k,level:4}],values:{damage:[1.5,1.5,3,4.5,6,7.5,9,10.5,12,13.5,15]},description:"\n    Upgrade to high performance missiles.\n    Increases the damage of Rocket Launcher, Homing Missiles, and M-Bomb by <span>{damage}%</span>.\n  "};var R={name:"Stun Grenades",attr:"stun-grenades",prop:"stunGrenades",rank:1,row:3,column:4,minLevel:0,maxLevel:10,element:"Fire",attackType:"Physical",spirit:6,cooldown:5,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{damage:[133,133,143,153,163,173,183,193,203,213,223],range:[1.5,1.5,1.5,1.5,2,2,2,3,3,3,3],stun:[64,64,67,70,73,76,79,82,85,88,91]},description:"\n    Toss two grenades <span>3</span> m in front of you that explode after <span>0.5</span> sec,\n    dealing <span>{damage}%</span> fire damage to <span>5</span> enemies within\n    <span>{range}</span> m and has a <span>{stun}%</span> chance to stun.\n    Consumes <span>6</span> spirit.\n  "};var C={name:"Suborbital Bombardment",attr:"suborbital-bombardment",prop:"suborbitalBombardment",rank:1,row:4,column:4,minLevel:0,maxLevel:10,element:"Electric",attackType:"Physical",spirit:20,cooldown:30,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:R,level:4}],values:{damage:[64,64,67,70,73,76,79,82,85,88,91],duration:[10,10,10,10,11,11,11,12,12,12,12],additionalDamage:[22,22,23,24,25,26,27,28,29,30,31]},description:"\n    Summon a satellite to fire lasers at the closest enemy within <span>8</span> m,\n    dealing <span>{damage}%</span> electric damage\n    to <span>5</span> enemies within <span>2.25</span> m of your initial target\n    every sec for <span>{duration}</span> sec.\n    If you have the Pulse Energy upgrade, the enhanced laser deals\n    an additional <span>{additionalDamage}%</span> electric damage.\n    Consumes <span>20</span> spirit.\n  "};var B={name:"MedKit",attr:"med-kit",prop:"medKit",rank:1,row:6,column:4,minLevel:0,maxLevel:10,attackType:"Physical",cooldown:20,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],values:{health:[400,400,800,1200,1600,2e3,2400,2800,3200,3600,4e3]},description:"\n    Drop a first aid kit that you or an ally can pick up after <span>1</span>\n    sec to instantly restore <span>{health}</span> health.\n  "};var P={name:"Mobile Armory",attr:"mobile-armory",prop:"mobileArmory",rank:2,row:1,column:4,minLevel:1,maxLevel:1,attackType:"Physical",cooldown:5,values:{damage:[418,418,418,418,418],additionalDamage:[500,500,500,500,500],movement:[15,15,15,15,15],dot:[150,150,150,150,150],iceStormIncrease:[49,49,49,49,49]},description:"\n    Deploy a station that automatically refills your ammo.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Restores <span>20</span> spirit per sec.\n    <br/><br/>\n    Permanently increases dexterity by 40.\n  "};var q={name:"Focused Fire",attr:"focused-fire",prop:"focusedFire",rank:2,row:1,column:1,minLevel:0,maxLevel:4,attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",levelRequirement:[60,60,60,60,60],values:{damage:[102,102,114,126,138]},description:"\n    Unleash focused mortar fire on enemies in front of you.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Can keep firing until ammo is depleted.\n    Grants knockback immunity.\n  "};var x={name:"Fire Bomber",attr:"fire-bomber",prop:"fireBomber",rank:2,row:2,column:1,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",cooldown:8,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:q,level:3}],values:{damage:[398,398,441,487,533],additionalDamage:[403,403,450,497,544],fireDamage:[74,74,82,90,98]},description:"\n    Launch explosive fire missiles to engulf targets in fiery doom.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Deals <span>{additionalDamage}%</span> damage and burns targets who are enveloped in flames.\n    Can keep firing until missiles are depleted.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Burn deals <span>{fireDamage}%</span> fire damage per sec for <span>10</span> sec.\n  "};var T={name:"Missile Supercharger",attr:"missile-supercharger",prop:"missileSupercharger",rank:2,row:3,column:1,minLevel:0,maxLevel:4,attackType:"Physical",passive:true,levelRequirement:[64,64,64,64,64],skillRequirements:[{skill:x,level:2}],values:{increase:[2,2,4,6,8]},description:"\n    Upgrade your ammo chambers to improve certain skills.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases Focused Fire, Fire Bomber, and Demolition Cannon damage by <span>{increase}%</span>.\n  "};var S={name:"Demolition Cannon",attr:"demolition-cannon",prop:"demolitionCannon",rank:2,row:5,column:1,minLevel:0,maxLevel:4,attackType:"Long Range / Physical",cooldown:12,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:x,level:3},{skill:T,level:3}],values:{damage:[437,437,488,539,590],firstSecondDamage:[534,534,596,658,720]},description:"\n    Modify your satellite to fire high-powered, explosive missiles.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    First and second explosions deal <span>{firstSecondDamage}%</span> damage each.\n    Can keep firing until ammo is depleted.\n    Grants knockback immunity.\n  "};var E={name:"Plasma Chain",attr:"plasma-chain",prop:"plasmaChain",rank:2,row:1,column:3,minLevel:0,maxLevel:4,element:"Electric",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",spirit:5,levelRequirement:[60,60,60,60,60],values:{damage:[93,93,103,113,123],electricDamage:[258,258,288,318,348]},description:"\n    Route power from your jet boots to rain superheated plasma on your enemies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Repeatedly deals <span>{damage}%</span> damage to <span>7</span> enemies within <span>9</span> m.\n    <br/><br/>\n    Triggers an explosion after damaging a target <span>5</span> times.\n    <br/><br/>\n    Able to move while skill is active.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Explosion deals <span>{electricDamage}%</span> electric damage.\n  "};var M={name:"Sky Hunter",attr:"sky-hunter",prop:"skyHunter",rank:2,row:2,column:3,minLevel:0,maxLevel:4,element:"Electric",attackType:"Physical",cooldown:60,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:E,level:3}],values:{damage:[565,565,631,697,763]},description:"\n    Remotely control a high-intensity laser fired from one of your heavy weapons satellites.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> electric damage.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Grants a Deflector Shield that absorbs damage equal to <span>30%</span> of your max health.\n  "};var D={name:"Plasma Supercharger",attr:"plasma-supercharger",prop:"plasmaSupercharger",rank:2,row:4,column:3,minLevel:0,maxLevel:4,element:"Electric",attackType:"Physical",passive:true,levelRequirement:[66,66,66,66,66],skillRequirements:[{skill:M,level:3}],values:{damage:[2,2,4,6,8]},description:"\n    Upgrade the plasma reactor in your cannon for increased firepower.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases Plasma Chain, Sky Hunter, and Hyper Giga Launcher damage by <span>{damage}%</span>.\n  "};var F={name:"Hyper Giga Cannon",attr:"hyper-giga-cannon",prop:"hyperGigaCannon",rank:2,row:5,column:3,minLevel:0,maxLevel:4,element:"Electric",attackType:"Long Range / Physical",weaponRequired:"Two-handed Cannon",cooldown:6,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:D,level:3}],values:{damage:[190,190,212,234,256]},description:"\n    Patch your jet boot power into your cannon,\n    firing a powerful laser while you fly around.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>4</span> times.\n    Can keep firing until battery is depleted.\n    <br/><br/>\n    Able to move while skill is active.\n  "};var A={AdvancedBullets:h,AdvancedMissiles:L,AdvancedPulseWeapons:y,BlastChargeKit:f,BulletSpray:c,ElectricBlast:v,GatlingFire:d,HomingMissiles:k,JetBoots:p,LockOn:u,MagneticBomb:g,MBomb:w,MedKit:B,Reload:n,RocketLauncher:b,StunGrenades:R,SuborbitalBombardment:C};var G={MobileArmory:P,FocusedFire:q,FireBomber:x,MissileSupercharger:T,DemolitionCannon:S,PlasmaChain:E,SkyHunter:M,PlasmaSupercharger:D,HyperGigaCannon:F};var H=Object.assign({},A,G);var _=function(){function e(e){a(this,e);this.editable=false;this.rank=r.Basic;this.extras=false;this.ignoreMax=false;this.advancedBullets=H.AdvancedBullets.minLevel;this.advancedMissiles=H.AdvancedMissiles.minLevel;this.advancedPulseWeapons=H.AdvancedPulseWeapons.minLevel;this.blastChargeKit=H.BlastChargeKit.minLevel;this.bulletSpray=H.BulletSpray.minLevel;this.electricBlast=H.ElectricBlast.minLevel;this.gatlingFire=H.GatlingFire.minLevel;this.homingMissiles=H.HomingMissiles.minLevel;this.jetBoots=H.JetBoots.minLevel;this.lockOn=H.LockOn.minLevel;this.magneticBomb=H.MagneticBomb.minLevel;this.mBomb=H.MBomb.minLevel;this.medKit=H.MedKit.minLevel;this.reload=H.Reload.minLevel;this.rocketLauncher=H.RocketLauncher.minLevel;this.stunGrenades=H.StunGrenades.minLevel;this.suborbitalBombardment=H.SuborbitalBombardment.minLevel;this.mobileArmory=H.MobileArmory.minLevel;this.focusedFire=H.FocusedFire.minLevel;this.fireBomber=H.FireBomber.minLevel;this.missileSupercharger=H.MissileSupercharger.minLevel;this.demolitionCannon=H.DemolitionCannon.minLevel;this.plasmaChain=H.PlasmaChain.minLevel;this.skyHunter=H.SkyHunter.minLevel;this.plasmaSupercharger=H.PlasmaSupercharger.minLevel;this.hyperGigaCannon=H.HyperGigaCannon.minLevel;this.onSkillChanged=t(this,"skillchanged",7)}e.prototype.componentWillLoad=function(){l(this,H,this.ignoreMax)};e.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,o(this,H)]})})};e.prototype.levelChanged=function(e,n){this[e.prop]=n;l(this,H,this.ignoreMax,e);this.host.forceUpdate();this.emitChangeEvent()};e.prototype.ignoreMaxChanged=function(){l(this,H,this.ignoreMax)};e.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(o(this,H))};e.prototype.render=function(){var e=this;return s("ms-chart",{msClass:"heavy-gunner",rank:this.rank,onRankChange:function(n){var a=n.detail;return e.rank=a}},m(this,A,this.editable,this.extras,r.Basic),m(this,G,this.editable,this.extras,r.Awakening))};Object.defineProperty(e.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{ignoreMax:["ignoreMaxChanged"],extras:["emitChangeEvent"],rank:["emitChangeEvent"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return e}();e("ms_heavy_gunner",_)}}});