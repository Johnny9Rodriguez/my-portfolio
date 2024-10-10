import { lerp, smoothstep } from '../utils/mathHelpers';

const vectorLerp = (prop, t, current, step) => {
    const targetX = lerp(prop.start[0], prop.end[0], t);
    const targetY = lerp(prop.start[1], prop.end[1], t);
    const targetZ = lerp(prop.start[2], prop.end[2], t);

    let newPosition = [];

    newPosition[0] = smoothstep(current[0], targetX, step);
    newPosition[1] = smoothstep(current[1], targetY, step);
    newPosition[2] = smoothstep(current[2], targetZ, step);

    return newPosition;
};

export const lerpDistance = (data, current, step, scrollRatio) => {
    const start = data.distance.start;
    const end = data.distance.end;

    const targetMin = lerp(start.min, end.min, scrollRatio);
    const targetMax = lerp(start.max, end.max, scrollRatio);

    const distance = current.distance;

    const newMin = smoothstep(distance.min, targetMin, step);
    const newMax = smoothstep(distance.max, targetMax, step);

    return { distance: { min: newMin, max: newMax } };
};

export const smoothLerpPosition = (
    object,
    current,
    data,
    step,
    scrollRatio
) => {
    const newPosition = vectorLerp(
        data.position,
        scrollRatio,
        current.position,
        step
    );

    object.position.x = newPosition[0];
    object.position.y = newPosition[1];
    object.position.z = newPosition[2];

    const newRotation = vectorLerp(
        data.rotation,
        scrollRatio,
        current.rotation,
        step
    );

    object.rotation.x = newRotation[0];
    object.rotation.y = newRotation[1];
    object.rotation.z = newRotation[2];

    return { position: newPosition, rotation: newRotation };
};

export const animTargets = {
    home: {
        blob: {
            position: {
                start: [3, 0, 0],
                end: [10, 0, 7],
            },
            rotation: {
                start: [0, 0, 0],
                end: [0, Math.PI / 7, 0],
            },
            distance: {
                start: {
                    min: 6,
                    max: 14,
                },
                end: {
                    min: 2,
                    max: 10,
                },
            },
        },
    },
    projects: {
        blob: {
            position: {
                start: [-5, 4, 4],
                end: [6, -4, 2],
            },
            rotation: {
                start: [Math.PI / 4, 0, 0],
                end: [(2 * Math.PI) / 8, Math.PI / 7, 0],
            },
            distance: {
                start: {
                    min: 8,
                    max: 12,
                },
                end: {
                    min: 8,
                    max: 12,
                },
            },
        },
    },
    creativity: {
        blob: {
            position: {
                start: [0, 3, 3],
                end: [-1.5, -5, 5],
            },
            rotation: {
                start: [Math.PI / 8, 0, 0],
                end: [0, 0, Math.PI / 5],
            },
            distance: {
                start: {
                    min: 5,
                    max: 9.5,
                },
                end: {
                    min: 4,
                    max: 8,
                },
            },
        },
    },
    contact: {
        blob: {
            position: {
                start: [7, 2, 4],
                end: [0, -4, 4],
            },
            rotation: {
                start: [0, -Math.PI / 2, 0],
                end: [0, 0, Math.PI / 5],
            },
            distance: {
                start: {
                    min: 4,
                    max: 9.5,
                },
                end: {
                    min: 5,
                    max: 10,
                },
            },
        },
    },
};
