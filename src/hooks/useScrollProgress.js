import { useEffect, useState } from 'react';

function useScrollProgress(rootRef) {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (rootRef.current) {
                const elem = rootRef.current;
                const scrollTop = elem.scrollTop;
                const scrollHeight = elem.scrollHeight - elem.clientHeight;
                if (scrollHeight !== 0) {
                    setScrollPercent(scrollTop / scrollHeight);
                } else {
                    setScrollPercent(0);
                }
            }
        };

        const scrollElement = rootRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
        }

        handleScroll();

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, [rootRef]);

    return scrollPercent;
}

export default useScrollProgress;
