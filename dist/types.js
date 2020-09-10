"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Locale;
(function (Locale) {
    Locale["EN"] = "en";
    Locale["PT_BR"] = "pt_BR";
})(Locale = exports.Locale || (exports.Locale = {}));
var Period;
(function (Period) {
    Period["YEAR"] = "year";
    Period["MONTH"] = "month";
    Period["WEEK"] = "week";
    Period["DAY"] = "day";
    Period["TOMORROW"] = "tomorrow";
    Period["HOUR"] = "hour";
    Period["MINUTE"] = "minute";
    Period["SECOND"] = "second";
})(Period = exports.Period || (exports.Period = {}));
exports.translatedPeriod = function (period, locale, pluralized) {
    switch (locale) {
        case Locale.EN:
            switch (period) {
                case Period.YEAR:
                    return pluralized ? 'years' : 'year';
                case Period.MONTH:
                    return pluralized ? 'month' : 'months';
                case Period.WEEK:
                    return pluralized ? 'week' : 'weeks';
                case Period.DAY:
                    return pluralized ? 'day' : 'days';
                case Period.TOMORROW:
                    return pluralized ? 'tomorrow' : 'tomorrow';
                case Period.HOUR:
                    return pluralized ? 'hours' : 'hour';
                case Period.MINUTE:
                    return pluralized ? 'minutes' : 'minute';
                case Period.SECOND:
                    return pluralized ? 'seconds' : 'second';
            }
        case Locale.PT_BR:
            switch (period) {
                case Period.YEAR:
                    return pluralized ? 'anos' : 'ano';
                case Period.MONTH:
                    return pluralized ? 'meses' : 'mês';
                case Period.WEEK:
                    return pluralized ? 'semanas' : 'semana';
                case Period.DAY:
                    return pluralized ? 'dias' : 'days';
                case Period.TOMORROW:
                    return pluralized ? 'amanhã' : 'amanhã';
                case Period.HOUR:
                    return pluralized ? 'horas' : 'hora';
                case Period.MINUTE:
                    return pluralized ? 'minutos' : 'minuto';
                case Period.SECOND:
                    return pluralized ? 'segundos' : 'segundo';
            }
    }
    // Typescript compile temporary fix
    return '';
};
var Tense;
(function (Tense) {
    Tense["FROM_NOW"] = "from now";
    Tense["TOMORROW"] = "tomorrow";
    Tense["JUST_NOW"] = "just now";
    Tense["AGO"] = "ago";
    Tense["YESTERDAY"] = "yesterday";
})(Tense = exports.Tense || (exports.Tense = {}));
exports.translatedTense = function (tense, locale) {
    switch (locale) {
        case Locale.EN:
            switch (tense) {
                case Tense.FROM_NOW:
                    return 'from now';
                case Tense.TOMORROW:
                    return 'tomorrow';
                case Tense.JUST_NOW:
                    return 'just now';
                case Tense.AGO:
                    return 'ago';
                case Tense.YESTERDAY:
                    return 'yesterday';
            }
        case Locale.PT_BR:
            switch (tense) {
                case Tense.FROM_NOW:
                    return 'em';
                case Tense.TOMORROW:
                    return 'amanhã';
                case Tense.JUST_NOW:
                    return 'agora';
                case Tense.AGO:
                    return 'atrás';
                case Tense.YESTERDAY:
                    return 'ontem';
            }
    }
    // Typescript compile temporary fix
    return '';
};
