import { FC } from 'react';
export interface ILanguageSelectorProps {
    currentLanguage: string;
    languages: Record<string, string>;
    onChangeLanguage: (lang: string) => void;
}
export declare const LanguageSelector: FC<ILanguageSelectorProps>;
