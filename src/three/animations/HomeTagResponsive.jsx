import { useEffect } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { lerp } from 'three/src/math/MathUtils.js';

function HomeTagResponsive({ setPosition, setScale }) {
    const windowWidth = useWindowWidth();

    useEffect(() => {
        const minPosition = [2.8, 1, 10];
        const maxPosition = [0, 1, 10];
        const minScale = 0.6;
        const maxScale = 1;

        if (windowWidth > 1400) {
            setPosition(maxPosition);
            setScale(maxScale);
        } else if (windowWidth >= 400) {
            const t = (windowWidth - 400) / 1000;
            const x = lerp(minPosition[0], maxPosition[0], t);

            const newPosition = [x, 1, 10];
            setPosition(newPosition);

            const newScale = lerp(minScale, maxScale, t);
            setScale(newScale);
        } else {
            setPosition(minPosition);
            setScale(minScale);
        }
    }, [windowWidth, setPosition, setScale]);

    return null;
}

export default HomeTagResponsive;
