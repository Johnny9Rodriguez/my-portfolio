precision lowp float;

uniform vec2 uResolution;
uniform vec3 uColorLow;
uniform vec3 uColorMid;
uniform vec3 uColorHigh;
uniform float uMaxDist;
uniform float uMinDist;
varying float vNoise;
varying vec3 vPositionViewSpace;

void main() {
    vec3 color;

    if(vNoise < 0.0) {
        float t = 1.0 + vNoise;
        color = mix(uColorLow, uColorMid, smoothstep(0.2, 1.0, t));
    } else {
        color = mix(uColorMid, uColorHigh, smoothstep(0.0, 0.8, vNoise));
    }

    vec2 pointCoord = gl_PointCoord - vec2(0.5);
    float distance = length(pointCoord);

    if(distance > 0.5) {
        discard;
    }

    float depth = length(vPositionViewSpace);
    float alpha;

    if(depth > uMaxDist) {
        alpha = 0.0;
    } else if(depth > uMinDist) {
        alpha = (uMaxDist - depth) / (uMaxDist - uMinDist);
    } else {
        alpha = 1.0;
    }

    gl_FragColor = vec4(color, alpha);
}