import React, { useEffect, useState } from 'react';
import ShowcaseCard from '../components/ShowcaseCard';
import GameShowcase from '../components/creativity/GameShowcase';
import MusicShowcase from '../components/creativity/MusicShowcase';
import LanguageShowcase from '../components/creativity/LanguageShowcase';

function CreativityPage() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(100);
    }, []);

    return (
        <div
            className='max-w-[800px] w-full flex flex-col gap-8 pb-8 xl:pt-8 px-2'
            style={{
                opacity: opacity,
                transition: 'opacity 0.7s ease',
            }}
        >
            <ShowcaseCard element={<GameShowcase />} isLeftAligned={true} />
            <ShowcaseCard element={<MusicShowcase />} isLeftAligned={false} />
            <ShowcaseCard element={<LanguageShowcase />} isLeftAligned={true} />
        </div>
    );
}

export default CreativityPage;
