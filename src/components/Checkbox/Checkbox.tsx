import { CheckboxProps, Checkbox as MuiCheckbox } from '@mui/material';

import * as S from './style';

export const Checkbox = (props: CheckboxProps) => {
    return (
        <MuiCheckbox
            sx={{
                '&:hover': { bgcolor: 'transparent' },
            }}
            disableRipple
            color="default"
            checkedIcon={<S.CheckboxCheckedIcon />}
            icon={<S.CheckboxIcon />}
            {...props}
        />
    );
};
