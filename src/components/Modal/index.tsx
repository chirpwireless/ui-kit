import { FC, ReactNode } from 'react';

import * as S from './style';

type Props = {
    title: string;
    description: string;
    actionComponent: ReactNode;
    /** Brand/visual icon shown at the top. App supplies the variant (ChirpModalIcon / KiloModalIcon / custom). */
    icon?: ReactNode;
};

export const Modal: FC<Props> = ({ title, description, actionComponent, icon }) => {
    return (
        <S.Container>
            <S.Modal>
                {icon}
                <S.Title mt="24px" mb="12px">
                    {title}
                </S.Title>
                <S.Description mb="24px">{description}</S.Description>
                {actionComponent}
            </S.Modal>
        </S.Container>
    );
};
