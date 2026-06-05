import { SxProps } from '@mui/material';
interface ICardWithImageProps {
    containerSx?: SxProps;
    headerSx?: SxProps;
    contentSx?: SxProps;
    title: string;
    subTitle?: string;
    image: string;
    contentChildren?: React.ReactNode;
}
export declare const CardWithImage: React.FC<ICardWithImageProps>;
export {};
