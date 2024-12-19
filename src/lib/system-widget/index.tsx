import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';

import * as S from './style';
import { Tooltip } from '../tooltip';
import { getTimeString } from '../chirp-widgets/helpers';
import { SwitchViewButton } from '../chirp-widgets/switch-view-button';

type ValueType = number | string | boolean | null;

type Props = {
    attributeName: string;
    title: string;
    value: ValueType | string[];
    units: string | null;
    date: number;
    switchView?(attributeName: string): void;
};

const Value: FC<{ value: ValueType; units: string | null }> = ({ value, units }) => {
    const stringValue = String(value);

    return (
        <Tooltip title={stringValue} placement="top">
            <Typography
                fontSize="14px"
                lineHeight="20px"
                color="lightShades.primary"
                noWrap
                maxWidth="100%"
                sx={{ '& + &': { mt: '4px' } }}
            >
                {stringValue} {units}
            </Typography>
        </Tooltip>
    );
};

export const SystemWidget: FC<Props> = ({ attributeName, title, value, units, date, switchView }) => {
    const formattedValue = typeof value === 'string' && value.includes(',') ? value.split(',') : value;

    return (
        <S.Card>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb="8px" spacing="16px">
                <Typography fontSize="12px" lineHeight="16px" color="lightShades.ternary" noWrap title={title}>
                    {title}
                </Typography>
                <Typography fontSize="12px" lineHeight="16px" color="text.secondary" flexShrink={0}>
                    Last update:
                    <Typography
                        component="span"
                        fontSize="12px"
                        lineHeight="16px"
                        color="lightShades.ternary"
                        sx={{ verticalAlign: 'bottom', ml: '4px' }}
                    >
                        {getTimeString(date)}
                    </Typography>
                </Typography>
            </Stack>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack alignSelf="flex-start" width="100%">
                    {Array.isArray(formattedValue) ? (
                        formattedValue.map((item) => <Value key={item} value={item} units={units} />)
                    ) : (
                        <Value value={formattedValue} units={units} />
                    )}
                </Stack>
                {switchView && (
                    <SwitchViewButton
                        attributeName={attributeName}
                        // disabled={isSettingsUpdateLoading}
                        switchView={switchView}
                    />
                )}
            </Box>
        </S.Card>
    );
};
