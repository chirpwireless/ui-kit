export type AttributeConverter = {
    convert: (value: number) => number;
    alternativeUnits: string;
};
export type Converter = {
    [key: string]: AttributeConverter;
};
export declare const converter: Converter;
