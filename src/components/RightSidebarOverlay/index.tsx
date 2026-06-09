import { FC, PropsWithChildren } from 'react';

import * as S from './style';

type Props = {
    isOpen: boolean;
    gutters?: boolean;
    onClose: () => void;
} & PropsWithChildren;

export const RightSidebarOverlay: FC<Props> = ({ children, gutters = true, isOpen, onClose }) => {
    return (
        <S.Overlay
            className="right-sidebar"
            anchor="right"
            gutters={gutters}
            open={isOpen}
            onClose={onClose}
            BackdropProps={{ sx: { backdropFilter: 'blur(5px)', background: 'rgba(0, 0, 0, 0.12)' } }}
        >
            {children}
        </S.Overlay>
    );
};
