System.register(["./p-82ba09a9.system.js","./p-29a24684.system.js"],function(t){"use strict";var e,n,r,s,i,o;return{setters:[function(t){e=t.e,n=t.d,r=t.h},function(t){s=t.a,i=t.c,o=t.b}],execute:function(){var a=function(){function t(t){e(this,t),this.points=0}return t.prototype.componentDidLoad=function(){var t=this,e=document.getElementById(this.editor);e||(e=document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard")),e.componentOnReady().then(function(e){t._editor=e,t.points=t._editor.rank===s.Awakening?i-1:o-4,t._editor.addEventListener("skillchanged",function(e){t.updatePointsLeft(e.detail)})})},t.prototype.updatePointsLeft=function(t){var e=this._editor.rank;this.points=(e===s.Awakening?i:o)-t.skills.reduce(function(t,n){return n.rank===e?t+n.level:t},0)},t.prototype.render=function(){return this.points},t}();t("ms_extra_counter",a);var u=function(){function t(t){e(this,t),this._skills={rank:1,skills:[]}}return t.prototype.componentDidLoad=function(){var t=this,e=document.getElementById(this.editor);e||(e=document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard")),this._tagName=e.tagName.toLowerCase(),e.componentOnReady().then(function(e){t._editor=e,t._editor.addEventListener("skillchanged",function(e){t._skills=e.detail})})},t.prototype.render=function(){if(this._editor)return n(r,null,n("slot",{name:"first"}),n("slot",null),this.getTag(),n("slot",{name:"last"}))},t.prototype.getTag=function(){var t="";this._editor.extras&&(t=" extras");var e=this.getProperties(this._skills);return e&&(e=" "+e),"<"+this._tagName+' rank="'+this._editor.rank+t+e+"></"+this._tagName+">"},t.prototype.getProperties=function(t){var e=t.skills.filter(function(t){return t.level>t.minLevel}).map(function(t){return t.attr+'="'+t.level+'"'}).join(" ");return t.other&&(e+=" "+t.other.map(function(t){return t.attr+'="'+t.value+'"'})),e},t}();t("ms_extra_outlet",u)}}});