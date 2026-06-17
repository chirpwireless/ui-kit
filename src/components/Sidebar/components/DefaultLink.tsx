import type { MouseEvent, MouseEventHandler, ReactNode } from 'react';

import * as S from '../style';

interface DefaultLinkProps {
    href: string;
    isExternal?: boolean;
    isActive?: boolean;
    isSidebarCollapsed?: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    children: ReactNode;
    className?: string;
}

const externalLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
} as const;

export const DefaultLink = ({
    href,
    isExternal,
    disabled,
    isSidebarCollapsed,
    onClick,
    children,
    className,
}: DefaultLinkProps) => (
    <S.LinkBox
        component="a"
        href={disabled ? '#' : href}
        // LinkBox renders an <a> via `component="a"`, so the handler runs on an anchor at runtime,
        // but styled(Box)'s onClick is typed for the default div element. Bridge the element type.
        onClick={onClick as MouseEventHandler<HTMLDivElement> | undefined}
        disabled={disabled}
        isSidebarCollapsed={isSidebarCollapsed}
        className={className}
        {...(isExternal ? externalLinkProps : {})}
    >
        {children}
    </S.LinkBox>
);
