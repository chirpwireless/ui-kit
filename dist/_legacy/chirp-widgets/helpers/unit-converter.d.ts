export type AttributeConverter = {
    convert: (value: number) => number;
    alternativeUnits: string;
};
type Converter = {
    [key: string]: AttributeConverter;
};
export declare const converter: Converter;
export {};
