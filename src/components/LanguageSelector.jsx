import React, { useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import { RxTriangleRight } from 'react-icons/rx';
import { useLanguageStore } from '../stores/langStore';

function LanguageSelector({ isMobile }) {
    const [mouseOver, setMouseOver] = useState(false);
    const [clicked, setClicked] = useState(false);

    const { language, setLanguage } = useLanguageStore();

    const handleClick = () => {
        if (!clicked) {
            setLanguage(language === 'EN' ? 'DE' : 'EN');
            setClicked(isMobile ? false : true);
        }
    };

    const styleDefault = 'opacity-0 -translate-x-6';
    const styleOnHover = 'opacity-100 translate-x-0';

    return (
        <div
            className='relative flex p-2 gap-1 items-center hover:cursor-pointer select-none'
            onClick={handleClick}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => {
                setMouseOver(false);
                setClicked(false);
            }}
        >
            <MdLanguage className='text-xl' />
            {!isMobile && (
                <>
                    <div>{language}</div>
                    <div
                        className={`flex gap-1 items-center ${
                            mouseOver && !clicked ? styleOnHover : styleDefault
                        }`}
                        style={{
                            transition:
                                'transform 0.4s ease, opacity 0.4s ease',
                        }}
                    >
                        <RxTriangleRight className={clicked && 'rotate-180'} />
                        <div>{language === 'EN' ? 'DE' : 'EN'}</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default LanguageSelector;