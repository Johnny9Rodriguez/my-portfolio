import React, { useEffect, useState } from 'react';
import ShowcaseCard from '../components/ShowcaseCard';
import HuemidiProject from '../components/projects/HuemidiProject';
import PencilProject from '../components/projects/PencilProject';
import PortfolioProject from '../components/projects/PortfolioProject';
import PomodoroProject from '../components/projects/PomodoroProject';
import MailProject from '../components/projects/MailProject';

function ProjectPage() {
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
            <ShowcaseCard element={<HuemidiProject />} isLeftAligned={true} />
            <ShowcaseCard element={<PencilProject />} isLeftAligned={false} />
            <ShowcaseCard element={<PortfolioProject />} isLeftAligned={true} />
            <ShowcaseCard element={<PomodoroProject />} isLeftAligned={false} />
            <ShowcaseCard element={<MailProject />} isLeftAligned={true} />
        </div>
    );
}

export default ProjectPage;
