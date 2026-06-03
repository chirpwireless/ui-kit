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
    logoHref = '/',
}: SidebarLogoProps) => {
    const renderLogo = () => {
        if (isSidebarCollapsed) {
            if (isSidebarHovered) return null;

            return <S.LogoCollapsedWrap>{logoCollapsed ?? logo}</S.LogoCollapsedWrap>;
        }

        return (
            <S.AppLogo>
                <a href={logoHref} style={{ display: 'inline-flex', textDecoration: 'none', color: 'inherit' }}>
                    <S.LogoWrap>{logo}</S.LogoWrap>
                </a>
            </S.AppLogo>
        );
    };

    return (
        <Stack
            direction="row"
            width="100%"
            justifyContent={isSidebarCollapsed ? 'center' : 'space-between'}
            alignItems="start"
            gap={0}
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
