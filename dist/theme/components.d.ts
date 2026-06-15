import { Components, Theme } from '../../node_modules/@mui/material/styles';
import { ChirpPaletteOptions } from './palette';
type ComponentCreator = (palette: ChirpPaletteOptions | undefined) => Components<Theme>;
export declare const createComponents: ComponentCreator;
export {};
