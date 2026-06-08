import { SxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

import * as S from './style';

export type Props = DropzoneOptions & {
    sx?: SxProps;
};

export const Dropzone: FC<PropsWithChildren<Props>> = ({ children, sx, ...config }) => {
    const { getRootProps, getInputProps } = useDropzone(config);

    return (
        <S.DragBox sx={sx} {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
        </S.DragBox>
    );
};
