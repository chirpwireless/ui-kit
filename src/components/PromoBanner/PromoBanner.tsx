import { Stack, type SxProps, type Theme, Typography } from '@mui/material';
import { memo, type ReactNode } from 'react';

import { ShareIcon } from '../../icons';
import { Button } from '../Button';
import { MediaImage } from '../MediaImage';
import { Reference } from '../Reference';

import * as S from './style';

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

const LINK_ICON_SIZE = 18;

export const PromoBanner = memo<PromoBannerProps>(
    ({ title, subtitle, imageSrc, imageAlt, imageSlot, linkLabel, linkHref, isExternalLink, linkIcon, sx }) => {
        const media = imageSlot ?? (imageSrc ? <MediaImage src={imageSrc} alt={imageAlt ?? title} /> : null);

        // The share glyph marks a jump out of the app; in-app links stay plain unless an icon is passed
        const defaultLinkIcon = isExternalLink ? <ShareIcon width={LINK_ICON_SIZE} height={LINK_ICON_SIZE} /> : null;
        const icon = linkIcon ?? defaultLinkIcon;

        const externalLinkProps = isExternalLink ? { target: '_blank', rel: 'noreferrer' } : {};

        return (
            <S.Banner sx={sx}>
                {media ? <S.Media>{media}</S.Media> : null}

                <Stack sx={{ flex: '1 0 0', minWidth: 0, gap: '8px', alignItems: 'flex-start' }}>
                    <Stack sx={{ gap: '4px', width: '100%', wordBreak: 'break-word' }}>
                        <Typography variant="h3" sx={{ color: 'neutral.primary' }}>
                            {title}
                        </Typography>

                        {subtitle ? (
                            <Typography variant="body1" sx={{ color: 'neutral.grey5' }}>
                                {subtitle}
                            </Typography>
                        ) : null}
                    </Stack>

                    <Button
                        variant="tertiary"
                        size="medium"
                        hasIcon={Boolean(icon)}
                        component={Reference}
                        href={linkHref}
                        isExternalLink={isExternalLink}
                        {...externalLinkProps}
                    >
                        {icon}
                        {linkLabel}
                    </Button>
                </Stack>
            </S.Banner>
        );
    },
);
