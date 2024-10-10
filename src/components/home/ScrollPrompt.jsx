import React from 'react';
import { RiArrowDownWideFill } from 'react-icons/ri';
import useAppStore from '../../stores/appStore';

function ScrollPrompt() {
    const { scrollRatio, language } = useAppStore();

    const text = () => {
        return language === 'EN' ? 'Scroll Down' : 'Nach unten scrollen'
    }

    return (
        <div className='h-dvh flex justify-center items-end'>
            <div
                className={`mb-32 xl:mb-16 flex flex-col justify-center items-center animate-bounce-slow ${
                    scrollRatio > 0.2 ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                    transition: 'opacity 0.4s ease-in-out',
                }}
            >
                <div className='font-light bg-black/60 px-2 py-0.5 rounded-xl'>
                    {text()}
                </div>
                <RiArrowDownWideFill className='text-2xl' />
            </div>
        </div>
    );
}

export default ScrollPrompt;
