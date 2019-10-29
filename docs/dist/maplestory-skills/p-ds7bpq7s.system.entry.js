var __awaiter=this&&this.__awaiter||function(e,a,n,r){return new(n||(n=Promise))(function(s,i){function t(e){try{l(r.next(e))}catch(e){i(e)}}function o(e){try{l(r["throw"](e))}catch(e){i(e)}}function l(e){e.done?s(e.value):new n(function(a){a(e.value)}).then(t,o)}l((r=r.apply(e,a||[])).next())})};var __generator=this&&this.__generator||function(e,a){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,t;return t={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(t[Symbol.iterator]=function(){return this}),t;function o(e){return function(a){return l([e,a])}}function l(t){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,s&&(i=t[0]&2?s["return"]:t[0]?s["throw"]||((i=s["return"])&&i.call(s),0):s.next)&&!(i=i.call(s,t[1])).done)return i;if(s=0,i)t=[t[0]&2,i.value];switch(t[0]){case 0:case 1:i=t;break;case 4:n.label++;return{value:t[1],done:false};case 5:n.label++;s=t[1];t=[0];continue;case 7:t=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(t[0]===6||t[0]===2)){n=0;continue}if(t[0]===3&&(!i||t[1]>i[0]&&t[1]<i[3])){n.label=t[1];break}if(t[0]===6&&n.label<i[1]){n.label=i[1];i=t;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(t);break}if(i[2])n.ops.pop();n.trys.pop();continue}t=a.call(e,n)}catch(e){t=[6,e];s=0}finally{r=i=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:true}}};System.register(["./p-a868d0a0.system.js","./p-832ce77e.system.js","./p-e17c4c91.system.js"],function(e,a){"use strict";var n,r,s,i,t,o,l,p;return{setters:[function(e){n=e.e;r=e.f;s=e.d;i=e.g},function(e){t=e.a},function(e){o=e.a;l=e.b;p=e.c}],execute:function(){var a={name:"Snipe",attr:"snipe",prop:"snipe",rank:1,row:1,column:3,minLevel:1,maxLevel:1,passive:true,sp:true,description:"\n    Take aim and even your breathing to restore <span>7</span> spirit every <span>0.5</span> sec.\n    When no enemies are within <span>4</span> m, the amount of spirit restored increases by <span>1</span>.\n  "};var c={name:"Eagle Glide",attr:"eagle-glide",prop:"eagleGlide",rank:1,row:1,column:4,minLevel:1,maxLevel:1,description:"\n    Summon Bronze Eagle and grab onto him to fly <span>7.5</span> m forward.\n    This skill can cancel other skills. Consumes <span>80</span> stamina.\n  "};var m={name:"Arrow Stream",attr:"arrow-stream",prop:"arrowStream",rank:1,row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[32,32,34,36,38,40,42,44,46,48,50],hits:[3,3,3,3,4,4,4,4,5,5,5]},description:"\n    Fire a series of arrows that deal <span>{damage}%</span> damage <span>{hits}%</span>\n    times to the closest enemy up to <span>9</span> m in front of you.\n  "};var h={name:"Arrow Barrage",attr:"arrow-barrage",prop:"arrowBarrage",rank:1,row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",spirit:12,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],firstDamage:[153,153,164,175,186,197,208,219,230,241,252],thirdDamage:[82,82,87,92,97,102,107,112,117,122,127]},description:"\n    Fire several arrows at once, dealing <span>{firstDamage}%</span> damage\n    to <span>8</span> enemies up to <span>7</span> m.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The second shot does the same as the first.\n    You perform a reverse somersault on the third and rapidly fire arrows,\n    dealing <span>{thirdDamage}%</span> damage <span>3</span> times.\n    Consumes <span>12</span> spirit.\n  "};var d={name:"Rapid Shot",attr:"rapid-shot",prop:"rapidShot",rank:1,row:3,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",spirit:7,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],skillRequirements:[{skill:m,level:3},{skill:h,level:3}],values:{damage:[42,42,45,48,51,54,57,60,63,66,69]},description:"\n    Shoot a series of fire arrows <span>3</span> times,\n    dealing <span>{damage}%</span> damage to the closest enemy up to <span>9</span> m in front of you.\n    The skill lasts while the skill key is held down.\n    Fire arrows pierce the enemy <span>3</span> times and can hit enemies behind.\n    Consumes <span>7</span> spirit.\n  "};var u={name:"Arrow Storm",attr:"arrow-storm",prop:"arrowStorm",rank:1,row:4,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",cooldown:13,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:h,level:5},{skill:d,level:3}],values:{damage:[39,39,42,45,48,51,54,57,60,63,66]},description:"\n    Fire a spreadable arrow straight up into the sky, which rains down a volley that\n    deals <span>{damage}%</span> damage <span>20</span> times to <span>8</span> enemies\n    within <span>4.5</span> m. Hold the skill down for <span>0.5</span> sec to fire the\n    arrow <span>7.5</span> m in front of you instead.\n    You will be immune to knockback while this skill is active.\n  "};var v={name:"Screwdriver Shot",attr:"screwdriver-shot",prop:"screwdriverShot",rank:1,row:6,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",cooldown:13,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:d,level:8}],values:{stage1:[372,372,399,426,453,480,507,534,561,588,615],stage2:[725,725,777,829,881,933,985,1037,1089,1141,1193],stage3:[1078,1078,1155,1232,1309,1386,1463,1540,1617,1694,1771]},description:"\n    Loose a spinning arrow up to <span>12</span> m in front of you,\n    dealing <span>{stage1}%</span> damage to <span>20</span> enemies in its path.\n    Hold the skill key down for <span>0.5</span> sec to enhance the arrow to <span>Lv. 2</span>,\n    increasing its damage to <span>{stage2}%</span>.\n    Hold the skill key down for <span>0.5</span> sec at <span>Lv. 2</span> to enhance it to <span>Lv. 3</span>,\n    increasing its damage to <span>{stage3}%</span>.\n    The arrow is shot automatically when it reaches <span>Lv. 3</span>.\n    You will be immune to knockback while this skill is active.\n    This skill can only be used while Snipe is active.\n  "};var g={name:"Evasive Salvo",attr:"evasive-salvo",prop:"evasiveSalvo",rank:1,row:3,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[108,108,115,122,129,136,143,150,157,164,171]},description:"\n    Swiftly jump back <span>3</span> m and fire <span>3</span> volleys of arrows.\n    The arrows are <span>2</span> m apart and deal <span>{damage}%</span> damage each to up to <span>5</span> enemies.\n    All three volleys have a <span>40%</span> chance to be critical regardless of your critical rate.\n    This skill can cancel other skills. You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  "};var w={name:"Ice Arrow",attr:"ice-arrow",prop:"iceArrow",rank:1,row:4,column:2,minLevel:0,maxLevel:10,element:"Ice",attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",spirit:6,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:g,level:5}],values:{damage:[58,58,62,66,70,74,78,82,86,90,94]},description:"\n    Fire three ice arrows at once, dealing <span>{damage}%</span> damage\n    to enemies up to <span>9</span> m in front of you and decreasing their\n    movement speed and jump power by <span>4%</span> for <span>5</span> sec.\n    Ice arrows pierce the enemy <span>4</span> times and can hit enemies behind.\n    The movement speed reduction effect can stack up to <span>10</span> times.\n    At max stacks, the target will be frozen for <span>2</span> sec.\n    Consumes <span>6</span> spirit.\n  "};var y={name:"Agile Archer",attr:"agile-archer",prop:"agileArcher",rank:1,row:5,column:2,minLevel:0,maxLevel:10,passive:true,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:w,level:4}],values:{piercing:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4],evasion:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    A personal training session with Oska has taught you how to\n    put more power into your shots and to move with more agility.\n    Increases piercing by <span>{piercing}%</span> and evasion by <span>{evasion}</span>.\n  "};var f={name:"Bow Swing",attr:"bow-swing",prop:"bowSwing",rank:1,row:6,column:2,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Two-handed Bow",cooldown:6,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:y,level:3}],values:{damage:[244,244,261,278,295,312,329,346,363,380,397],additionalDamage:[183,183,196,209,222,235,248,261,274,287,300]},description:"\n    Swing your bow wildly as you spin, dealing <span>{damage}%</span>\n    damage to <span>8</span> enemies within <span>3</span> m.\n    Deals an additional <span>{additionalDamage}%</span> ice damage\n    to targets frozen by the Ice Arrow debuff and consumes the effect.\n  "};var k={name:"Bronze Eagle",attr:"bronze-eagle",prop:"bronzeEagle",rank:1,row:3,column:3,minLevel:0,maxLevel:10,passive:true,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],values:{dexterity:[4.4,4.4,4.7,5,5.3,5.6,5.9,6.2,6.5,6.8,7.1]},description:"\n    Bronze Eagle, your companion from the Green Hoods, has a <span>100%</span> chance\n    to fly by your side for <span>15</span> sec when you land a critical hit.\n    He increases your Dexterity by <span>{dexterity}%</span> and awaits your command.\n    Once he appears, he cannot return again for <span>18</span> sec.\n  "};var b={name:"Eagle Claw",attr:"eagle-claw",prop:"eagleClaw",rank:1,row:4,column:3,minLevel:0,maxLevel:10,attackType:"Long Range / Physical",levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:k,level:7}],values:{damage:[302,302,323,344,365,386,407,428,449,470,491],additionalDamage:[60,60,64,68,72,76,80,84,88,92,96],movement:[30,30,30,30,35,35,35,40,40,40,45]},description:"\n    Command Bronze Eagle to attack, dealing <span>{damage}%</span> damage\n    to <span>8</span> enemies up to <span>9</span> m in front of you.\n    Your companion also scratches enemies,\n    dealing an additional <span>{additionalDamage}%</span> damage every sec for <span>6</span> sec\n    and reducing their movement speed and jump power by <span>{movement}%</span>.\n    This skill can only be used while Bronze Eagle is around,\n    and Bronze Eagle disappears after the skill is used.\n  "};var L={name:"Eagle's Majesty",attr:"eagles-majesty",prop:"eaglesMajesty",rank:1,row:5,column:3,minLevel:0,maxLevel:10,attackType:"Physical",spirit:[1,1,2,3,4,5,6,7,8,9,10],cooldown:60,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:b,level:3}],values:{damage:[25,25,26,27,28,29,30,31,32,33,34]},description:"\n    The majesty of eagles restores <span>{spirit}</span> spirit every second for <span>30</span> sec.\n    While this effect is active, Bronze Eagle deals <span>{damage}%</span> damage when you attack,\n    capped at once every <span>3</span> sec.\n  "};var S={name:"Conditioning",attr:"conditioning",prop:"conditioning",rank:1,row:3,column:4,minLevel:0,maxLevel:10,passive:true,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],values:{attack:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4],movement:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    Special training with the Green Hoods permanently increases your physical attack\n    by <span>{attack}%</span> and movement speed by <span>{movement}%</span>.\n  "};var R={name:"Sharp Eyes",attr:"sharp-eyes",prop:"sharpEyes",rank:1,row:5,column:4,minLevel:0,maxLevel:10,cooldown:180,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:S,level:6}],values:{criticalAllies:[13,13,20,27,34,41,48,55,62,69,76],accuracy:[1,1,1,2,2,3,3,4,4,4,5],criticalSelf:[4,4,8,12,16,20,24,28,32,36,40]},description:"\n    Create a magic seal that affects <span>5</span> tiles around you, increasing the\n    critical rate of allies who absorb it by <span>{criticalAllies}</span> and\n    their accuracy by <span>{accuracy}</span> for <span>180</span> sec.\n    The seal lasts for <span>20</span> sec.\n    Sharp Eyes also increases critical rate by <span>{criticalSelf}</span>.\n  "};var A={name:"Precision Shooter",attr:"precision-shooter",prop:"precisionShooter",rank:1,row:6,column:4,minLevel:0,maxLevel:10,passive:true,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],values:{speed:[1,1,1,2,2,3,3,4,4,5,5],screwdriver:[5,5,10,15,20,25,30,35,40,45,50]},description:"\n    Increase your aim technique and improve your firing speed.\n    Increases attack speed by <span>{speed}%</span> and improves Screwdriver Shot.\n    Improved Screwdriver Shot can be cast in Snipe mode and inflicts greater damage but cannot be reinforced.\n    Also increases improved Screwdriver Shot damage by <span>{screwdriver}%</span>.\n  "};var E={name:"Improved Gliding",attr:"improved-gliding",prop:"improvedGliding",rank:2,row:1,column:4,minLevel:1,maxLevel:1,passive:true,levelRequirement:[60,60,60,60,60],description:"\n    Glide through the air on your eagle's wings.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases dexterity by <span>40</span>.\n    <br/><br/>\n    Enhances Eagle Glide.\n  "};var q={name:"Flame Arrow",attr:"flame-arrow",prop:"flameArrow",rank:2,row:1,column:1,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",spirit:8,levelRequirement:[60,60,60,60,60],values:{firstDamage:[201,201,219,237,255],secondDamage:[88,88,96,104,112]},description:"\n    Lose <span>3</span> flaming arrows at enemies in front of you.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{firstDamage}%</span> damage <span>1</span> time\n    and <span>{secondDamage}%</span> damage <span>2</span> times.\n    <br/><br/>\n    Grants <span>1</span> stack of Burning Arrow.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    When Burning Arrow is at <span>10</span> stacks, use Multi-Drive Shot to enable Flame Arrow II.</span>\n  "};var x={name:"Multi-Drive Shot",attr:"multi-drive-shot",prop:"multiDriveShot",rank:2,row:2,column:1,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",cooldown:3,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:q,level:3}],values:{damage:[273,212,283,294,304],explosionDamage:[22,22,24,26,28]},description:"\n    Lose <span>3</span> guided fire arrows at the enemy.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>3</span> times and explodes.\n    <br/><br/>\n    When you have Burning Arrow II, this skill becomes Multi-Drive Shot II.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    The explosion deals <span>{explosionDamage}%</span> per <span>3</span> times to nearby enemies.\n    <br/>\n    Use this skill when Burning Arrow is at <span>10</span> stacks to enable Flame Arrow II.\n  "};var T={name:"Rangers Focus",attr:"rangers-focus",prop:"rangersFocus",rank:2,row:3,column:1,minLevel:0,maxLevel:4,cooldown:40,levelRequirement:[64,64,64,64,64],skillRequirements:[{skill:x,level:2}],values:{attack:[3,3,6,9,12]},description:"\n    Focus your senses to gain explosive power.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases physical attack by <span>{attack}%</span> and grants unlimited spirit for 15 sec.\n    <br/><br/>\n    Enables Flame Arrow IV. When Ranger's Focus ends, enables Flame Arrow III.\n  "};var B={name:"Haster's Teachings",attr:"hasters-teachings",prop:"hastersTeachings",rank:2,row:5,column:1,minLevel:0,maxLevel:4,passive:true,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:x,level:3},{skill:T,level:3}],values:{increase:[2,2,4,6,8]},description:"\n    Haster's tips and tricks have sharpened your abilities.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases the damage of Multi-Drive Shot and Flame arrow by <span>{increase}%</span>.\n    Reduces the spirit cost of Flame Arrow III by <span>20%</span>.\n    These damage bonuses also affects the enhanced forms of abilities.\n  "};var D={name:"Piercing Arrow",attr:"piercing-arrow",prop:"piercingArrow",rank:2,row:1,column:3,minLevel:0,maxLevel:4,attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",spirit:10,levelRequirement:[60,60,60,60,60],values:{damage:[417,417,465,513,561]},description:"\n    Launch an arrow propelled by the power of the wind.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Press the skill key again to perform a quick follow-up shot.\n  "};var P={name:"Spiral Arrow",attr:"spiral-arrow",prop:"spiralArrow",rank:2,row:2,column:3,minLevel:0,maxLevel:4,attackType:"Long Range / Physical",weaponRequired:"Two-handed Bow",spirit:20,cooldown:10,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:D,level:3}],values:{damage:[42,42,47,52,57],cooldownReset:[12,12,12,12,12],whirlwindDamage:[177,177,198,219,240]},description:"\n    Arc an arrow into the air and use the power of the wind to guide it.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and creates a whirlwind.\n    <br/><br/>\n    After using Piercing Arrow or Spiral Arrow, there is a <span>12%</span> chance to reset cooldown.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    The whirlwind deals <span>{whirlwindDamage}%</span> damage <span>5</span> times.\n    <br/>\n    Enhanced by Archer's Secrets.\n  "};var I={name:"Archer's Secrets",attr:"archers-secrets",prop:"archersSecrets",rank:2,row:4,column:3,minLevel:0,maxLevel:4,weaponRequired:"Two-handed Bow",levelRequirement:[66,66,66,66,66],skillRequirements:[{skill:P,level:3}],values:{piercing:[1,1,2,3,4],accuracy:[1,1,2,3,4]},description:"\n    Master the secrets of archery to unlock hidden skills and strengthen physical ability.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Available while Full Wind Draw is active.\n    Increases piercing by <span>{piercing}%</span> and\n    accuracy by <span>{accuracy}%</span> for <span>20</span> sec.\n    Enables use of Enhanced Spiral Arrow and Twirling Wind Arrow.\n    Once learned, unlocks Wind Draw and Full Wind Draw.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Hit enemies with Piercing Arrow and Spiral Arrow to gain Wind Draw,\n    which lasts for <span>15</span> sec and stack up to <span>15</span> times.\n    At max stacks, gain Full Wind Draw.\n    <br/>\n    Full Wind Draw enables for <span>30</span> sec.\n  "};var C={name:"Greater Sharp Eyes",attr:"greater-sharp-eyes",prop:"greaterSharpEyes",rank:2,row:5,column:3,minLevel:0,maxLevel:4,passive:true,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:I,level:3},{skill:P,level:3}],values:{attack:[3,3,6,9,12]},description:"\n    Master the secrets of archery to draw out the true power of Sharp Eyes.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Sharp Eyes becomes Enhanced Sharp Eyes.\n    <br/><br/>\n    Enhanced Sharp Eyes grants a <span>{attack}%</span> physical attack bonus to the caster.\n  "};var F={AgileArcher:y,ArrowBarrage:h,ArrowStorm:u,ArrowStream:m,BowSwing:f,BronzeEagle:k,Conditioning:S,EagleClaw:b,EagleGlide:c,EaglesMajesty:L,EvasiveSalvo:g,IceArrow:w,PrecisionShooter:A,RapidShot:d,ScrewdriverShot:v,SharpEyes:R,Snipe:a};var M={ImprovedGliding:E,FlameArrow:q,MultiDriveShot:x,RangersFocus:T,HastersTeachings:B,PiercingArrow:D,SpiralArrow:P,ArchersSecrets:I,GreaterSharpEyes:C};var G=Object.assign({},F,M);var j=function(){function e(e){n(this,e);this.editable=false;this.rank=t.Basic;this.extras=false;this.ignoreMax=false;this.agileArcher=G.AgileArcher.minLevel;this.arrowBarrage=G.ArrowBarrage.minLevel;this.arrowStorm=G.ArrowStorm.minLevel;this.arrowStream=G.ArrowStream.minLevel;this.bowSwing=G.BowSwing.minLevel;this.bronzeEagle=G.BronzeEagle.minLevel;this.conditioning=G.Conditioning.minLevel;this.eagleClaw=G.EagleClaw.minLevel;this.eagleGlide=G.EagleGlide.minLevel;this.eaglesMajesty=G.EaglesMajesty.minLevel;this.evasiveSalvo=G.EvasiveSalvo.minLevel;this.iceArrow=G.IceArrow.minLevel;this.precisionShooter=G.PrecisionShooter.minLevel;this.rapidShot=G.RapidShot.minLevel;this.screwdriverShot=G.ScrewdriverShot.minLevel;this.sharpEyes=G.SharpEyes.minLevel;this.snipe=G.Snipe.minLevel;this.improvedGliding=G.ImprovedGliding.minLevel;this.flameArrow=G.FlameArrow.minLevel;this.multiDriveShot=G.MultiDriveShot.minLevel;this.rangersFocus=G.RangersFocus.minLevel;this.hastersTeachings=G.HastersTeachings.minLevel;this.piercingArrow=G.PiercingArrow.minLevel;this.spiralArrow=G.SpiralArrow.minLevel;this.archersSecrets=G.ArchersSecrets.minLevel;this.greaterSharpEyes=G.GreaterSharpEyes.minLevel;this.onSkillChanged=r(this,"skillchanged",7)}e.prototype.componentWillLoad=function(){o(this,G,this.ignoreMax)};e.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,l(this,G)]})})};e.prototype.levelChanged=function(e,a){this[e.prop]=a;o(this,G,this.ignoreMax,e);this.host.forceUpdate();this.emitChangeEvent()};e.prototype.ignoreMaxChanged=function(){o(this,G,this.ignoreMax)};e.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(l(this,G))};e.prototype.render=function(){var e=this;return[s("ms-chart",{msClass:"archer",rank:this.rank,onRankChange:function(a){var n=a.detail;return e.rank=n}},p(this,F,this.editable,this.extras,t.Basic),p(this,M,this.editable,this.extras,t.Awakening))]};Object.defineProperty(e.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{ignoreMax:["ignoreMaxChanged"],extras:["emitChangeEvent"],rank:["emitChangeEvent"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return e}();e("ms_archer",j)}}});