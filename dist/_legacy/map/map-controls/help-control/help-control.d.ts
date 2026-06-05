import { Palette } from '../../../../../node_modules/@mui/material/styles';
/** Control кнопки с вопросом на карте */
export declare class HelpControl {
    container: HTMLDivElement | undefined;
    map: mapboxgl.Map | undefined;
    palette: Palette;
    locationItem: HTMLDivElement | undefined;
    trackerItem: HTMLDivElement | undefined;
    private handleMouseEnter;
    private handleMouseLeave;
    constructor(palette: Palette);
    private showMenu;
    private hideMenu;
    updatePalette(palette: Palette): void;
    onAdd(map: mapboxgl.Map): HTMLDivElement;
    onRemove(): void;
}
