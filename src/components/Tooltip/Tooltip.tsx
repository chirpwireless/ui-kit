import { Box, Tooltip as MuiTooltip, SxProps, TooltipProps, alpha, useTheme } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

type Props = TooltipProps & {
    tooltipProps?: SxProps;
    childrenProps?: SxProps;
};

export const Tooltip: React.FC<Props> = ({ children, tooltipProps, childrenProps, ...props }) => {
    const theme = useTheme();
    const palette = chirpPalette(theme);

    return (
        <MuiTooltip
            componentsProps={{
                tooltip: {
                    sx: {
                        /* 10px as was set in Figma is too small */
                        fontSize: '12px',
                        backgroundColor: alpha(palette.neutral.grey1, 0.9),
                        color: palette.neutral.primary,
                        border: `1px solid ${palette.borders.primary}`,
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)',
                        ...tooltipProps,
                    },
                },
            }}
            {...props}
        >
            <Box display="inline-block" height="min-content" width="min-content" maxWidth="100%" sx={childrenProps}>
                {children}
            </Box>
        </MuiTooltip>
    );
};
