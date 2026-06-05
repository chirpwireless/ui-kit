export declare const arrayToMap: <T extends Record<K, string | number>, K extends keyof T>(arr: T[], key: K) => Record<T[K], T>;
