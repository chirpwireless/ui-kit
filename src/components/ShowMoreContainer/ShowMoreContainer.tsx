import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { FC, MouseEvent, PropsWithChildren, useState, useRef, useEffect } from 'react';

import * as S from './style';

interface ShowMoreContainerProps extends PropsWithChildren {
    height: number;
}

export const ShowMoreContainer: FC<ShowMoreContainerProps> = ({ height, children }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [isVisibleLast, setIsVisibleLast] = useState(true);
    const [heightFull, setHeightFull] = useState(height);
    const lastBlockRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        if (lastBlockRef.current) {
            const { bottom } = lastBlockRef.current.getBoundingClientRect();
            const parentRect = lastBlockRef.current.parentElement?.getBoundingClientRect();

            if (parentRect) {
                const virtualHeight = bottom - parentRect.top;
                const isVisible = virtualHeight <= height;

                setHeightFull(bottom - parentRect.top);
                setIsVisibleLast(isVisible);
            }
        }
    }, [height]);

    return (
        <S.Wrapper>
            <S.BoxWrapper
                open={open}
                heightFull={heightFull}
                sx={{
                    height: height,
                }}
            >
                {children}
                <S.Mark
                    className="last-badge"
                    ref={lastBlockRef}
                    sx={{
                        height: height,
                    }}
                />
            </S.BoxWrapper>
            {!isVisibleLast && (
                <S.Arrow open={open} onClick={(e) => handleClick(e)}>
                    <ExpandMoreIcon sx={{ width: '16px' }} />
                </S.Arrow>
            )}
        </S.Wrapper>
    );
};
