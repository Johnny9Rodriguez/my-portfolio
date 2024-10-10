import React from 'react';
import { SiCsharp, SiDotnet, SiHtml5, SiNginx } from 'react-icons/si';
import ProjectCardHeader from '../ProjectCardHeader';
import ProjectCardFooter from '../ProjectCardFooter';
import useAppStore from '../../stores/appStore';
import projectData from '../../data/projectData';
import useWindowWidth from '../../hooks/useWindowWidth';

function MailProject() {
    const windowWidth = useWindowWidth();
    const { language } = useAppStore();

    const title = () => {
        if (windowWidth < 720 && windowWidth >= 640) return 'HTML Mail';

        return (
            <>
                HTML Mail{' '}
                <span className='font-light text-xl text-white/60'>
                    Microservice
                </span>
            </>
        );
    };

    const iconSet = () => {
        return (
            <>
                <SiCsharp />
                <SiDotnet className='text-4xl' />
                <SiNginx />
                <SiHtml5 />
            </>
        );
    };

    const ImageLink = () => {
        return (
            <div className='relative max-w-[320px]'>
                <img
                    className='rounded-xl border-2 border-white/20'
                    src='images/mail-preview.png'
                    alt='portfolio-preview'
                />
            </div>
        );
    };

    const colorSeparator = () => {
        return (
            <div className='flex-grow h-[4px] bg-gradient-to-l from-slate-500 to-white' />
        );
    };
    return (
        <>
            <ProjectCardHeader
                title={title()}
                iconSet={iconSet()}
                isLeftAligned={true}
                colorSeparator={colorSeparator()}
            />
            <hr className='opacity-20' />
            <div className='px-2'>
                <div className='flex flex-col md:grid md:grid-cols-[1fr_320px] items-center md:items-start gap-4'>
                    <div className='flex-grow'>
                        {projectData.mail.description[language]}
                    </div>
                    <ImageLink />
                </div>
            </div>
            <hr className='opacity-20' />
            <ProjectCardFooter
                github={'https://github.com/Johnny9Rodriguez/mail-service'}
                isLeftAligned={true}
            />
        </>
    );
}

export default MailProject;
