import { Popper } from '@mui/material';
import React from 'react';

export const CustomPopper = (props: React.ComponentProps<typeof Popper>) => {
    const { anchorEl, ...other } = props;
    const width = anchorEl && 'clientWidth' in anchorEl ? (anchorEl as HTMLElement).clientWidth : undefined;

    return (
        <Popper
            anchorEl={anchorEl}
            {...other}
            placement="bottom-start"
            style={{ zIndex: 1300, width, maxWidth: width }}
        />
    );
};
