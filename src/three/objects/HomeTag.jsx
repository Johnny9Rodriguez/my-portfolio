import React, { useEffect, useRef, useState } from 'react';
import { Float, Center } from '@react-three/drei';
import NameTag from './NameTag';
import ProfessionTag from './ProfessionTag';
import HomeTagAnimation from '../animations/HomeTagAnimation';
import { useThree } from '@react-three/fiber';

function HomeTag() {
    const [position, setPosition] = useState([-1, 1, 10]);
    const [scaleFactor, setScaleFactor] = useState(10);
    const objectRef = useRef(null);

    const viewport = useThree((state) => state.viewport);

    useEffect(() => {
        if (viewport.width > 30) {
            setPosition([-1, 1, 10]);
            setScaleFactor(6);
        } else {
            setPosition([-0, 1, 10]);
            setScaleFactor(5);
        }
    }, [viewport.width]);

    return (
        <mesh ref={objectRef}>
            <Center
                onCentered={({ container, width }) => {
                    container.scale.setScalar(
                        viewport.width / (width * scaleFactor)
                    );
                }}
            >
                <Float rotationIntensity={0}>
                    <NameTag />
                    <ProfessionTag />
                </Float>
            </Center>
            <HomeTagAnimation
                objectRef={objectRef}
                position={position}
                viewport={viewport}
            />
        </mesh>
    );
}

export default HomeTag;
