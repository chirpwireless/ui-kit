import { ICustomDrawMode, IDrawModeState } from '../../map.types';
interface IDrawLineStringModeState extends IDrawModeState {
    line: {
        id: string;
        coordinates: [number, number][];
        type: 'LineString';
    };
}
export type ICustomDrawLineStringMode = ICustomDrawMode<IDrawLineStringModeState>;
export declare const customDrawLineStringMode: ICustomDrawLineStringMode;
export {};
