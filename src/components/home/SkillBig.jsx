import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function SkillBig({ element, name }) {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div
            className='relative'
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            {element}
            <div
                className='absolute z-40 mb-4 bottom-full left-1/2 transform -translate-x-1/2 flex flex-col text-base items-center'
                style={{
                    opacity: mouseOver ? '100%' : '0%',
                    transition: 'opacity 0.4s ease',
                }}
            >
                <div className='font-light bg-black/60 rounded-xl px-2 py-0.5'>{name}</div>
                <MdKeyboardArrowDown />
            </div>
        </div>
    );
}

export default SkillBig;
