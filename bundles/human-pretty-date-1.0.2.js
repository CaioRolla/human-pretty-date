var humanPrettyDate=function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([function(e,r,n){"use strict";var t,o,a;Object.defineProperty(r,"__esModule",{value:!0}),function(e){e.EN="en",e.PT_BR="pt_BR"}(t=r.Locale||(r.Locale={})),function(e){e.YEAR="year",e.MONTH="month",e.WEEK="week",e.DAY="day",e.TOMORROW="tomorrow",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(o=r.Period||(r.Period={})),r.translatedPeriod=function(e,r,n){switch(r){case t.EN:switch(e){case o.YEAR:return n?"years":"year";case o.MONTH:return n?"month":"months";case o.WEEK:return n?"week":"weeks";case o.DAY:return n?"day":"days";case o.TOMORROW:return"tomorrow";case o.HOUR:return n?"hours":"hour";case o.MINUTE:return n?"minutes":"minute";case o.SECOND:return n?"seconds":"second"}case t.PT_BR:switch(e){case o.YEAR:return n?"anos":"ano";case o.MONTH:return n?"meses":"mês";case o.WEEK:return n?"semanas":"semana";case o.DAY:return n?"dias":"days";case o.TOMORROW:return"amanhã";case o.HOUR:return n?"horas":"hora";case o.MINUTE:return n?"minutos":"minuto";case o.SECOND:return n?"segundos":"segundo"}}return""},function(e){e.FROM_NOW="from now",e.TOMORROW="tomorrow",e.JUST_NOW="just now",e.AGO="ago",e.YESTERDAY="yesterday"}(a=r.Tense||(r.Tense={})),r.translatedTense=function(e,r){switch(r){case t.EN:switch(e){case a.FROM_NOW:return"from now";case a.TOMORROW:return"tomorrow";case a.JUST_NOW:return"just now";case a.AGO:return"ago";case a.YESTERDAY:return"yesterday"}case t.PT_BR:switch(e){case a.FROM_NOW:return"em";case a.TOMORROW:return"amanhã";case a.JUST_NOW:return"agora";case a.AGO:return"atrás";case a.YESTERDAY:return"ontem"}}return""}},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(0);!function(e){for(var n in e)r.hasOwnProperty(n)||(r[n]=e[n])}(n(0));function o(e,r,n){return function(o,a){var s=Math.floor(o/e),u=s>1;switch(a){case t.Locale.EN:return function(e,r,n,o){return e+" "+t.translatedPeriod(r,t.Locale.EN,o)+" "+t.translatedTense(n,t.Locale.EN)}(s,r,n,u);case t.Locale.PT_BR:return function(e,r,n,o){return n===t.Tense.FROM_NOW?t.translatedTense(n,t.Locale.PT_BR)+" "+e+" "+t.translatedPeriod(r,t.Locale.PT_BR,o):e+" "+t.translatedPeriod(r,t.Locale.PT_BR,o)+" "+t.translatedTense(n,t.Locale.PT_BR)}(s,r,n,u)}}}var a=[{threshold:-31535999,handler:o(-31536e3,t.Period.YEAR,t.Tense.FROM_NOW)},{threshold:-2591999,handler:o(-2592e3,t.Period.MONTH,t.Tense.FROM_NOW)},{threshold:-604799,handler:o(-604800,t.Period.WEEK,t.Tense.FROM_NOW)},{threshold:-172799,handler:o(-86400,t.Period.DAY,t.Tense.FROM_NOW)},{threshold:-86399,handler:function(e,r){return t.translatedTense(t.Tense.TOMORROW,r)}},{threshold:-3599,handler:o(-3600,t.Period.HOUR,t.Tense.FROM_NOW)},{threshold:-59,handler:o(-60,t.Period.MINUTE,t.Tense.FROM_NOW)},{threshold:-.9999,handler:o(-1,t.Period.SECOND,t.Tense.FROM_NOW)},{threshold:1,handler:function(e,r){return t.translatedTense(t.Tense.JUST_NOW,r)}},{threshold:60,handler:o(1,t.Period.SECOND,t.Tense.AGO)},{threshold:3600,handler:o(60,t.Period.MINUTE,t.Tense.AGO)},{threshold:86400,handler:o(3600,t.Period.HOUR,t.Tense.AGO)},{threshold:172800,handler:function(e,r){return t.translatedTense(t.Tense.YESTERDAY,r)}},{threshold:604800,handler:o(86400,t.Period.DAY,t.Tense.AGO)},{threshold:2592e3,handler:o(604800,t.Period.WEEK,t.Tense.AGO)},{threshold:31536e3,handler:o(2592e3,t.Period.MONTH,t.Tense.AGO)},{threshold:1/0,handler:o(31536e3,t.Period.YEAR,t.Tense.AGO)}];r.formatDate=function(e,r){for(var n=((new Date).getTime()-e.getTime())/1e3,o=0;o<a.length;o++)if(n<a[o].threshold)return a[o].handler(n,r&&r.locale&&Object.values(t.Locale).includes(r.locale)?r.locale:t.Locale.EN);throw new Error("exhausted all formatter options, none found")}}]);
//# sourceMappingURL=human-pretty-date-1.0.2.js.map