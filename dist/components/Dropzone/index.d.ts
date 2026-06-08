import { SxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { DropzoneOptions } from 'react-dropzone';
export type Props = DropzoneOptions & {
    sx?: SxProps;
};
export declare const Dropzone: FC<PropsWithChildren<Props>>;
