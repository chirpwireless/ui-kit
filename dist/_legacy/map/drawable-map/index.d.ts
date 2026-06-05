import { Coordinates } from '../map.types';
import { IBaseMapProps } from '../base-map';
interface IDrawableMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    coordinates?: Coordinates;
    scrollZoom?: boolean;
    data?: GeoJSON.GeoJSON | null;
    isSingleDraw?: boolean;
    drawMode?: 'draw_line_string';
    withStartEndLineIndicators?: boolean;
    shouldFinishDrawing?: boolean;
    defaultSelectedTab?: 'draw_line_string' | 'draw_polygon' | 'draw_circle';
    getMapStyleId?: (themeMode: string) => string;
    onChange?: (value: GeoJSON.GeoJSON) => void;
    onDrawingFinished?: () => void;
}
export declare const DrawableMap: React.FC<IDrawableMapProps>;
export {};
