import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import LanguageSelector from './LanguageSelector';
import useWindowWidth from '../hooks/useWindowWidth';

function Header() {
    const [isMobile, setIsMobile] = useState(false);

    const windowWidth = useWindowWidth();

    useEffect(() => {
        setIsMobile(windowWidth < 768);
    }, [windowWidth]);

    return (
        <header className='xl:fixed w-full p-2 md:p-6 xl:p-8 flex justify-between items-center xl:items-start'>
            <LanguageSelector isMobile={isMobile} />
            <nav className='flex gap-2 xl:flex-col'>
                <NavLink name={'home'} isMobile={isMobile} />
                <NavLink name={'projects'} isMobile={isMobile} />
                <NavLink name={'creativity'} isMobile={isMobile} />
                <NavLink name={'contact'} isMobile={isMobile} />
            </nav>
        </header>
    );
}

export default Header;
