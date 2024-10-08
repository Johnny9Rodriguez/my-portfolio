export function lerp(a, b, t) {
    return a + t * (b - a);
}

export function smoothstep(a, b, t) {
    return a + (b - a) * (t * t * (3 - 2 * t));
}
