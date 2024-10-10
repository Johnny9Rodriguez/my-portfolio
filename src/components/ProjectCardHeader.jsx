import React from 'react';

function ProjectCardHeader({ title, iconSet, isLeftAligned, colorSeparator }) {
    return (
        <div
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2 ${
                !isLeftAligned && 'sm:flex-row-reverse'
            }`}
        >
            <div className='text-3xl'>{title}</div>
            {colorSeparator}
            <div className='grid grid-cols-4 min-[440px]:grid-cols-8 sm:flex justify-items-center md:justify-items-start items-center gap-4 text-2xl'>
                {iconSet}
            </div>
        </div>
    );
}

export default ProjectCardHeader;
