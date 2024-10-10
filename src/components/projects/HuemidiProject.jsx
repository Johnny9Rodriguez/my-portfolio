import React from 'react';
import {
    SiCss3,
    SiElectron,
    SiHtml5,
    SiJavascript,
    SiNodedotjs,
    SiPhilipshue,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si';
import { MdDownload } from 'react-icons/md';
import ProjectCardHeader from '../ProjectCardHeader';
import ProjectCardFooter from '../ProjectCardFooter';
import useAppStore from '../../stores/appStore';
import projectData from '../../data/projectData';

function HuemidiProject() {
    const { language } = useAppStore();

    const title = () => {
        return (
            <>
                <span className='font-light'>Hue</span>MIDI
            </>
        );
    };

    const iconSet = () => {
        return (
            <>
                <SiJavascript />
                <SiReact />
                <SiPhilipshue className='text-4xl' />
                <SiNodedotjs />
                <SiElectron />
                <SiTailwindcss />
                <SiHtml5 />
                <SiCss3 />
            </>
        );
    };

    const DownloadButton = ({ title, link }) => {
        return (
            <div className='flex gap-2 items-center'>
                <a
                    href={link}
                    download
                    className='flex items-center gap-2 pl-2 pr-3 py-0.5 rounded-xl bg-[#203562] hover:bg-[#1e579c] hover:cursor-pointer'
                >
                    <MdDownload />
                    <div>Download</div>
                </a>
                <span className='text-sm md:text-xs min-[840px]:text-sm text-white/60'>
                    {title}
                </span>
            </div>
        );
    };

    const colorSeparator = () => {
        return (
            <div className='flex-grow flex h-[4px]'>
                <div className='bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 w-1/6 h-full' />
                <div className='bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 w-1/6 h-full' />
                <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-1/6 h-full' />
                <div className='bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 w-1/6 h-full' />
                <div className='bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 w-1/6 h-full' />
                <div className='bg-gradient-to-r from-orange-500 to-rose-600 w-1/6 h-full' />
            </div>
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
            <div className='flex flex-col gap-4 px-2'>
                <div>{projectData.huemidi.description[language]}</div>
                <div className='flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-4'>
                    <img
                        src='images/huemidi-preview.png'
                        alt='huemidi-preview'
                        className='max-w-[420px] w-full rounded-xl border-2 border-white/20 self-center'
                    />
                    <div className='flex-grow flex flex-col justify-between gap-4'>
                        <div>{projectData.huemidi.prompt[language]}</div>
                        <div className='flex flex-col gap-2'>
                            <DownloadButton
                                title={'Windows Installer'}
                                link='https://joepytlik.de/data/apps/huemidi-electron.msi'
                            />
                            <DownloadButton
                                title={'macOS Apple Silicon'}
                                link='https://joepytlik.de/data/apps/huemidi-electron-darwin-arm64-1.0.0.zip'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='opacity-20' />
            <ProjectCardFooter
                github={'https://github.com/Johnny9Rodriguez/huemidi-electron'}
                youtube={'https://www.youtube.com/watch?v=f3KGScGA4Hc'}
                isLeftAligned={true}
            />
        </>
    );
}

export default HuemidiProject;
