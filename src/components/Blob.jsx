import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { hexToRgb } from '../utils/colorHelpers';
import { smoothLerpPosition, lerpDistance } from '../stores/animStore';
import useAnimState from '../hooks/useAnimState';
import useAppStore from '../stores/appStore';

function Blob({ colors, radius }) {
    const meshRef = useRef(null);
    const [shaderMaterial, setShaderMaterial] = useState(null);
    const currentData = useRef({
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        distance: { min: 8, max: 12 },
    });
    const { scrollRatio } = useAppStore();

    const data = useAnimState();

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
                    uMinDist: { value: currentData.current.distance.min },
                    uMaxDist: { value: currentData.current.distance.max },
                },
                transparent: true,
            });

            setShaderMaterial(material);
        };

        loadShaders();
    }, [colors, currentData]);

    useFrame((state, delta) => {
        if (meshRef.current) {
            shaderMaterial.uniforms.uTime.value = state.clock.getElapsedTime();

            const { position, rotation } = smoothLerpPosition(
                meshRef.current,
                currentData.current,
                data,
                delta * 7,
                scrollRatio
            );

            const { distance } = lerpDistance(
                data,
                currentData.current,
                delta * 7,
                scrollRatio
            );
            shaderMaterial.uniforms.uMinDist.value = distance.min;
            shaderMaterial.uniforms.uMaxDist.value = distance.max;

            currentData.current = { position, rotation, distance };
        }
    });

    return (
        shaderMaterial && (
            <points ref={meshRef} material={shaderMaterial}>
                <icosahedronGeometry args={[radius, 40]} />
            </points>
        )
    );
}

export default Blob;
