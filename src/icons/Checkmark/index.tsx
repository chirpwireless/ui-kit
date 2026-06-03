import type { FC, SVGProps } from 'react';

export const Checkmark: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M5.8125 9.5625L7.5 11.4375L12.1875 6.5625"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
