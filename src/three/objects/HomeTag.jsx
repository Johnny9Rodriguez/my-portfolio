import React, { useRef } from 'react';
import { Float, Center } from '@react-three/drei';
import NameTag from './NameTag';
import ProfessionTag from './ProfessionTag';
import HomeTagAnimation from '../animations/HomeTagAnimation';

function HomeTag() {
    const objectRef = useRef(null);

    return (
        <mesh ref={objectRef} position={[0, 1, 10]}>
            <Center>
                <Float rotationIntensity={0}>
                    <NameTag />
                    <ProfessionTag />
                </Float>
            </Center>
            <HomeTagAnimation objectRef={objectRef} />
        </mesh>
    );
}

export default HomeTag;
