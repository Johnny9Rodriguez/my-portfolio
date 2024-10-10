import React, { useState, useEffect } from 'react';
import { FaSquareFull } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../stores/appStore';
import navData from '../data/navData';

function NavLink({ id, isMobile }) {
    const { routerPath, setRouterPath, language } = useAppStore();
    const [isSelected, setIsSelected] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsSelected(routerPath === navData[id].path);
    }, [routerPath, id]);

    const selectedStyle = 'text-[#0098db]';

    const squareDefault = 'opacity-0 scale-0';
    const squareOnHover = 'opacity-100 scale-50';

    const handleClick = () => {
        setRouterPath(navData[id].path);
        navigate('/' + navData[id].path);
    };

    return (
        <button
            className={`flex gap-1 items-center text-base md:text-xl hover:text-[#0ce6f2] hover:cursor-pointer ${
                isSelected && selectedStyle
            }`}
            style={{
                transition: 'color 0.2s ease',
            }}
            onClick={handleClick}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            {!isMobile && (
                <FaSquareFull
                    className={`text-xs ${
                        mouseOver || isSelected ? squareOnHover : squareDefault
                    }`}
                    style={{
                        transition: 'opacity 0.2s ease, transform 0.4s ease',
                    }}
                />
            )}
            <div className='relative'>
                <div className='relative z-10'>{navData[id][language]}</div>
                <div
                    className='absolute top-0 left-0 h-full z-0 bg-[#203562]'
                    style={{
                        transition: 'width 0.4s ease',
                        width: mouseOver && !isSelected ? '100%' : '0%',
                    }}
                />
            </div>
        </button>
    );
}

export default NavLink;
