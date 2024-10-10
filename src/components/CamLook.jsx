import useMousePosition from '../hooks/useMousePosition';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { lerp, smoothstep } from '../utils/mathHelpers';
import useWindowWidth from '../hooks/useWindowWidth';

function CamLook() {
    const { normalizedMousePosition } = useMousePosition();

    const windowWidth = useWindowWidth();
    const intensity = 0.5;

    let currentX = useRef(0);
    let currentY = useRef(0);

    useFrame((state) => {
        const { camera } = state;

        const targetX = lerp(-intensity, intensity, normalizedMousePosition.x);
        const targetY = lerp(intensity, -intensity, normalizedMousePosition.y);

        currentX.current = smoothstep(currentX.current, targetX, 0.1);
        currentY.current = smoothstep(currentY.current, targetY, 0.1);

        if (windowWidth > 720) {
            camera.lookAt(
                new THREE.Vector3(currentX.current, currentY.current, 0)
            );
        } else {
            camera.lookAt(new THREE.Vector3(0, 0, 0));
        }
    });
}

export default CamLook;
