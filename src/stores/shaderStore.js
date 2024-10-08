import { create } from 'zustand';

const useShaderStore = create((set) => ({
    shaders: {},
    loadingLimit: 0,
    loadShaders: async () => {
        const shaderList = [
            {
                name: 'professionTagVert',
                path: '/shaders/professiontag.vert',
            },
            {
                name: 'professionTagFrag',
                path: '/shaders/professiontag.frag',
            },
            { name: 'testVert', path: '/shaders/test.vert' },
            { name: 'testFrag', path: '/shaders/test.frag' },
        ];

        const totalShaders = shaderList.length;
        let loadedShaders = 0;
        const shaders = {};

        for (const shader of shaderList) {
            const shaderCode = await fetch(shader.path).then((res) =>
                res.text()
            );
            loadedShaders += 1;
            shaders[shader.name] = shaderCode;
            set({
                shaders,
                loadingLimit: (loadedShaders / totalShaders) * 100,
            });
        }
    },
}));

export default useShaderStore;
