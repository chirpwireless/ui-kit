import { FC, useMemo, useRef, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { Box, Popover, Stack } from '@mui/material';
import { hex2rgba } from '@chirp/ui/helpers/colors';
import { CloseIcon } from '@chirp/ui/assets/icons';

import { ClickableColorCell } from './clickable-color-cell/clickable-color-cell';
import { INITIAL_PREVIOUS_COLORS } from './constants';
import { IconButton } from '../icon-button';
import { Typography } from '../typogrpahy';
import * as S from './style';

interface IColorPickerProps {
    color: string;
    onChange: (value: string) => void;
    previousColors?: string[];
}

export const ColorPicker: FC<IColorPickerProps> = ({ previousColors = INITIAL_PREVIOUS_COLORS, color, onChange }) => {
    const controlRef = useRef(null);
    const [popoverState, setPopoverState] = useState(false);

    const [alphaState, setAlphaState] = useState<number | string>(100);

    const handleChangeAlpha = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isValid = !isNaN(Number(value));

        if (!isValid) return;

        if (Number(value) > 100) {
            setAlphaState(100);
        } else setAlphaState(value ? Number(value) : '');

        const hexedAlpha = (((Number(value) / 100) * 255) | (1 << 8)).toString(16).slice(1);
        if (Number(value) === 0) return;

        if (color.length === 7) {
            onChange(`${color}${hexedAlpha}`);
        } else {
            const curentValue = color.slice(0, 7);
            onChange(`${curentValue}${hexedAlpha}`);
        }
    };

    const handleChange = (value: string) => {
        onChange(value);

        const rgbaColor = hex2rgba(value);

        setAlphaState(Math.round(rgbaColor[3] * 100));
    };

    return (
        <>
            <Stack direction="row" gap={0.5} ref={controlRef}>
                <S.Control>
                    {color.slice(0, 7)} {alphaState === 100 || !String(alphaState)?.length ? null : `${alphaState}%`}
                </S.Control>
                <ClickableColorCell color={color} size="large" onClick={() => setPopoverState(true)} />
            </Stack>
            <Popover
                open={popoverState}
                anchorEl={controlRef.current}
                onClose={() => setPopoverState(false)}
                sx={{
                    transform: 'translateX(44px)',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <S.Wrapper>
                    <Box p={3}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography fontWeight={500}>Color</Typography>
                            <IconButton size="small" onClick={() => setPopoverState(false)} variant="gray">
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                    <Box position="relative">
                        <HexAlphaColorPicker color={color} onChange={handleChange} />
                    </Box>

                    <Stack gap={4}>
                        <Box p={4} pb={0}>
                            <Stack direction="row" gap={2}>
                                <S.StyledTextField width="66px" borderRadius={2} justifyContent="center">
                                    Hex
                                </S.StyledTextField>
                                <Stack direction="row" gap="1px" width="194px" borderRadius={2} overflow="hidden">
                                    <S.StyledTextField width="136px">
                                        <input value={color} onChange={(e) => onChange(e.target.value)} />
                                    </S.StyledTextField>
                                    <S.StyledTextField width="58px">
                                        <input
                                            value={alphaState}
                                            onChange={handleChangeAlpha}
                                            style={{ width: '24px' }}
                                        />
                                        %
                                    </S.StyledTextField>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box pl={4} pr="13px" pb={4}>
                            <Stack direction="row" gap={2} flexWrap="wrap">
                                {previousColors.slice(0, 9).map((color, idx) => (
                                    <ClickableColorCell
                                        key={`${color}-${idx}`}
                                        color={color}
                                        size="small"
                                        onClick={() => handleChange(color)}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </S.Wrapper>
            </Popover>
        </>
    );
};
