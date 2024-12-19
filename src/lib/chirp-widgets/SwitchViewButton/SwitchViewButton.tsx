import { PinIcon } from '@chirp/ui/assets/icons';
import { IconButton } from '@mui/material';

type Props = {
    attributeName: string;
    isAccent?: boolean;
    disabled?: boolean;
    switchView(attributeName: string): void;
};

export const SwitchViewButton: React.FC<Props> = ({
    attributeName,
    isAccent = false,
    disabled = false,
    switchView,
}) => {
    const handleClick = () => {
        switchView(attributeName);
    };

    return (
        <IconButton
            sx={{
                height: '20px',
                padding: 0,
                color: isAccent ? 'primaryColors.accent' : 'primary.contrastText',
                '&:hover': {
                    color: isAccent ? 'primaryColors.accentHover' : 'lightShades.ternary',
                    bgcolor: 'transparent',
                },
            }}
            disabled={disabled}
            onClick={handleClick}
        >
            <PinIcon outlined={!isAccent} />
        </IconButton>
    );
};
