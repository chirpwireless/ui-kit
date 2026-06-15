import { Menu, MenuItem, Typography, PopoverOrigin } from '@mui/material';
import { cloneElement, FC, MouseEvent, ReactElement, useState, ReactNode } from 'react';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export interface MenuAction {
    icon: ReactNode;
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

interface ActionsMenuProps {
    actions: MenuAction[];
    children: ReactElement;
    transformOrigin?: PopoverOrigin;
}

export const ActionsMenu: FC<ActionsMenuProps> = ({
    actions,
    children,
    transformOrigin = { vertical: 'top', horizontal: 'left' } as PopoverOrigin,
}) => {
    const [menuPosition, setMenuPosition] = useState<{
        top: number;
        left: number;
    } | null>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();

        const rect = event.currentTarget.getBoundingClientRect();

        setMenuPosition({
            top: rect.bottom,
            left: rect.right,
        });

        const childProps = children.props as { onClick?: (event: MouseEvent<HTMLElement>) => void };

        if (childProps.onClick) {
            childProps.onClick(event);
        }
    };

    const handleClose = () => {
        setMenuPosition(null);
    };

    const handleActionClick = (action: MenuAction) => (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        action.onClick();
        handleClose();
    };

    return (
        <>
            {cloneElement(children as never, {
                onClick: handleClick,
            })}
            <Menu
                open={Boolean(menuPosition)}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={menuPosition ? { top: menuPosition.top, left: menuPosition.left } : undefined}
                transformOrigin={transformOrigin}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: (theme) =>
                                theme.palette.mode === CurrentTheme.Dark
                                    ? chirpPalette(theme).neutral.grey1
                                    : chirpPalette(theme).neutral.white,
                            border: (theme) => `1px solid ${chirpPalette(theme).borders.primary}`,
                            borderRadius: '12px',
                            boxShadow: (theme) => `0 8px 24px ${chirpPalette(theme).shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
                            backdropFilter: 'blur(10px)',
                            backgroundImage: 'none',
                        },
                    },
                }}
                sx={{
                    '& .MuiPaper-root': {
                        minWidth: '160px',
                    },
                    '& .MuiMenuItem-root': {
                        gap: '8px',
                        padding: '8px 16px',
                        '&:hover': {
                            backgroundColor: 'action.hover',
                        },
                    },
                }}
            >
                {actions.map((action, index) => (
                    <MenuItem
                        disabled={action.disabled}
                        key={index}
                        onClick={handleActionClick(action)}
                        sx={{
                            color: 'neutral.primary',
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        {action.icon}
                        <Typography variant="caption" color="neutral.primary">
                            {action.label}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
