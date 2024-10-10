import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import useMousePosition from '../../hooks/useMousePosition';
import useAppStore from '../../stores/appStore';
import { lerp, smoothstep } from '../../utils/mathHelpers';

function HomeTagAnimation({ objectRef, position, setOffset, viewport }) {
    const { normalizedMousePosition } = useMousePosition();
    const { routerPath, scrollRatio } = useAppStore();

    const intensity = 0.5;

    let currentX = useRef(0);
    let currentY = useRef(0);

    useFrame((_state, delta) => {
        if (objectRef.current) {
            const targetX = lerp(
                -intensity,
                intensity,
                normalizedMousePosition.x
            );
            const targetY =
                routerPath === 'home' ? lerp(1, 10, scrollRatio) : '10';

            currentX.current = smoothstep(
                currentX.current,
                targetX,
                delta * 12
            );
            currentY.current = smoothstep(
                currentY.current,
                targetY,
                delta * 12
            );

            if (viewport.width > 30) {
                objectRef.current.position.x = position[0] + currentX.current;
            }
            objectRef.current.position.y = currentY.current;
            objectRef.current.position.z = position[2];
        }
    });

    return null;
}

export default HomeTagAnimation;
