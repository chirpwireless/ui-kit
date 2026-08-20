import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
export type PromoBannerProps = {
    title: string;
    subtitle?: string;
    /** Image for the 112×112 frame; ignored when `imageSlot` is set */
    imageSrc?: string;
    imageAlt?: string;
    /** Arbitrary media (icon, illustration) rendered in the frame instead of `imageSrc` */
    imageSlot?: ReactNode;
    linkLabel: string;
    linkHref: string;
    isExternalLink?: boolean;
    /** Replaces the default icon of the link button */
    linkIcon?: ReactNode;
    sx?: SxProps<Theme>;
};
export declare const PromoBanner: import('react').NamedExoticComponent<PromoBannerProps>;
