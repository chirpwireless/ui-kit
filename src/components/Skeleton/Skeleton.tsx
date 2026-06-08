import { styled, keyframes, SxProps, Theme, Box } from '@mui/material';
import { useRef, useEffect } from 'react';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

const slideDiagonal = keyframes`
  0% {
    transform: translateX(calc(-1 * var(--diagonal-length))) rotate(-15deg);
  }
  100% {
    transform: translateX(var(--diagonal-length)) rotate(-15deg);
  }
`;

const SkeletonContainer = styled(Box)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        position: 'relative',
        width: '100%',
        height: '100%',
        background: `linear-gradient(240.16deg, ${theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white} 0%, transparent 100%)`,
        color: palette.neutral.white,
        overflow: 'hidden',
        '--diagonal-length': '0px',
    };
});

const SkeletonDiagonalStripe = styled('div')`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13px;
    height: 140%;
    background-color: currentColor;
    transform-origin: bottom left;
    opacity: 0.1;
    animation: ${slideDiagonal} 1s linear infinite;
    filter: blur(20px);
`;

interface SkeletonProps {
    sx?: SxProps<Theme>;
}

export const Skeleton = ({ sx }: SkeletonProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const setDiagonalLength = () => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            const height = containerRef.current.offsetHeight;
            const diagonal = Math.sqrt(width * width + height * height);

            containerRef.current.style.setProperty('--diagonal-length', `${diagonal}px`);
        }
    };

    useEffect(() => {
        setDiagonalLength();

        window.addEventListener('resize', setDiagonalLength);

        return () => {
            window.removeEventListener('resize', setDiagonalLength);
        };
    }, []);

    return (
        <SkeletonContainer ref={containerRef} sx={sx}>
            <SkeletonDiagonalStripe />
        </SkeletonContainer>
    );
};
