type SetCookieArgs = {
    name: string;
    value: string;
    days?: number;
    isRootDomain?: boolean;
    path?: string;
};
export declare const setCookie: ({ name, value, days, isRootDomain, path, }: SetCookieArgs) => void;
export {};
