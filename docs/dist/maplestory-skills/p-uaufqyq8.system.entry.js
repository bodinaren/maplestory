System.register(["./p-a868d0a0.system.js","./p-832ce77e.system.js"],function(t,e){"use strict";var n,r,i,s,o,a;return{setters:[function(t){n=t.e;r=t.d;i=t.h},function(t){s=t.a;o=t.c;a=t.b}],execute:function(){var e=function(){function t(t){n(this,t);this.points=0}t.prototype.componentDidLoad=function(){var t=this;var e=document.getElementById(this.editor);if(!e){e=document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard")}e.componentOnReady().then(function(e){t._editor=e;var n=t._editor.rank;t.points=n===s.Awakening?o-1:a-4;t._editor.addEventListener("skillchanged",function(e){t.updatePointsLeft(e.detail)})})};t.prototype.updatePointsLeft=function(t){var e=this._editor.rank;var n=e===s.Awakening?o:a;this.points=n-t.skills.reduce(function(t,n){if(n.rank===e){return t+n.level}else{return t}},0)};t.prototype.render=function(){return this.points};return t}();t("ms_extra_counter",e);var u=function(){function t(t){n(this,t);this._skills={rank:1,skills:[]}}t.prototype.componentDidLoad=function(){var t=this;var e=document.getElementById(this.editor);if(!e){e=document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard")}this._tagName=e.tagName.toLowerCase();e.componentOnReady().then(function(e){t._editor=e;t._editor.addEventListener("skillchanged",function(e){t._skills=e.detail})})};t.prototype.render=function(){if(!this._editor)return;return r(i,null,r("slot",{name:"first"}),r("slot",null),this.getTag(),r("slot",{name:"last"}))};t.prototype.getTag=function(){var t="";if(this._editor.extras)t=" extras";var e=this.getProperties(this._skills);if(e)e=" "+e;return"<"+this._tagName+' rank="'+this._editor.rank+t+e+"></"+this._tagName+">"};t.prototype.getProperties=function(t){var e=t.skills.filter(function(t){return t.level>t.minLevel}).map(function(t){return t.attr+'="'+t.level+'"'}).join(" ");if(t.other){e+=" "+t.other.map(function(t){return t.attr+'="'+t.value+'"'})}return e};return t}();t("ms_extra_outlet",u)}}});