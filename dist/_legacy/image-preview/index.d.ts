import { FC, Ref } from 'react';
export interface IImagePreviewProps {
    previewUrl?: string;
    borderRadius?: number | string;
    title?: string;
    subTitle?: string;
    width?: string;
    height?: string;
    inputRef?: Ref<HTMLInputElement | null>;
    onRemove?: () => void;
    onLoad?: (file: File) => void;
}
export declare const ImagePreview: FC<IImagePreviewProps>;
