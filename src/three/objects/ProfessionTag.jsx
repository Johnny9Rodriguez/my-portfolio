import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import * as THREE from 'three';
import { hexToRgb } from '../../utils/colorHelpers';

function ProfessionTag() {
    const [shaderMaterial, setShaderMaterial] = useState(null);
    const tagRef = useRef(null);

    useEffect(() => {
        const loadShaders = async () => {
            const vertexShader = await fetch('/shaders/professionTag.vert').then((res) =>
                res.text()
            );
            const fragmentShader = await fetch('/shaders/professionTag.frag').then(
                (res) => res.text()
            );

            const material = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    uTime: { value: 0.0 },
                    uResolution: {
                        value: new THREE.Vector2(
                            window.innerWidth,
                            window.innerHeight
                        ),
                    },
                    uColorOne: { value: hexToRgb('#0ce6f2') },
                    uColorTwo: { value: hexToRgb('#0098db') },
                },
            });

            setShaderMaterial(material);
        };
        loadShaders();
    }, []);

    useFrame((state) => {
        if (tagRef.current) {
            shaderMaterial.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    return (
        <>
            {shaderMaterial && (
                <Text3D
                    ref={tagRef}
                    font='fonts/Poppins_Bold.json'
                    size={0.4}
                    scale={[1, 1, 0.01]}
                    position={[0, -0.5, 0]}
                    material={shaderMaterial}
                >
                    FULL STACK DEVELOPER
                </Text3D>
            )}
        </>
    );
}

export default ProfessionTag;
