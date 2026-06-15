export interface UseBreakpointsResult {
    isSmallMobile: boolean;
    isMobile: boolean;
    isDesktop: boolean;
    isTablet: boolean;
    isExtraLarge: boolean;
}
export declare const useBreakpoints: () => UseBreakpointsResult;
