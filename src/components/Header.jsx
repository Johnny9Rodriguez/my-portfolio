import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import LanguageSelector from './LanguageSelector';
import useWindowWidth from '../hooks/useWindowWidth';
import navData from '../data/navData';

function Header() {
    const [isMobile, setIsMobile] = useState(false);

    const windowWidth = useWindowWidth();

    useEffect(() => {
        setIsMobile(windowWidth < 1280);
    }, [windowWidth]);

    const generateNavLinks = () => {
        return Object.keys(navData).map((key) => (
            <NavLink key={key} id={key} isMobile={isMobile} />
        ));
    };

    return (
        <header className='xl:fixed w-full p-2 md:p-6 xl:p-8 flex justify-between items-center xl:items-start'>
            <LanguageSelector isMobile={isMobile} />
            <nav className='flex gap-2 xl:flex-col'>{generateNavLinks()}</nav>
        </header>
    );
}

export default Header;
