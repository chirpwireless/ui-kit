import { SxProps } from '@mui/material';
interface IBaseCardProps {
    containerSx?: SxProps;
    headerSx?: SxProps;
    contentSx?: SxProps;
    headerChildren?: React.ReactNode;
    contentChildren?: React.ReactNode;
}
export declare const BaseCard: React.FC<IBaseCardProps>;
export {};
