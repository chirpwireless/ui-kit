import { Coordinates } from '../map.types';
import { IBaseMapProps } from '../base-map';
interface IFeatureMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: GeoJSON.GeoJSON | null;
    isLineMarkersNeeded?: boolean;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
    animateLineId?: number;
    animationDuration?: number;
    isPaused: boolean;
    setAnimateLineId: (id?: number) => void;
}
export declare const TripMap: React.FC<IFeatureMapProps>;
export {};
