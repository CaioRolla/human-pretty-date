export enum Locale {
  EN = 'en',
  PT_BR = 'pt_BR'
}

export enum Period {
  YEAR = 'year',
  MONTH = 'month',
  WEEK = 'week',
  DAY = 'day',
  TOMORROW = 'tomorrow',
  HOUR = 'hour',
  MINUTE = 'minute',
  SECOND = 'second'
}

export const translatedPeriod = (period: Period, locale: Locale, pluralized: boolean): string => {

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

}

export enum Tense {
  FROM_NOW = 'from now',
  TOMORROW = 'tomorrow',
  JUST_NOW = 'just now',
  AGO = 'ago',
  YESTERDAY = 'yesterday'
}

export const translatedTense = (tense: Tense, locale: Locale): string => {

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

}

export interface FormatDateConfig {
  locale: Locale;
}