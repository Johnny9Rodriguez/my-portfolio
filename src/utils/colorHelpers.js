import hexRgb from 'hex-rgb';

export function hexToRgb(hex) {
    const rgb = hexRgb(hex);
    return [rgb.red / 255, rgb.green / 255, rgb.blue / 255];
}
