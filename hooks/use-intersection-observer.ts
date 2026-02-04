'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

/**
 * Custom hook for Intersection Observer API
 * Useful for lazy loading, scroll animations, infinite scroll, etc.
 * @param options - IntersectionObserver options
 * @returns [ref, isIntersecting, entry]
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>(
    options: UseIntersectionObserverOptions = {}
): [React.RefObject<T>, boolean, IntersectionObserverEntry | null] {
    const {
        threshold = 0,
        root = null,
        rootMargin = '0px',
        freezeOnceVisible = false,
    } = options;

    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<T>(null);
    const frozen = useRef(false);

    useEffect(() => {
        const node = ref?.current;
        if (!node || frozen.current) return;

        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                setEntry(entry);
                setIsIntersecting(entry.isIntersecting);

                if (entry.isIntersecting && freezeOnceVisible) {
                    frozen.current = true;
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
            frozen.current = false;
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    return [ref, isIntersecting, entry];
}
