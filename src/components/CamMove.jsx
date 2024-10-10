import {
    useAnimationStore,
    animTargets,
    smoothLerpPosition,
} from '../stores/animStore';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

function CamMove() {
    const { animState } = useAnimationStore();

    let currentPosition = useRef(null);

    useEffect(() => {
        currentPosition.current = animTargets[animState].cameraPos.start;
    }, [animState]);

    useFrame((state, delta) => {
        const { camera } = state;

        currentPosition.current = smoothLerpPosition(
            'cameraPos',
            camera,
            currentPosition.current,
            delta * 10
        );
    });
}

export default CamMove;
