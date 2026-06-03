import type { MouseEvent, ReactNode } from 'react';

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
        onClick={onClick}
        disabled={disabled}
        isSidebarCollapsed={isSidebarCollapsed}
        className={className}
        {...(isExternal ? externalLinkProps : {})}
    >
        {children}
    </S.LinkBox>
);
