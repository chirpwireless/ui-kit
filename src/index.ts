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

// --- Shared infrastructure (helpers / hooks / i18n) ---
// The full v0.x component + theme + icon surface now lives behind the `/legacy`
// subpath so the root entry stays v1-only and consumers can't pull legacy by accident.

export * from './helpers';

export * from './hooks';

export { uiKitLocaleModule } from './locales/resources/merged-resourses';
