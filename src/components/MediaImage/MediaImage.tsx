import { Skeleton } from '@mui/material';
import { ImgHTMLAttributes, ReactNode, useState, useTransition } from 'react';

import * as S from './style';

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

export const MediaImage = ({ src, alt, fallback, skeletonProps, style, ...imgProps }: MediaImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isPending, startTransition] = useTransition();

    const showSkeleton = isLoading || isPending;

    const skeletonStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        ...skeletonProps?.sx,
    };

    const handleLoad = () => {
        startTransition(() => {
            setIsLoading(false);
            setHasError(false);
        });
    };

    const handleError = () => {
        startTransition(() => {
            setIsLoading(false);
            setHasError(true);
        });
    };

    if (hasError && fallback) {
        return <S.Wrapper>{fallback}</S.Wrapper>;
    }

    if (hasError) {
        return (
            <S.Wrapper>
                <Skeleton
                    variant={skeletonProps?.variant || 'rectangular'}
                    animation="pulse"
                    sx={{
                        ...skeletonStyle,
                        opacity: 0.5,
                    }}
                />
            </S.Wrapper>
        );
    }

    return (
        <S.Wrapper>
            {showSkeleton && (
                <Skeleton
                    variant={skeletonProps?.variant || 'rectangular'}
                    animation={skeletonProps?.animation !== undefined ? skeletonProps.animation : 'wave'}
                    sx={{
                        ...skeletonStyle,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                />
            )}
            <img
                src={src}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    opacity: showSkeleton ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                    ...style,
                }}
                {...imgProps}
            />
        </S.Wrapper>
    );
};
