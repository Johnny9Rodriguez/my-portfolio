import React, { useRef, useState } from 'react';
import { Float, Center } from '@react-three/drei';
import NameTag from './NameTag';
import ProfessionTag from './ProfessionTag';
import HomeTagAnimation from '../animations/HomeTagAnimation';
import HomeTagResponsive from '../animations/HomeTagResponsive';

function HomeTag() {
    const [position, setPosition] = useState([0, 1, 10]);
    const [scale, setScale] = useState(1);
    const objectRef = useRef(null);

    return (
        <mesh ref={objectRef} position={position} scale={scale}>
            <Center>
                <Float rotationIntensity={0}>
                    <NameTag />
                    <ProfessionTag />
                </Float>
            </Center>
            <HomeTagAnimation objectRef={objectRef} position={position} />
            <HomeTagResponsive setPosition={setPosition} setScale={setScale} />
        </mesh>
    );
}

export default HomeTag;
