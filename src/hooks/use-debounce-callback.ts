import { useCallback, useRef } from 'react';

export const useDebounceCallback = (callback: (() => void) | undefined, delay: number): (() => void) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    return useCallback(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            callback?.();
        }, delay);
    }, [callback, delay]);
};
