import { TFunction } from 'i18next';
/** Мапа для соответствия ISO-кодов стран и их телефонных кодов */
export declare const COUNTRIES: (countriesT: TFunction<"uiKit", "PhoneField.countries">) => Record<string, {
    dialCode: string;
    name: string;
}>;
