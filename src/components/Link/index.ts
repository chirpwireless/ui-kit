import { styled } from '@mui/material';
import { Link as RouterLinkBase } from 'react-router-dom';

// Plain unstyled router link (inherits color, no underline). Exported named; consumers that
// relied on the previous default export re-export it as default via the chirp shim.
export const Link = styled(RouterLinkBase)(() => ({
    textDecoration: 'none',
    color: 'unset',
}));
