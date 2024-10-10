import React from 'react';
import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiThreedotjs,
    SiWebgl,
} from 'react-icons/si';
import ProjectCardHeader from '../ProjectCardHeader';
import ProjectCardFooter from '../ProjectCardFooter';
import useAppStore from '../../stores/appStore';
import projectData from '../../data/projectData';

function PortfolioProject() {
    const { language } = useAppStore();

    const iconSet = () => {
        return (
            <>
                <SiJavascript />
                <SiReact />
                <SiThreedotjs />
                <SiWebgl className='text-5xl' />
                <SiTailwindcss />
                <SiHtml5 />
                <SiCss3 />
            </>
        );
    };

    const ImageLink = () => {
        return (
            <div
                className='relative max-w-[420px]'
            >
                <img
                    className='rounded-xl border-2 border-white/20'
                    src='images/portfolio-preview.png'
                    alt='portfolio-preview'
                />
            </div>
        );
    };

    const colorSeparator = () => {
        return <div className='flex-grow h-[4px] bg-gradient-to-l from-[#0098db] to-[#0ce6f2]' />;
    };
    return (
        <>
            <ProjectCardHeader
                title={'Portfolio'}
                iconSet={iconSet()}
                isLeftAligned={true}
                colorSeparator={colorSeparator()}
            />
            <hr className='opacity-20' />
            <div className='px-2'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex-grow'>
                        {projectData.portfolio.description[language]}
                    </div>
                    <ImageLink website={'https://pencil.joepytlik.de'} />
                </div>
            </div>
            <hr className='opacity-20' />
            <ProjectCardFooter
                github={'https://github.com/Johnny9Rodriguez/my-portfolio'}
                isLeftAligned={true}
            />
        </>
    );
}

export default PortfolioProject;
