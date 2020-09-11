import { FormatDateConfig, Locale, Period, Tense, translatedPeriod, translatedTense } from './types';
export * from './types';

const enHandler = (number: number, period: Period, tense: Tense, pluralized: boolean): string => {
	return `${number} ${translatedPeriod(period, Locale.EN, pluralized)} ${translatedTense(tense, Locale.EN)}`
}

const ptBrHandler = (number: number, period: Period, tense: Tense, pluralized: boolean): string => {
	if (tense === Tense.FROM_NOW)
		return `${translatedTense(tense, Locale.PT_BR)} ${number} ${translatedPeriod(period, Locale.PT_BR, pluralized)}`;

	return `${number} ${translatedPeriod(period, Locale.PT_BR, pluralized)} ${translatedTense(tense, Locale.PT_BR)}`;
}

function createHandler(divisor: number, period: Period, tense: Tense) {
	return function (diff: number, locale: Locale) {
		const n = Math.floor(diff / divisor);
		const pluralized = n > 1;

		switch (locale) {
			case Locale.EN:
				return enHandler(n, period, tense, pluralized);
			case Locale.PT_BR:
				return ptBrHandler(n, period, tense, pluralized);
		}

	}
}

const formatters = [
	{ threshold: -31535999, handler: createHandler(-31536000, Period.YEAR, Tense.FROM_NOW) },
	{ threshold: -2591999, handler: createHandler(-2592000, Period.MONTH, Tense.FROM_NOW) },
	{ threshold: -604799, handler: createHandler(-604800, Period.WEEK, Tense.FROM_NOW) },
	{ threshold: -172799, handler: createHandler(-86400, Period.DAY, Tense.FROM_NOW) },
	{ threshold: -86399, handler: (diff: number, locale: Locale) => translatedTense(Tense.TOMORROW, locale) },
	{ threshold: -3599, handler: createHandler(-3600, Period.HOUR, Tense.FROM_NOW) },
	{ threshold: -59, handler: createHandler(-60, Period.MINUTE, Tense.FROM_NOW) },
	{ threshold: -0.9999, handler: createHandler(-1, Period.SECOND, Tense.FROM_NOW) },
	{ threshold: 1, handler: (diff: number, locale: Locale) => translatedTense(Tense.JUST_NOW, locale) },
	{ threshold: 60, handler: createHandler(1, Period.SECOND, Tense.AGO) },
	{ threshold: 3600, handler: createHandler(60, Period.MINUTE, Tense.AGO) },
	{ threshold: 86400, handler: createHandler(3600, Period.HOUR, Tense.AGO) },
	{ threshold: 172800, handler: (diff: number, locale: Locale) => translatedTense(Tense.YESTERDAY, locale) },
	{ threshold: 604800, handler: createHandler(86400, Period.DAY, Tense.AGO) },
	{ threshold: 2592000, handler: createHandler(604800, Period.WEEK, Tense.AGO) },
	{ threshold: 31536000, handler: createHandler(2592000, Period.MONTH, Tense.AGO) },
	{ threshold: Infinity, handler: createHandler(31536000, Period.YEAR, Tense.AGO) }
];

export const formatDate = (date: Date, config?: Partial<FormatDateConfig> | undefined) => {
	var diff = (((new Date()).getTime() - date.getTime()) / 1000);
	for (var i = 0; i < formatters.length; i++) {
		if (diff < formatters[i].threshold) {
			return formatters[i].handler(diff, config && config.locale && Object.values(Locale).includes(config.locale) ? config.locale : Locale.EN);
		}
	}
	throw new Error("exhausted all formatter options, none found"); //should never be reached
}
