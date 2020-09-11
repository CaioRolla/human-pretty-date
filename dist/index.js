"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
__export(require("./types"));
var enHandler = function (number, period, tense, pluralized) {
    return number + " " + types_1.translatedPeriod(period, types_1.Locale.EN, pluralized) + " " + types_1.translatedTense(tense, types_1.Locale.EN);
};
var ptBrHandler = function (number, period, tense, pluralized) {
    if (tense === types_1.Tense.FROM_NOW)
        return types_1.translatedTense(tense, types_1.Locale.PT_BR) + " " + number + " " + types_1.translatedPeriod(period, types_1.Locale.PT_BR, pluralized);
    return number + " " + types_1.translatedPeriod(period, types_1.Locale.PT_BR, pluralized) + " " + types_1.translatedTense(tense, types_1.Locale.PT_BR);
};
function createHandler(divisor, period, tense) {
    return function (diff, locale) {
        var n = Math.floor(diff / divisor);
        var pluralized = n > 1;
        switch (locale) {
            case types_1.Locale.EN:
                return enHandler(n, period, tense, pluralized);
            case types_1.Locale.PT_BR:
                return ptBrHandler(n, period, tense, pluralized);
        }
    };
}
var formatters = [
    { threshold: -31535999, handler: createHandler(-31536000, types_1.Period.YEAR, types_1.Tense.FROM_NOW) },
    { threshold: -2591999, handler: createHandler(-2592000, types_1.Period.MONTH, types_1.Tense.FROM_NOW) },
    { threshold: -604799, handler: createHandler(-604800, types_1.Period.WEEK, types_1.Tense.FROM_NOW) },
    { threshold: -172799, handler: createHandler(-86400, types_1.Period.DAY, types_1.Tense.FROM_NOW) },
    { threshold: -86399, handler: function (diff, locale) { return types_1.translatedTense(types_1.Tense.TOMORROW, locale); } },
    { threshold: -3599, handler: createHandler(-3600, types_1.Period.HOUR, types_1.Tense.FROM_NOW) },
    { threshold: -59, handler: createHandler(-60, types_1.Period.MINUTE, types_1.Tense.FROM_NOW) },
    { threshold: -0.9999, handler: createHandler(-1, types_1.Period.SECOND, types_1.Tense.FROM_NOW) },
    { threshold: 1, handler: function (diff, locale) { return types_1.translatedTense(types_1.Tense.JUST_NOW, locale); } },
    { threshold: 60, handler: createHandler(1, types_1.Period.SECOND, types_1.Tense.AGO) },
    { threshold: 3600, handler: createHandler(60, types_1.Period.MINUTE, types_1.Tense.AGO) },
    { threshold: 86400, handler: createHandler(3600, types_1.Period.HOUR, types_1.Tense.AGO) },
    { threshold: 172800, handler: function (diff, locale) { return types_1.translatedTense(types_1.Tense.YESTERDAY, locale); } },
    { threshold: 604800, handler: createHandler(86400, types_1.Period.DAY, types_1.Tense.AGO) },
    { threshold: 2592000, handler: createHandler(604800, types_1.Period.WEEK, types_1.Tense.AGO) },
    { threshold: 31536000, handler: createHandler(2592000, types_1.Period.MONTH, types_1.Tense.AGO) },
    { threshold: Infinity, handler: createHandler(31536000, types_1.Period.YEAR, types_1.Tense.AGO) }
];
exports.formatDate = function (date, config) {
    var diff = (((new Date()).getTime() - date.getTime()) / 1000);
    for (var i = 0; i < formatters.length; i++) {
        if (diff < formatters[i].threshold) {
            return formatters[i].handler(diff, config && config.locale && Object.values(types_1.Locale).includes(config.locale) ? config.locale : types_1.Locale.EN);
        }
    }
    throw new Error("exhausted all formatter options, none found"); //should never be reached
};
