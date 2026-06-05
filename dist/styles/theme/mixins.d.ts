import { CSSObject, ThemeOptions } from '@mui/material';
declare module '../../../node_modules/@mui/material/styles/createMixins' {
    interface Mixins {
        linearBackground?: CSSObject;
    }
}
export declare const themeMixins: ThemeOptions;
