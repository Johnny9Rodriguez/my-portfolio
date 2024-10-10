import React from 'react';
import ProjectCardHeader from '../ProjectCardHeader';
import useAppStore from '../../stores/appStore';
import MusicPlayer from '../music-player/MusicPlayer';
import creativityData from '../../data/creativityData';
import { GrDocumentPdf } from 'react-icons/gr';

function MusicShowcase() {
    const { language } = useAppStore();

    const iconSet = () => {
        return (
            <>
                <img
                    src='images/cubase-logo.png'
                    alt='cubase'
                    className='w-7 h-7'
                />
            </>
        );
    };

    const colorSeparator = () => {
        return (
            <div className='flex-grow h-[4px] bg-gradient-to-l from-red-500 to-red-600' />
        );
    };

    return (
        <>
            <ProjectCardHeader
                title={'Music & Audio Engineering'}
                iconSet={iconSet()}
                isLeftAligned={false}
                colorSeparator={colorSeparator()}
            />
            <hr className='opacity-20' />
            <div className='flex flex-col gap-4 px-2'>
                <img
                    className='w-full rounded-xl border-2 border-white/20'
                    src='images/music-panorama.png'
                    alt='portfolio-preview'
                />
                <div>{creativityData.music.p1[language]}</div>
                <div>{creativityData.music.p2[language]}</div>
                <div className='flex flex-col md:grid md:grid-cols-[340px_1fr] items-center gap-4'>
                    <img
                        className='w-full rounded-xl border-2 border-white/20'
                        src='images/studio-synths.png'
                        alt='portfolio-preview'
                    />
                    <div>{creativityData.music.p3[language]}</div>
                </div>
                <div>{creativityData.music.p4[language]}</div>
                <div>{creativityData.music.p5[language]}</div>
                <div>{creativityData.music.p6[language]}</div>
                <MusicPlayer />
                <hr className='opacity-20' />
                <div className='flex justify-end gap-2 items-center'>
                    <a
                        href={'https://joepytlik.de/data/misc/facharbeit.pdf'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-3 py-0.5 rounded-xl bg-[#203562] hover:bg-[#1e579c] hover:cursor-pointer'
                    >
                        <GrDocumentPdf />
                        <div>{creativityData.music.thesis[language]}</div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default MusicShowcase;
