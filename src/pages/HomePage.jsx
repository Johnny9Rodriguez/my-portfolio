import React, { useEffect, useState } from 'react';
import HomeCard from '../components/HomeCard';
import SkillCard from '../components/home/SkillCard';
import ScrollPrompt from '../components/home/ScrollPrompt';

function HomePage() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(100);
    }, []);

    return (
        <div
            className='flex-grow max-w-[800px] w-full flex flex-col gap-16 px-2'
            style={{
                transition: 'opacity 0.7s ease',
                opacity: opacity,
            }}
        >
            <ScrollPrompt />
            <SkillCard />
            <div className='min-h-dvh'>
                <HomeCard />
            </div>
        </div>
    );
}

export default HomePage;
