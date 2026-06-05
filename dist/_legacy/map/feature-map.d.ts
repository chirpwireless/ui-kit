import { Coordinates, IFeatureMapVariants } from './map.types';
import { IBaseMapProps } from './base-map';
interface IFeatureMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: GeoJSON.GeoJSON | null;
    coordinates?: Coordinates;
    isLineMarkersNeeded?: boolean;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
    isFirstFocusOnly?: boolean;
    variant?: IFeatureMapVariants;
}
export declare const FeatureMap: React.FC<IFeatureMapProps>;
export {};
