import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

import { Link as RouterLink } from '../Link';

import * as S from './style';

type ReferenceProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & { isExternalLink?: boolean };

export const Reference: FC<ReferenceProps> = ({ href = '#', children, isExternalLink, ...props }) => {
    if (isExternalLink) {
        return (
            <S.Anchor href={href} {...props}>
                {children}
            </S.Anchor>
        );
    }

    return (
        <RouterLink to={href} {...props}>
            {children}
        </RouterLink>
    );
};
