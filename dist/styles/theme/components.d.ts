import { ThemeOptions } from '@mui/material';
type ComponentCreator = (palette: ThemeOptions['palette']) => ThemeOptions['components'];
export declare const createComponents: ComponentCreator;
export {};
