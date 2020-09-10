export declare enum Locale {
    EN = "en",
    PT_BR = "pt_BR"
}
export declare enum Period {
    YEAR = "year",
    MONTH = "month",
    WEEK = "week",
    DAY = "day",
    TOMORROW = "tomorrow",
    HOUR = "hour",
    MINUTE = "minute",
    SECOND = "second"
}
export declare const translatedPeriod: (period: Period, locale: Locale, pluralized: boolean) => string;
export declare enum Tense {
    FROM_NOW = "from now",
    TOMORROW = "tomorrow",
    JUST_NOW = "just now",
    AGO = "ago",
    YESTERDAY = "yesterday"
}
export declare const translatedTense: (tense: Tense, locale: Locale) => string;
export interface FormatDateConfig {
    locale: Locale;
}
