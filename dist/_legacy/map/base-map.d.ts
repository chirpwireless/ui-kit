import { PaletteMode, SxProps } from '@mui/material';
import { FC, PropsWithChildren, RefObject } from 'react';
import { Coordinates } from './map.types';
export interface IBaseMapProps {
    mapRef: RefObject<mapboxgl.Map | null>;
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    getMapStyleId?: (themeMode: PaletteMode) => string;
    onMapLoad: () => void;
    sx?: SxProps;
    controls?: 'full' | 'reduced';
}
export declare const BaseMap: FC<PropsWithChildren<IBaseMapProps>>;
