import React from 'react';
import ProjectCardHeader from '../ProjectCardHeader';
import useAppStore from '../../stores/appStore';
import creativityData from '../../data/creativityData';
import { SiBlender, SiCsharp, SiUnity } from 'react-icons/si';

function GameShowcase() {
    const { language } = useAppStore();

    const iconSet = () => {
        return (
            <>
                <SiCsharp />
                <SiUnity />
                <SiBlender />
            </>
        );
    };

    const colorSeparator = () => {
        return (
            <div className='flex-grow h-[4px] bg-gradient-to-l from-purple-600 to-sky-500' />
        );
    };

    return (
        <>
            <ProjectCardHeader
                title={'Game Design & Development'}
                iconSet={iconSet()}
                isLeftAligned={true}
                colorSeparator={colorSeparator()}
            />
            <hr className='opacity-20' />
            <div className='flex flex-col gap-4 px-2'>
                <div>{creativityData.game.p1[language]}</div>
                <div>{creativityData.game.p2[language]}</div>
                <img
                    src='images/mantis-preview.gif'
                    alt='game-preview'
                    className='brightness-125 rounded-xl border-2 border-white/20'
                />
                <div>{creativityData.game.p3[language]}</div>
                <div>{creativityData.game.p4[language]}</div>
                <img
                    src='images/jv1080_render.png'
                    alt='jv1080'
                    className='rounded-xl border-2 border-white/20'
                />
            </div>
        </>
    );
}

export default GameShowcase;
