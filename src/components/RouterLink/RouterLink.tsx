import { LinkProps as MuiLinkProps, styled } from '@mui/material';
import { FC } from 'react';
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

type CustomLinkProps = Omit<MuiLinkProps, 'href'> &
    RouterLinkProps & {
        href?: string;
    };

export const RouterLink: FC<CustomLinkProps> = ({ href, to, ...props }) => {
    return <StyledLink to={to || href || ''} {...props} />;
};
