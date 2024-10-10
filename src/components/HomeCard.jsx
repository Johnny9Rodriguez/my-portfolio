import React from 'react';
import { Link } from 'react-router-dom';
import useAppStore from '../stores/appStore';
import homeData from '../data/homeData';
import { IoLogoGithub } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';

function HomeCard() {
    const { language } = useAppStore();

    return (
        <div className='w-full h-full flex justify-center items-center pb-8'>
            <div className='w-full p-4 rounded-xl bg-black/60'>
                <div className='w-full p-4 md:p-6 xl:p-8 flex flex-col-reverse md:grid md:grid-cols-[1fr_200px] gap-4'>
                    <div className='flex flex-col gap-4 text-lg'>
                        <div className='px-2 text-4xl'>
                            {homeData.title[language]}
                        </div>
                        <div className='w-full h-[4px] bg-gradient-to-r to-[#0ce6f2] from-[#0098db]' />
                        <div>{homeData.p1[language]}</div>
                        <div>{homeData.p2[language]}</div>
                        <div>{homeData.p3[language]}</div>
                        <div className='greeting text-3xl mt-4'>
                            {homeData.greeting[language]}
                        </div>
                    </div>
                    <div className='flex md:flex-col items-center justify-center md:justify-start gap-8'>
                        <img
                            src='images/profile.jpg'
                            alt='portrait'
                            className='w-40 h-40 rounded-full border-2 border-white'
                        />
                        <div className='flex flex-col md:flex-row gap-8 text-3xl'>
                            <a
                                href='https://github.com/Johnny9Rodriguez'
                                className='hover:text-[#0ce6f2]'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <IoLogoGithub />
                            </a>
                            <Link
                                to={'/contact'}
                                className='hover:text-[#0ce6f2]'
                            >
                                <IoMdMail />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;
