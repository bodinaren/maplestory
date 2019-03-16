import{h}from"../maplestory-skills.core.js";var ChartComponent=function(){function e(){}return e.prototype.componentDidLoad=function(){this.resize()},e.prototype.resize=function(){var e=this.host.parentNode;e.host&&(e=e.host);var t=e.offsetWidth/815;t<1?(this.host.style.transform="scale("+t+")",this.host.style.marginBottom="-"+(770-770*t)+"px",this.host.style.marginRight="-"+(815-815*t)+"px"):(this.host.style.transform=null,this.host.style.marginBottom=null,this.host.style.marginRight=null)},e.prototype.render=function(){return[this.renderStyles(),h("ms-footer",null),h("div",{class:"chart"},h("div",{class:"class-icon"},h("div",{class:"chart-class "+this.msClass},h("slot",null))))]},e.prototype.renderStyles=function(){return h("style",{type:"text/css"},"\n        ms-chart {\n          cursor: url("+this.publicPath+"assets/cursor.png) 5 8, auto;\n        }\n        ms-chart:active {\n          cursor: url("+this.publicPath+"assets/cursor-down.png) 5 8, auto;\n        }\n        :host, :host(:hover), ms-chart {\n          cursor: url("+this.publicPath+"assets/cursor.png) 5 8, auto;\n        }\n        :host(:active) {\n          cursor: url("+this.publicPath+"assets/cursor-down.png) 5 8, auto;\n        }\n        .chart {\n          background-image: url("+this.publicPath+"assets/charts/chart.jpg);\n        }\n        .class-icon {\n          background-image: url("+this.publicPath+"assets/charts/"+this.msClass+"-icon.png)\n        }\n        .chart-class {\n          background-image: url("+this.publicPath+"assets/charts/"+this.msClass+"-lines.png);\n        }\n      ")},Object.defineProperty(e,"is",{get:function(){return"ms-chart"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{host:{elementRef:!0},msClass:{type:String,attr:"ms-class"},publicPath:{context:"publicPath"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:resize",method:"resize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@import url(\"https://fonts.googleapis.com/css?family=Roboto:500\");:host{display:block;width:815px;height:770px;position:relative;-webkit-transform-origin:top left;transform-origin:top left;font-size:16px;color:#fff;font-family:Roboto,Arial}:host,:host(:active),_:-ms-lang(x){cursor:auto}.chart{position:absolute}.chart,.class-icon{width:100%;height:100%;background-repeat:no-repeat}.class-icon{background-position:calc(50% + 34px) calc(50% - 18px)}.chart>.class-icon>div{width:100%;height:100%;background-position:171px 88px;background-repeat:no-repeat}ms-footer{margin-top:-30px;-webkit-transition:margin-top .3s ease-in-out;transition:margin-top .3s ease-in-out}:host(:hover) ms-footer{margin-top:0}::slotted(ms-skill){position:absolute}::slotted(ms-skill[row=\"1\"]){top:4px}::slotted(ms-skill[row=\"2\"]){top:132px}::slotted(ms-skill[row=\"3\"]){top:260px}::slotted(ms-skill[row=\"4\"]){top:388px}::slotted(ms-skill[row=\"5\"]){top:516px}::slotted(ms-skill[row=\"6\"]){top:644px}::slotted(ms-skill[column=\"1\"]){left:138px}::slotted(ms-skill[column=\"2\"]){left:318px}::slotted(ms-skill[column=\"3\"]){left:498px}::slotted(ms-skill[column=\"4\"]){left:678px}"},enumerable:!0,configurable:!0}),e}(),FooterComponent=function(){function e(){}return e.prototype.render=function(){return h("a",{href:"https://bodinaren.github.io/maplestory-skills/",target:"_blank"},"MapleStory 2 Skill Charts")},Object.defineProperty(e,"is",{get:function(){return"ms-footer"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{font-family:Roboto;position:absolute;top:100%;right:0;text-align:center;font-size:.7em;padding:0 5px 2px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#1c1c1c;border-right:1px solid #121212;-webkit-box-shadow:inset -1px 0 #222;box-shadow:inset -1px 0 #222}:host,a{color:#fff}a{cursor:inherit}"},enumerable:!0,configurable:!0}),e}(),IconComponent=function(){function e(){this.sp=!1}return e.prototype.render=function(){return[h("img",{src:this.publicPath+"assets/skills/"+this.name+".png"}),this.sp&&h("img",{src:this.publicPath+"assets/sp.png"})]},Object.defineProperty(e,"is",{get:function(){return"ms-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{name:{type:String,attr:"name",reflectToAttr:!0},publicPath:{context:"publicPath"},sp:{type:Boolean,attr:"sp",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:43px;height:50px;-ms-flex-pack:center;justify-content:center}img:nth-of-type(2){position:absolute;bottom:1px;left:-4px}"},enumerable:!0,configurable:!0}),e}(),SkillComponent=function(){function e(){this.level=0,this.extras=!1,this.limitReached=!1,this.locked=!1,this.disabled=!0,this.loop=!1}return e.prototype.componentWillLoad=function(){this.level<this.skill.minLevel&&(this.level=this.skill.minLevel),this.level>this.skill.maxLevel&&(this.level=this.skill.maxLevel),this.column||(this.column=this.skill.column),this.row||(this.row=this.skill.row)},e.prototype.skillChanged=function(){this.onLevelChanged.emit(this.level)},e.prototype.hostData=function(){return{passive:this.skill.passive}},e.prototype.render=function(){var e=this;return[this.renderStyles(),h("div",{class:"skill",onMouseEnter:function(){return e.showOverlay()},onMouseLeave:function(){return e.hideOverlay()},onClick:function(){return e.emitSkillClick()}},h("ms-icon",{name:this.skill.attr,sp:this.skill.sp})),h("div",{class:"controls"},h("div",null,h("button",{class:{minus:!0,wrap:this.loop&&this.level===this.skill.minLevel},disabled:this.shouldDisableMinus(),onClick:function(){return e.minus()},onMouseEnter:function(){return e.showOverlay(-1)},onMouseLeave:function(){return e.hideOverlay()},hidden:this.level===this.skill.minLevel&&!this.loop},h("img",{src:this.publicPath+"assets/minus.png"}),h("img",{src:this.publicPath+"assets/minus-hover.png"}),h("img",{src:this.publicPath+"assets/minus-active.png"}),h("img",{src:this.publicPath+"assets/minus-wrap.png"}),h("img",{src:this.publicPath+"assets/minus-wrap-hover.png"}),h("img",{src:this.publicPath+"assets/minus-wrap-active.png"}))),h("span",null,this.level,"/",this.skill.maxLevel),h("div",null,h("button",{class:{plus:!0,wrap:this.loop&&(this.level===this.skill.maxLevel||this.limitReached)},disabled:this.shouldDisablePlus(),onClick:function(){return e.plus()},onMouseEnter:function(){return e.showOverlay(1)},onMouseLeave:function(){return e.hideOverlay()},hidden:this.level===this.skill.maxLevel&&!this.loop},h("img",{src:this.publicPath+"assets/plus.png"}),h("img",{src:this.publicPath+"assets/plus-hover.png"}),h("img",{src:this.publicPath+"assets/plus-active.png"}),h("img",{src:this.publicPath+"assets/plus-wrap.png"}),h("img",{src:this.publicPath+"assets/plus-wrap-hover.png"}),h("img",{src:this.publicPath+"assets/plus-wrap-active.png"})))),h("ms-skill-overlay",{hidden:!this.overlayLevel,skill:this.skill,extras:this.extras,level:this.overlayLevel||1,class:this.skill.prop})]},e.prototype.renderStyles=function(){return h("style",{type:"text/css"},"\n        ms-skill .controls { background-image: url("+this.publicPath+"assets/skill-bar.png); }\n        :host .controls { background-image: url("+this.publicPath+"assets/skill-bar.png); }\n\n        ms-skill:not([passive]) .skill { background-image: url("+this.publicPath+"assets/skill-shield.png); }\n        :host(:not([passive])) .skill { background-image: url("+this.publicPath+"assets/skill-shield.png); }\n\n        ms-skill[passive] .skill { background-image: url("+this.publicPath+"assets/skill-shield-passive.png); }\n        :host([passive]) .skill { background-image: url("+this.publicPath+"assets/skill-shield-passive.png); }\n\n        ms-skill[locked] .skill:after { background-image: url("+this.publicPath+"assets/skill-locked.png); }\n        :host([locked]) .skill:after { background-image: url("+this.publicPath+"assets/skill-locked.png); }\n\n        ms-skill[required]:after { background-image: url("+this.publicPath+"assets/skill-overlay.png); }\n        :host([required]):after { background-image: url("+this.publicPath+"assets/skill-overlay.png); }\n      ")},e.prototype.shouldDisableMinus=function(){return this.disabled||this.skill.minLevel===this.skill.maxLevel||!this.loop&&this.level===this.skill.minLevel||this.loop&&this.limitReached&&this.level===this.skill.minLevel},e.prototype.shouldDisablePlus=function(){return this.disabled||this.skill.minLevel===this.skill.maxLevel||this.limitReached&&(!this.loop||this.level===this.skill.minLevel)},e.prototype.showOverlay=function(e){void 0===e&&(e=0),this.overlayLevel=this.level+e,0===this.overlayLevel?this.overlayLevel=1:this.overlayLevel<0?this.overlayLevel=this.loop?this.skill.maxLevel:1:this.overlayLevel>this.skill.maxLevel&&(this.overlayLevel=this.loop?1:this.skill.maxLevel)},e.prototype.hideOverlay=function(){this.overlayLevel=0},e.prototype.emitSkillClick=function(){this.onSkillClicked.emit(this.skill)},e.prototype.plus=function(){(this.level<this.skill.maxLevel||this.loop)&&(this.level++,(this.level>this.skill.maxLevel||this.limitReached&&this.level>this.skill.minLevel)&&(this.level=this.skill.minLevel),this.skillChanged()),this.showOverlay(1)},e.prototype.minus=function(){(this.level>this.skill.minLevel||this.loop)&&(this.level--,this.level<this.skill.minLevel&&(this.level=this.skill.maxLevel),this.skillChanged()),this.showOverlay(-1)},Object.defineProperty(e,"is",{get:function(){return"ms-skill"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{column:{type:Number,attr:"column",reflectToAttr:!0,mutable:!0},disabled:{type:Boolean,attr:"disabled"},extras:{type:Boolean,attr:"extras"},level:{type:Number,attr:"level",reflectToAttr:!0,mutable:!0,watchCallbacks:["skillChanged"]},limitReached:{type:Boolean,attr:"limit-reached"},locked:{type:Boolean,attr:"locked",reflectToAttr:!0},loop:{type:Boolean,attr:"loop"},overlayLevel:{state:!0},publicPath:{context:"publicPath"},required:{type:String,attr:"required",reflectToAttr:!0},row:{type:Number,attr:"row",reflectToAttr:!0,mutable:!0},skill:{type:"Any",attr:"skill"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"levelchanged",method:"onLevelChanged",bubbles:!0,cancelable:!0,composed:!0},{name:"skillclicked",method:"onSkillClicked",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{height:115px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.skill,:host{display:block;width:72px}.skill{height:84px;background-repeat:no-repeat}.skill>ms-icon{display:block;position:absolute;left:14px;top:17px}.controls{display:-ms-flexbox;display:flex;width:109px;height:36px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-left:-18.5px;margin-top:-4px}.controls span{text-align:center;-ms-flex-positive:1;flex-grow:1;font-size:.9em}.controls div{margin-top:4px;width:30px}.controls div,_:-ms-lang(x){margin-top:0}:host([locked]) .skill:after{content:\"\"}:host([locked]) .skill:after,:host([required]):after{position:absolute;width:52px;height:61px;top:11px;left:10px;pointer-events:none}:host([required]):after{content:attr(required);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#ff0;font-size:.8em}ms-skill-overlay{position:absolute;margin:0 20px}:host([column=\"1\"]) ms-skill-overlay,:host([column=\"2\"]) ms-skill-overlay{left:100%}:host([column=\"3\"]) ms-skill-overlay,:host([column=\"4\"]) ms-skill-overlay{right:100%}:host([row=\"1\"]) ms-skill-overlay,:host([row=\"2\"]) ms-skill-overlay,:host([row=\"3\"]) ms-skill-overlay{top:0}:host([row=\"4\"]) ms-skill-overlay,:host([row=\"5\"]) ms-skill-overlay,:host([row=\"6\"]) ms-skill-overlay{bottom:0}button{width:30px;height:33px;background:none;border:none;padding:0;outline:0;cursor:inherit}.minus img,.plus img,_:-ms-lang(x){cursor:pointer}button:active{cursor:inherit}button img{display:none}button:not([disabled]):not([hidden]){display:inline-block}button.wrap:not([disabled]):active img:nth-child(6),button.wrap:not([disabled]):not(:active):hover img:nth-child(5),button.wrap:not([disabled]):not(:active):not(:hover) img:nth-child(4),button:not(.wrap):not([disabled]):active img:nth-child(3),button:not(.wrap):not([disabled]):not(:active):hover img:nth-child(2),button:not(.wrap):not([disabled]):not(:active):not(:hover) img:first-child{display:inline}.minus{left:-1px}.plus{right:0}"},enumerable:!0,configurable:!0}),e}(),descriptionRegex=/\[(.*?)\]/,SkillOverlayComponent=function(){function e(){this.level=0,this.extras=!1}return e.prototype.componentWillLoad=function(){this.refreshData()},e.prototype.componentWillUpdate=function(){this.refreshData()},e.prototype.refreshData=function(){var e=this;this.setRequirements(),this.setSpirit(),this.setCooldown(),this.description=this.parseDescription(this.skill),this.extraDescriptions=void 0,this.extras&&this.skill.extras&&(this.extraDescriptions=this.skill.extras.map(function(t){return e.parseDescription(t)}))},e.prototype.render=function(){return h("div",null,h("h1",{class:this.skill.element,style:this.skill.element&&{"background-image":"url("+this.publicPath+"assets/"+this.skill.element.toLowerCase()+".jpg)"}},this.skill.name,this.skill.element&&h("span",{class:"element"},this.skill.element)),h("div",{class:"content"},h("div",null,h("div",{class:"content-header"},h("div",{class:"icon"},this.skill.attr&&h("ms-icon",{slot:"icon",name:this.skill.attr,sp:this.skill.sp})||h("slot",{name:"icon"})),h("div",{class:"infoAndLevel"},h("div",{class:"shortInfo"},this.spirit&&"Spirit "+this.spirit,this.spirit&&this.cooldown&&" / ",this.cooldown&&"Cooldown: "+this.cooldown+" Sec"),h("div",{class:"level"},"Level ",this.level||1,this.level===this.skill.maxLevel&&" | MAX"))),this.requirements&&this.requirements.length>0&&h("div",{class:"requirements"},h("p",null,"[Requirements]"),this.requirements.map(function(e){return h("p",null,e)}))),h("div",null,h("p",null,this.skill.passive?"Passive":"Active"),this.skill.attackType&&h("p",null,this.skill.attackType),this.skill.weaponRequired&&h("p",null,"Weapon Required: ",this.skill.weaponRequired)),h("div",{class:"description"},this.description&&h("p",{innerHTML:this.description})||h("p",null,h("slot",{name:"description"}))),this.extraDescriptions&&this.extraDescriptions.map(function(e){return h("div",{class:"description extras"},h("p",{innerHTML:e}))})))},e.prototype.setRequirements=function(){var e=[];this.skill.levelRequirement&&this.skill.levelRequirement[this.level]>0&&e.push("Level "+this.skill.levelRequirement[this.level]+"+"),this.skill.skillRequirements&&Array.prototype.push.apply(e,this.skill.skillRequirements.map(function(e){return e.skill.name+" [Level "+e.level+"+]"})),this.requirements=e},e.prototype.setSpirit=function(){Array.isArray(this.skill.spirit)?this.spirit=this.skill.spirit[this.level]:this.spirit||(this.spirit=this.skill.spirit)},e.prototype.setCooldown=function(){Array.isArray(this.skill.cooldown)?this.cooldown=this.skill.cooldown[this.level]:this.cooldown||(this.cooldown=this.skill.cooldown)},e.prototype.parseDescription=function(e){for(var t,s=e.description;t=descriptionRegex.exec(s);){var i=e.values&&e.values[t[1]];i||(i=e[t[1]]),s=s.replace(t[0],i[this.level].toString())}return s},Object.defineProperty(e,"is",{get:function(){return"ms-skill-overlay"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{extras:{type:Boolean,attr:"extras"},level:{type:Number,attr:"level",reflectToAttr:!0},publicPath:{context:"publicPath"},skill:{type:"Any",attr:"skill"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{color:#fff;z-index:100;width:350px;background-color:rgba(0,0,0,.9);border:1px solid #2c2c2c;pointer-events:none;font-size:.9em;border-radius:3px;overflow:hidden;-webkit-box-shadow:0 0 3px 1px #000;box-shadow:0 0 3px 1px #000}h1{text-transform:none;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:1.3em;margin:0;padding:.5em .7em;background:#1f1f1f;font-weight:400;text-shadow:1px 1px 1px #000;background-size:cover!important}h1.Dark{background:-webkit-gradient(linear,left top,right top,from(#1f0a1b),color-stop(60%,#1f0a1b),to(#3d1620));background:linear-gradient(90deg,#1f0a1b 0,#1f0a1b 60%,#3d1620)}h1.Electric{background:-webkit-gradient(linear,left top,right top,from(#0a262a),color-stop(60%,#0a262a),to(#135764));background:linear-gradient(90deg,#0a262a 0,#0a262a 60%,#135764)}h1.Fire{background:-webkit-gradient(linear,left top,right top,from(#3a0803),color-stop(60%,#3a0803),to(#6e2a11));background:linear-gradient(90deg,#3a0803 0,#3a0803 60%,#6e2a11)}h1.Holy{background:-webkit-gradient(linear,left top,right top,from(#3c1e04),color-stop(60%,#3c1e04),to(#7c4d01));background:linear-gradient(90deg,#3c1e04 0,#3c1e04 60%,#7c4d01)}h1.Ice{background:-webkit-gradient(linear,left top,right top,from(#021835),color-stop(60%,#021835),to(#153772));background:linear-gradient(90deg,#021835 0,#021835 60%,#153772)}h1.Toxic{background:-webkit-gradient(linear,left top,right top,from(#20142c),color-stop(60%,#20142c),to(#3e1652));background:linear-gradient(90deg,#20142c 0,#20142c 60%,#3e1652)}h1 .element{font-size:.8em}.content{padding:10px 0 5px}.content>div,::slotted(:not(:empty)){display:block;clear:both;padding:5px 15px 5px}.content>div:not(:first-of-type){border-top:1px solid #212121}.content>div:not(:last-child){border-bottom:1px solid #000}::slotted(:not(:empty)){border-top:1px solid #212121}.content-header{display:-ms-flexbox;display:flex;margin-bottom:15px}.icon{margin-right:15px;width:44px;height:50px;background-color:#434343;position:relative;padding:2px 5px;border-radius:3px}.icon:before{content:\" \";position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px;z-index:-1;background:-webkit-gradient(linear,left top,left bottom,from(#1b1b1b),to(#343434));background:linear-gradient(180deg,#1b1b1b 0,#343434);border-radius:3px}.infoAndLevel{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:5px}.level{font-size:1.5em}.requirements{clear:both}.requirements p:not(:first-child){color:#ecc400}.requirements p.fail{color:#ce3434}::slotted(*),p{color:#999;margin:1px 0;line-height:1.5em}.description span{color:#09c}.extras{font-style:italic}"},enumerable:!0,configurable:!0}),e}();export{ChartComponent as MsChart,FooterComponent as MsFooter,IconComponent as MsIcon,SkillComponent as MsSkill,SkillOverlayComponent as MsSkillOverlay};