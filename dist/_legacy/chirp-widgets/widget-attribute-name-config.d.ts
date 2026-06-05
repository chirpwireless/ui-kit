export type Attributes = {
    valueType?: 'totalValue' | 'lastValue';
    onlyGraphView?: boolean;
};
export type CurrentAttribute = {
    [key: string]: string | number | boolean | undefined;
};
export declare const widgetAttributeNameConfig: {
    [key: string]: Attributes;
};
