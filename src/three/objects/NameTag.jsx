import React from 'react';
import { Text3D } from '@react-three/drei';

function NameTag() {
    return (
        <Text3D
            font='fonts/Poppins_Regular.json'
            size={0.7}
            scale={[1, 1, 0.01]}
        >
            JOE PYTLIK
            <meshBasicMaterial attach='material' />
        </Text3D>
    );
}

export default NameTag;
