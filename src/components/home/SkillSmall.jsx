import React, { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

function SkillBig({ element, name }) {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div className='relative'>
            <div
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
            >
                {element}
            </div>
            <div
                className='absolute z-40 mt-4 top-full left-1/2 transform -translate-x-1/2 flex flex-col text-base items-center'
                style={{
                    opacity: mouseOver ? '100%' : '0%',
                    transition: 'opacity 0.4s ease',
                    pointerEvents: !mouseOver ? 'none' : 'all',
                }}
            >
                <MdKeyboardArrowUp />
                <div className='flex-grow font-light bg-black/60 rounded-xl px-2 py-0.5 whitespace-nowrap'>
                    {name}
                </div>
            </div>
        </div>
    );
}

export default SkillBig;
