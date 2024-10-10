import { useState, useEffect } from 'react';

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [normalizedMousePosition, setNormalizedMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });

            const normalizedX = event.clientX / window.innerWidth;
            const normalizedY = event.clientY / window.innerHeight;
            setNormalizedMousePosition({ x: normalizedX, y: normalizedY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return { mousePosition, normalizedMousePosition };
}

export default useMousePosition;
