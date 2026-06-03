import { Box } from '@mui/material';

import { ToggleSidebarIcon } from '../../icons';

interface SidebarToggleProps {
    isSidebarHovered: boolean;
    isSidebarCollapsed: boolean;
    onToggle: () => void;
}

export const SidebarToggle = ({ isSidebarHovered, isSidebarCollapsed, onToggle }: SidebarToggleProps) => (
    <Box
        sx={{
            cursor: 'pointer',
            opacity: isSidebarHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            height: 28,
            display: 'flex',
            alignItems: 'center',
        }}
        onClick={onToggle}
    >
        <ToggleSidebarIcon
            style={{
                transform: isSidebarCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s ease-in-out',
            }}
        />
    </Box>
);
