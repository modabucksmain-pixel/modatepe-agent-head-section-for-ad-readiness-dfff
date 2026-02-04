'use client';

import { useEffect } from 'react';

/**
 * Custom hook to lock/unlock body scroll
 * Useful for modals, mobile menus, etc.
 * @param isLocked - Whether to lock the scroll
 */
export function useScrollLock(isLocked: boolean): void {
    useEffect(() => {
        if (!isLocked) {
            return;
        }

        const originalStyle = window.getComputedStyle(document.body).overflow;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Lock scroll
        document.body.style.overflow = 'hidden';

        // Prevent layout shift by adding padding equal to scrollbar width
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = originalStyle;
            document.body.style.paddingRight = '';
        };
    }, [isLocked]);
}
