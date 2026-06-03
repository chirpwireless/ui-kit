import './styles/style.scss';

// --- v1.0 public API ---

// Theme
export {
    getTheme,
    lightTheme as kiloLightTheme,
    darkTheme as kiloDarkTheme,
    chirpLightTheme,
    chirpDarkTheme,
    themeTemplate,
    themeMixins,
    createComponents,
    createBarTheme,
} from './theme';

export type {
    GetThemeOptions,
    ThemeVariant,
    PaletteNeutral,
    PalettePrimaryColors,
    PaletteBorders,
    PaletteAlerts,
    PaletteFraming,
    PaletteAdditionalColors,
    PaletteWidgets,
} from './theme';

// Shell components
export { Sidebar } from './components/Sidebar';

export type { SidebarItem, SidebarProps, SidebarLinkComponent, SidebarLinkComponentProps } from './components/Sidebar';

export { SidebarLogo, SidebarToggle, SidebarDefaultLink } from './components/Sidebar';

export { UserMenu } from './components/UserMenu';

export type { UserMenuProps, UserMenuUser, UserMenuItem, UserMenuOrganization } from './components/UserMenu';

export { Header } from './components/Header';

export type { HeaderProps } from './components/Header';

export { BaseLayout } from './layouts';

export type { BaseLayoutProps } from './layouts';

// Hooks
export { useLayout, type UseLayoutOptions, type UseLayoutResult } from './hooks/useLayout';

export { useBreakpoints, type UseBreakpointsResult } from './hooks/use-breakpoints';

// Helpers
export { getUserInitials, getEmailNamespace, getDisplayName } from './helpers/userName';

// Avatar UI primitive
export { Avatar as ShellAvatar, type AvatarProps as ShellAvatarProps } from './ui/Avatar';

// Constants
export {
    SIDEBAR_WIDTH,
    CLOSED_SIDEBAR_WIDTH,
    SIDEBAR_COLLAPSED_WIDTH,
    HEADER_HEIGHT,
    CurrentTheme,
} from './styles/constants';

// --- Legacy v0.x API (kept for backward compatibility while consumers migrate) ---

export * from './helpers';

export * from './hooks';

export * from './lib';

export * from './assets/fleet-icons';

export * from './assets/themed-fleet-icons';

export {
    CheckCircleOutlinedIcon,
    ChirpAltIcon,
    ChirpErrorIcon,
    CloseIcon,
    ErrorIcon,
    LogoutIcon as LegacyLogoutIcon,
    SuccessIcon,
} from './assets/icons';

export * from './styles/theme/theme-provider';

export { referenceDarkThemePalette, referenceLightThemePalette } from './styles/theme/reference-palettes';

export { lightTheme as legacyLightTheme } from './styles/theme/light';

export { darkTheme as legacyDarkTheme } from './styles/theme/dark';

export { type ReferencePaletteType } from './styles/theme/types';

export { uiKitLocaleModule } from './locales/resources/merged-resourses';
