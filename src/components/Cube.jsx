import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { hexToRgb } from '../utils/colorHelpers';

function Cube({ colors, distance, radius, id }) {
    const meshRef = useRef(null);
    const [shaderMaterial, setShaderMaterial] = useState(null);

    useEffect(() => {
        const loadShaders = async () => {
            const vertexShader = await fetch('/shaders/test.vert').then((res) =>
                res.text()
            );
            const fragmentShader = await fetch('/shaders/test.frag').then(
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
                    uColorLow: { value: hexToRgb(colors.lo) },
                    uColorMid: { value: hexToRgb(colors.md) },
                    uColorHigh: { value: hexToRgb(colors.hi) },
                    uMaxDist: { value: distance.max },
                    uMinDist: { value: distance.min },
                },
                transparent: true,
            });

            setShaderMaterial(material);
        };

        loadShaders();
    }, [colors, distance]);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.02;
            meshRef.current.rotation.y += delta * 0.02;
            shaderMaterial.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    return (
        shaderMaterial && (
            <points ref={meshRef} material={shaderMaterial}>
                <icosahedronGeometry args={[radius, 60]} />
            </points>
        )
    );
}

export default Cube;
