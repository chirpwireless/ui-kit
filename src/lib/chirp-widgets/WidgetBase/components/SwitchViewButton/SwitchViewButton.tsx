import { PinIcon } from '@chirp/ui/assets/icons';
import { IconButton } from '@mui/material';

type Props = {
    isAccent?: boolean;
    disabled?: boolean;
    onClick(): void;
};

export const SwitchViewButton: React.FC<Props> = ({ isAccent = false, disabled = false, onClick }) => {
    return (
        <IconButton
            sx={{
                height: '20px',
                padding: 0,
                color: 'lightShades.quaternary',
                '&:hover': {
                    color: 'lightShades.ternary',
                    bgcolor: 'transparent',
                },
            }}
            disabled={disabled}
            onClick={onClick}
        >
            <PinIcon outlined={!isAccent} />
        </IconButton>
    );
};
