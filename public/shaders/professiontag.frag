precision lowp float;

uniform float uTime;
uniform vec3 uColorOne;
uniform vec3 uColorTwo;
varying float vNoise;

void main() {
    vec3 color = mix(uColorOne, uColorTwo, vNoise);
    gl_FragColor = vec4(color, 1.0);
}