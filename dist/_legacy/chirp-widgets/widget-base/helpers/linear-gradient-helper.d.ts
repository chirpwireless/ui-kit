export declare class LinearGradientHelper {
    private gradientColors;
    context: CanvasRenderingContext2D | null;
    constructor(gradientColors: [string, number][]);
    getColor(percent: number): string | null;
    getGradientColors(): string;
}
