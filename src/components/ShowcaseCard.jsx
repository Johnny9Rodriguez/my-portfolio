import React from 'react';

function ShowcaseCard({ element, isLeftAligned }) {
    return (
        <div
            className={`relative w-full bg-black/60 rounded-xl p-8 flex flex-col gap-4 ${
                isLeftAligned ? 'rounded-l-none pl-9' : 'rounded-r-none pr-9'
            }`}
        >
            {element}
            <div
                className={`absolute top-0 ${
                    isLeftAligned ? 'left-0' : 'right-0'
                } w-1 h-full bg-gradient-to-b from-[#0ce6f2] to-[#0098db]`}
            />
        </div>
    );
}

export default ShowcaseCard;
