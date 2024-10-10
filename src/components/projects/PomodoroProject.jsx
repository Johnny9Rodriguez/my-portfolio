import React from 'react';
import {
    SiCss3,
    SiElectron,
    SiHtml5,
    SiJavascript,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
} from 'react-icons/si';
import { MdDownload } from 'react-icons/md';
import ProjectCardHeader from '../ProjectCardHeader';
import ProjectCardFooter from '../ProjectCardFooter';
import useAppStore from '../../stores/appStore';
import projectData from '../../data/projectData';
import useWindowWidth from '../../hooks/useWindowWidth';

function PomodoroProject() {
    const windowWidth = useWindowWidth();
    const { language } = useAppStore();

    const title = () => {
        if (windowWidth < 720 && windowWidth >= 640) return 'Pomodoro';

        return (
            <>
                Pomodoro{' '}
                <span className='font-light text-xl text-white/60'>Timer</span>
            </>
        );
    };

    const iconSet = () => {
        return (
            <>
                <SiJavascript />
                <SiReact />
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
            <div className='flex-grow h-[4px] bg-gradient-to-l from-[#d0adf8] to-[#bf71fe]' />
        );
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
            <div className='flex flex-col gap-4 px-2'>
                <div className='flex flex-col-reverse md:grid md:grid-cols-[200px_1fr] gap-4'>
                    <img
                        src='images/pomodoro-preview.png'
                        alt='huemidi-preview'
                        className='max-w-[200px] w-full rounded-xl border-2 border-white/20 self-center'
                    />
                    <div className='flex flex-col justify-between'>
                        <div>{projectData.pomodoro.description[language]}</div>
                        {windowWidth >= 768 && (
                            <div className='flex flex-col gap-2'>
                                <DownloadButton
                                    title={'Windows Portable'}
                                    link='https://joepytlik.de/data/apps/pomodoro.exe'
                                />
                                <DownloadButton
                                    title={'macOS Apple Silicon'}
                                    link='https://joepytlik.de/data/apps/pomodoro-electron-darwin-arm64-1.0.0.zip'
                                />
                            </div>
                        )}
                    </div>
                </div>
                {windowWidth < 768 && (
                    <div className='flex flex-col gap-2'>
                        <DownloadButton
                            title={'Windows Portable'}
                            link='https://joepytlik.de/data/apps/pomodoro.exe'
                        />
                        <DownloadButton
                            title={'macOS Apple Silicon'}
                            link='https://joepytlik.de/data/apps/pomodoro-electron-darwin-arm64-1.0.0.zip'
                        />
                    </div>
                )}
            </div>
            <hr className='opacity-20' />
            <ProjectCardFooter
                github={'https://github.com/Johnny9Rodriguez/pomodoro-electron'}
                isLeftAligned={false}
            />
        </>
    );
}

export default PomodoroProject;
