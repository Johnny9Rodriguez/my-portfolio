import React from 'react';
import {
    SiJavascript,
    SiCsharp,
    SiHtml5,
    SiCss3,
    SiReact,
    SiThreedotjs,
    SiTailwindcss,
    SiGit,
    SiUnity,
    SiBlender,
    SiPostgresql,
    SiElectron,
    SiNodedotjs,
} from 'react-icons/si';
import SkillBig from './SkillBig';
import SkillSmall from './SkillSmall';

function SkillCard() {
    return (
        <div className='w-full mb-8 flex flex-col gap-12 items-center justify-centerd select-none'>
            <div className='w-full flex gap-6 md:gap-8 text-4xl md:text-5xl xl:text-6xl items-center'>
                <div className='flex-grow h-[4px] w-max bg-gradient-to-r from-transparent to-[#0ce6f2] via-[#0098db]' />
                <SkillBig element={<SiJavascript />} name={'JavaScript'} />
                <SkillBig element={<SiReact />} name={'React'} />
                <SkillBig element={<SiHtml5 />} name={'HTML5'} />
                <SkillBig element={<SiCss3 />} name={'CSS3'} />
                <div className='flex-grow h-[4px] bg-gradient-to-l from-transparent to-[#0ce6f2] via-[#0098db]' />
            </div>
            <div className='grid grid-cols-5 md:grid-cols-10 gap-8 text-3xl md:text-4xl'>
                <SkillSmall element={<SiElectron />} name={'Electron'} />
                <SkillSmall element={<SiThreedotjs />} name={'Three.js'} />
                <SkillSmall element={<SiNodedotjs />} name={'Node.js'} />
                <SkillSmall element={<SiTailwindcss />} name={'Tailwind CSS'} />
                <SkillSmall element={<SiPostgresql />} name={'PostreSQL'} />
                <SkillSmall element={<SiGit />} name={'Git'} />
                <SkillSmall element={<SiCsharp />} name={'C#'} />
                <SkillSmall element={<SiUnity />} name={'Unity'} />
                <SkillSmall element={<SiBlender />} name={'Blender'} />
                <SkillSmall
                    element={
                        <img
                            src='images/cubase-logo.png'
                            alt='cubase'
                            className='w-9 h-9'
                        />
                    }
                    name={'Cubase'}
                />
            </div>
        </div>
    );
}

export default SkillCard;
