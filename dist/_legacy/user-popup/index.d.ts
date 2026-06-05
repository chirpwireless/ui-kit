import { FC } from 'react';
import { ILanguageSelectorProps } from '../language-selector';
interface UserPopupProps {
    languageSelectorProps: ILanguageSelectorProps;
    onLogout?: () => void;
    onWalletConnect?: () => void;
    onChangeMode?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    isDarkMode?: boolean;
    name?: string;
    userNameForAvatar?: string;
    avatarUrl?: string;
}
export declare const UserPopup: FC<UserPopupProps>;
export {};
