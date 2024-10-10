import { useState, useEffect } from 'react';
import { animTargets } from '../stores/animStore';
import useAppStore from '../stores/appStore';

function useAnimState() {
    const [data, setData] = useState(null);

    const { routerPath } = useAppStore();

    useEffect(() => {
        const data = animTargets[routerPath].blob;
        setData(data);
    }, [routerPath]);

    return data;
}

export default useAnimState;
