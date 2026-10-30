import { CSSObject, ThemeOptions } from '@mui/material';
declare module '@mui/material/styles' {
    interface Mixins {
        linearBackground?: CSSObject;
    }
}
export declare const themeMixins: ThemeOptions;
