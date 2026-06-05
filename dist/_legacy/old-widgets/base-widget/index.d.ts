import { SxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
export interface IBaseWidgetProps {
    type: 'period' | 'online';
    title: string;
    isFavorite?: boolean;
    customHeader?: React.ReactNode;
    onFavoriteClick: () => void;
    onDeleteClick: () => void;
    wrapperSxProps?: SxProps;
    deleteDisabled?: boolean;
    makeFavouriteDisabled?: boolean;
}
export declare const BaseWidget: FC<PropsWithChildren<IBaseWidgetProps>>;
