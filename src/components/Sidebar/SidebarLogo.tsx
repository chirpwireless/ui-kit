import type { ReactNode } from 'react';

import { Stack } from '@mui/material';

import { SidebarToggle } from './SidebarToggle';
import * as S from './style';

interface SidebarLogoProps {
    isSidebarCollapsed: boolean;
    isSidebarHovered: boolean;
    onToggle: () => void;
    logo?: ReactNode;
    logoCollapsed?: ReactNode;
    logoHref?: string;
}

export const SidebarLogo = ({
    isSidebarCollapsed,
    isSidebarHovered,
    onToggle,
    logo,
    logoCollapsed,
}: SidebarLogoProps) => {
    const renderLogo = () => {
        if (isSidebarCollapsed) {
            if (isSidebarHovered) return null;

            return <S.LogoCollapsedWrap>{logoCollapsed ?? logo}</S.LogoCollapsedWrap>;
        }

        // Render the logo node as-is — the consumer provides its own link wrapper (SPA Link,
        // external anchor, disabled state, …). `logoHref` is kept only as a hint for plain-logo apps.
        return (
            <S.AppLogo>
                <S.LogoWrap>{logo}</S.LogoWrap>
            </S.AppLogo>
        );
    };

    return (
        <Stack
            direction="row"
            sx={{
                width: '100%',
                justifyContent: isSidebarCollapsed ? 'center' : 'space-between',
                alignItems: 'start',
                gap: 0,
            }}
        >
            {renderLogo()}
            {isSidebarHovered ? (
                <S.SideBarToggledWrap>
                    <SidebarToggle
                        isSidebarHovered={isSidebarHovered}
                        isSidebarCollapsed={isSidebarCollapsed}
                        onToggle={onToggle}
                    />
                </S.SideBarToggledWrap>
            ) : null}
        </Stack>
    );
};
