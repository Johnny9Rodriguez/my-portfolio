import { useEffect } from 'react';
import useAppStore from '../stores/appStore';

function useLoadAssets() {
    const { addShader, setMaxLoadingProgress } = useAppStore();

    useEffect(() => {
        const loadShaders = async () => {
            const shaders = [
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

            const totalShaders = shaders.length;
            let loadedShaders = 0;

            for (const shader of shaders) {
                const shaderCode = await fetch(shader.path).then((res) =>
                    res.text()
                );
                addShader({ [shader.name]: shaderCode });
                loadedShaders += 1;
                setMaxLoadingProgress((loadedShaders / totalShaders) * 100);
            }
        };

        loadShaders();
    }, [addShader, setMaxLoadingProgress]);
}

export default useLoadAssets;
