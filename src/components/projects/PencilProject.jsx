import React from 'react';
import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiNodedotjs,
    SiPassport,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si';
import { CgExternal } from 'react-icons/cg';
import ProjectCardHeader from '../ProjectCardHeader';
import ProjectCardFooter from '../ProjectCardFooter';
import useWindowWidth from '../../hooks/useWindowWidth';
import useAppStore from '../../stores/appStore';
import projectData from '../../data/projectData';

function PencilProject() {
    const windowWidth = useWindowWidth();
    const { language } = useAppStore();

    const title = () => {
        if (windowWidth < 720 && windowWidth >= 640) return 'Pencil';

        return (
            <>
                Pencil{' '}
                <span className='font-light text-xl text-white/60'>Note-Taking App</span>
            </>
        );
    };

    const iconSet = () => {
        return (
            <>
                <SiJavascript />
                <SiReact />
                <SiNodedotjs />
                <SiPostgresql />
                <SiPassport />
                <SiTailwindcss />
                <SiHtml5 />
                <SiCss3 />
            </>
        );
    };

    const ImageLink = ({ website }) => {
        return (
            <a
                href={website}
                target='_blank'
                rel='noopener noreferrer'
                className='relative max-w-[320px] hover:cursor-pointer hover:text-[#0ce6f2]'
            >
                <img
                    className='rounded-xl border-2 border-white/20'
                    src='images/pencil-preview.png'
                    alt='pencil-preview'
                />
                <CgExternal className='absolute top-0 right-0 p-2 text-5xl' />
            </a>
        );
    };

    const colorSeparator = () => {
        return <div className='flex-grow h-[4px] bg-[#00c6b1]' />;
    };

    return (
        <>
            <ProjectCardHeader
                title={title()}
                iconSet={iconSet()}
                isLeftAligned={false}
                colorSeparator={colorSeparator()}
            />
            <hr className='opacity-20' />
            <div className='px-2'>
                <div className='flex flex-col items-center md:items-start md:grid md:grid-cols-[1fr_300px] gap-4'>
                    <div className='flex-grow'>
                        {projectData.pencil.description[language]}
                    </div>
                    <ImageLink website={'https://pencil.joepytlik.de'} />
                </div>
            </div>
            <hr className='opacity-20' />
            <ProjectCardFooter
                github={'https://github.com/Johnny9Rodriguez/pencil-note-app'}
                website={'https://pencil.joepytlik.de'}
                isLeftAligned={false}
            />
        </>
    );
}

export default PencilProject;
