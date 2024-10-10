import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';

function ProjectCardFooter({ github, website, youtube, isLeftAligned }) {
    return (
        <div
            className={`flex flex-col sm:flex-row gap-4 sm:items-center px-2 ${
                !isLeftAligned && 'justify-end'
            }`}
        >
            {github && (
                <div className='flex gap-2.5 items-center'>
                    <div className='text-base font-light text-white/60'>
                        Source Code
                    </div>

                    <a
                        href={github}
                        className='text-2xl hover:text-[#0ce6f2]'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <SiGithub />
                    </a>
                </div>
            )}
            {website && (
                <div className='flex gap-2 items-center'>
                    <div className='text-base font-light text-white/60'>
                        Visit website
                    </div>
                    <a
                        href={website}
                        className='text-3xl hover:text-[#0ce6f2]'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <MdLanguage />
                    </a>
                </div>
            )}
            {youtube && (
                <div className='flex gap-2 items-center'>
                    <div className='text-base font-light text-white/60'>
                        Demo Video
                    </div>
                    <a
                        href={youtube}
                        className='h-6 hover:cursor-pointer'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='h-6 saturate-0 hover:saturate-100'
                            src='images/youtube-btn.png'
                            alt='youtube-btn'
                        />
                    </a>
                </div>
            )}
        </div>
    );
}

export default ProjectCardFooter;
