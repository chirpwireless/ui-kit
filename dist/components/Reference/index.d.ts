import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
type ReferenceProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & {
    isExternalLink?: boolean;
};
export declare const Reference: FC<ReferenceProps>;
export {};
