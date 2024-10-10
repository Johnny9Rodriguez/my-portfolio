import React from 'react';
import { Canvas } from '@react-three/fiber';
import CamLook from '../components/CamLook';
import HomeTag from './objects/HomeTag';
import Cube from '../components/Cube';
import Blob from '../components/Blob';
import { blueBubble, bgBubble } from '../utils/colorSets';

function BackgroundCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 15] }}>
            <CamLook />
            <HomeTag />
            <Blob colors={blueBubble} radius={9} />
            <Cube
                colors={bgBubble}
                distance={{ max: 24, min: 4 }}
                radius={18}
            />
        </Canvas>
    );
}

export default BackgroundCanvas;
