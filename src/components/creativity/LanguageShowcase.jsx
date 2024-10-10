import React from 'react';
import ProjectCardHeader from '../ProjectCardHeader';
import useAppStore from '../../stores/appStore';
import creativityData from '../../data/creativityData';
import { GB, FR, ES } from 'country-flag-icons/react/3x2';
import { CgExternal } from 'react-icons/cg';

function LanguageShowcase() {
    const { language } = useAppStore();

    const iconSet = () => {
        return (
            <>
                <GB title='english' className='w-8 h-6' />
                <FR title='english' className='w-8 h-6' />
                <ES title='english' className='w-8 h-6' />
            </>
        );
    };

    const colorSeparator = () => {
        return (
            <div className='flex-grow h-[4px] bg-gradient-to-l to-yellow-400 from-orange-500' />
        );
    };

    const ImageLink = ({ website }) => {
        return (
            <a
                href={website}
                target='_blank'
                rel='noopener noreferrer'
                className='relative max-w-[320px] hover:cursor-pointer text-black hover:text-[#0ce6f2]'
            >
                <img
                    className='rounded-xl border-2 border-white/20'
                    src='images/italki-preview.png'
                    alt='pencil-preview'
                />
                <CgExternal className='absolute top-0 right-0 p-2 text-5xl drop-shadow-md shadow-white' />
            </a>
        );
    };

    return (
        <>
            <ProjectCardHeader
                title={creativityData.learning.title[language]}
                iconSet={iconSet()}
                isLeftAligned={true}
                colorSeparator={colorSeparator()}
            />
            <hr className='opacity-20' />
            <div className='flex flex-col gap-4 px-2'>
                <div>{creativityData.learning.p1[language]}</div>
                <div className='flex flex-col md:grid md:grid-cols-[1fr_320px] items-center md:items-start gap-4'>
                    <div>{creativityData.learning.p2[language]}</div>
                    <ImageLink
                        website={'https://www.italki.com/en/teacher/6125292'}
                    />
                </div>
                <div>{creativityData.learning.p3[language]}</div>
                <hr className='opacity-20' />
                <div className='flex gap-2.5 items-center'>
                    <div className='text-base font-light text-white/60'>
                        iTalki Teacher Profile
                    </div>

                    <a
                        href={'https://www.italki.com/en/teacher/6125292'}
                        className='text-2xl hover:text-[#0ce6f2]'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src='images/italki-logo.png'
                            alt='italki'
                            className='w-7 h-7 saturate-0 hover:saturate-100'
                        />
                    </a>
                </div>
            </div>
        </>
    );
}

export default LanguageShowcase;
