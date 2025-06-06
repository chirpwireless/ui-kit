import { alpha, styled } from '@mui/material';
import { Box, Typography } from '@mui/material';

export const WidgetToggle = styled('label')`
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: center;
`;

export const WidgetMobileToggle = styled('label')`
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: flex-start;
    flex-direction: column;
`;

export const HiddenInput = styled('input')`
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`;

export const Checkmark = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isLoading' && prop !== 'checked',
})<{ checked: boolean; isLoading: boolean }>(({ theme, isLoading, checked }) => ({
    width: '32px',
    height: '18px',
    position: 'relative',
    borderRadius: '20px',
    border: `1px solid`,
    borderColor: isLoading
        ? `${alpha(theme.palette.text.text4, 0.5)}`
        : checked
          ? theme.palette.base.color6
          : theme.palette.text.text4,
}));

export const CheckmarkPin = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isLoading',
})<{ checked: boolean; isLoading: boolean }>(({ checked, isLoading, theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '12px',
    width: isLoading ? '16px' : '12px',
    left: checked ? '15px' : '3px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: isLoading
        ? theme.palette.text.text4
        : checked
          ? theme.palette.base.color6
          : theme.palette.text.text7,
    borderColor: isLoading ? theme.palette.text.text4 : checked ? theme.palette.base.color6 : theme.palette.text.text7,
    borderRadius: '17px',
    transition: '0.4s',
}));

export const Label = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'checked',
})<{ component: string; checked: boolean }>(({ theme, checked }) => ({
    marginRight: '12px',
    userSelect: 'none',
    fontSize: '12px',
    color: checked ? theme.palette.text.text7 : theme.palette.text.text4,
}));
