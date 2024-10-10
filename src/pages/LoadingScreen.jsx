import React, { useEffect, useState, useRef } from 'react';
import useShaderStore from '../stores/shaderStore';
import useAppStore from '../stores/appStore';

function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [percentage, setPercentage] = useState(0);
    const loadingInterval = useRef(null);

    const { loadShaders, loadingLimit } = useShaderStore();
    const { setLanguage } = useAppStore();

    useEffect(() => {
        const languagePref = localStorage.getItem('language') || 'EN';
        setLanguage(languagePref);
    },[setLanguage])

    useEffect(() => {
        loadShaders();
    }, [loadShaders]);

    useEffect(() => {
        loadingInterval.current = setInterval(() => {
            setPercentage((prev) => (prev >= loadingLimit ? prev : prev + 1));
        }, 4);

        return () => {
            clearInterval(loadingInterval.current);
        };
    }, [loadingLimit]);

    useEffect(() => {
        if (percentage >= 100) {
            clearInterval(loadingInterval.current);
            loadingInterval.current = null;
            setIsLoading(false);
        }
    }, [percentage]);

    return (
        <div
            className='absolute top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-[#070b15] select-none'
            style={{
                opacity: !isLoading ? '0%' : '100%',
                transition: 'opacity 0.4s ease',
                pointerEvents: !isLoading ? 'none' : 'auto',
            }}
        >
            <div className='max-w-96 w-full p-8 flex flex-col'>
                <div className='w-full h-8 border border-[#1e579c]'>
                    <div
                        className='h-full bg-gradient-to-r from-[#0098db] to-[#0ce6f2] border-2 border-[#070b15]'
                        style={{
                            width: `${percentage}%`,
                        }}
                    />
                </div>
                <div className='w-full flex justify-between'>
                    <div>Loading...</div>
                    <div>{percentage + '%'}</div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;
