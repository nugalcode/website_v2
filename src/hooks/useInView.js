import { useState, useEffect } from 'react'
/**
 *  Custom hook to determine if an element is visible in the viewport.
 *  params   @elementRef is an element reference
 *           @rootMargin is the pixel amount of the element that must be on screen to count the element as visible 
 * */

const useInView = ( elementRef, rootMargin ) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            }, {
                
                rootMargin: rootMargin,
                threshold: 1.0
                }
            );
        var temp = elementRef.current;
        elementRef.current && observer.observe(elementRef.current);

        return () => observer.unobserve(temp);
    }, [elementRef, rootMargin]);

    return isVisible;
};

export default useInView;
