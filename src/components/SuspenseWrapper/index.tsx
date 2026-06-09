import { ReactNode, Suspense } from 'react';

import { PageLoader } from '../PageLoader';

interface SuspenseWrapperProps {
    children: ReactNode;
}

export const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => (
    <Suspense fallback={<PageLoader />}>{children}</Suspense>
);
