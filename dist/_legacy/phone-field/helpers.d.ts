/** Маска для номера телефона */
export declare const applyMask: (value: string, countryCode: string) => string;
/** Блокировка ввода при достижении максимально возможной длины номера телефона */
export declare const getMaxLength: (countryCode: string) => 16 | 10;
/** Для отделения кода страны от номера */
export declare const stripDialCode: (value: string, dialCode: string) => string;
