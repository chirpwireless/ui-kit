import { ImgHTMLAttributes, ReactNode } from 'react';
interface MediaImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
    src: string;
    alt: string;
    fallback?: ReactNode;
    skeletonProps?: {
        variant?: 'text' | 'rectangular' | 'circular';
        animation?: 'pulse' | 'wave' | false;
        sx?: Record<string, unknown>;
    };
}
export declare const MediaImage: ({ src, alt, fallback, skeletonProps, style, ...imgProps }: MediaImageProps) => import("react/jsx-runtime").JSX.Element;
export {};
