import { InputAdornment, SxProps, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { SearchIcon } from '../../icons';
import { chirpPalette } from '../../theme/palette';

import * as S from './style';

type Props = {
    value: string;
    sx?: SxProps;
    placeholder?: string;
    onChange(name: string): void;
    size?: 'small' | 'medium';
};

export const SearchInput: React.FC<Props> = ({ value, sx, placeholder, onChange, size = 'medium' }) => {
    const theme = useTheme();
    const palette = chirpPalette(theme);
    const { t } = useTranslation('uiKit', { keyPrefix: 'SearchInput' });

    return (
        <S.Search
            type="text"
            sx={sx}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || t('Search by name')}
            variant="outlined"
            size={size}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment
                            position="start"
                            sx={{ color: value ? palette.primaryColors.accent : theme.palette.text.disabled }}
                        >
                            <SearchIcon width="16px" height="16px" />
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
};
