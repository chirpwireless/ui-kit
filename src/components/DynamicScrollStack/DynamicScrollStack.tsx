import { SxProps } from '@mui/material';
import { ReactNode, RefObject, useState, useRef, useEffect } from 'react';

import * as S from './styles';

interface DynamicScrollStackProps {
    children: ReactNode;
    sx?: SxProps;
    onScroll?(): void;
    scrollRef?: RefObject<HTMLDivElement | null>;
}

export const DynamicScrollStack = ({ children, sx, onScroll, scrollRef }: DynamicScrollStackProps) => {
    const [isScrolling, setIsScrolling] = useState(false);
    const internalScrollRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = scrollRef || internalScrollRef;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            const timeout = setTimeout(() => {
                setIsScrolling(false);
            }, 500);

            onScroll?.();

            return () => clearTimeout(timeout);
        };

        const container = scrollContainerRef.current;

        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [onScroll, scrollContainerRef]);

    return (
        <S.ScrollContainer ref={scrollContainerRef} isScrolling={isScrolling} sx={sx}>
            {children}
        </S.ScrollContainer>
    );
};
