import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

import * as S from './style';

type Props = {
    value: number | string | boolean | undefined;
    label?: string;
    postfix?: number | string;
    color?: string;
    size?: 'big' | 'small';
};

export const CurrentValue: FC<Props> = ({ value, label, postfix, color, size = 'big' }) => {
    if (value === undefined || value === '') {
        return <Typography fontSize="24px">No data</Typography>;
    }

    const formattedValue = typeof value === 'number' ? Math.round(value * 100) / 100 : String(value);

    if (typeof formattedValue === 'number' && !Number.isInteger(formattedValue)) {
        const [int, dec] = formattedValue.toFixed(2).split('.');

        if (dec) {
            return (
                <S.Wrapper size={size} color={color}>
                    <S.Value>
                        {label} {int}
                    </S.Value>
                    <Stack display={postfix ? 'flex' : 'block'} alignItems="flex-end" minHeight="inherit">
                        {!!postfix && <S.Postfix component="span">{postfix}</S.Postfix>}
                        <S.DecimalValue component="span">,{dec}</S.DecimalValue>
                    </Stack>
                </S.Wrapper>
            );
        }
    }

    return (
        <S.Wrapper size={size} color={color} textAlign="center">
            {label} {formattedValue}
            {!!postfix && <S.Postfix component="span">{postfix}</S.Postfix>}
        </S.Wrapper>
    );
};
