import type { ReactNode } from 'react';

import { useBreakpoints } from '../../hooks/use-breakpoints';
import * as S from './style';

export interface BaseLayoutProps {
    sidebar: ReactNode;
    header?: ReactNode;
    children?: ReactNode;
    isSidebarOpen: boolean;
    isSidebarCollapsed: boolean;
    toastContainer?: ReactNode;
    overlaySlot?: ReactNode;
}

export const BaseLayout = ({
    sidebar,
    header,
    children,
    isSidebarOpen,
    isSidebarCollapsed,
    toastContainer,
    overlaySlot,
}: BaseLayoutProps) => {
    const { isMobile } = useBreakpoints();

    return (
        <>
            <S.LayoutRoot>
                {isMobile && header ? header : null}
                {sidebar}
                <S.AppContainer isOpen={isSidebarOpen} isSidebarCollapsed={isSidebarCollapsed}>
                    {children}
                </S.AppContainer>
                {overlaySlot}
            </S.LayoutRoot>
            {toastContainer}
        </>
    );
};
