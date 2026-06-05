import { ICustomDrawMode, IDrawModeState } from '../../map.types';
interface IDrawPolygonModeState extends IDrawModeState {
    polygon: {
        id: string;
        coordinates: [number, number][][];
        type: 'Polygon';
    };
}
export type ICustomDrawPolygonMode = ICustomDrawMode<IDrawPolygonModeState>;
export declare const customDrawPolygonMode: ICustomDrawPolygonMode;
export {};
