import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import useScrollProgress from '../hooks/useScrollProgress';
import useAppStore from '../stores/appStore';

function Root() {
    const rootRef = useRef(null);
    const newScrollRatio = useScrollProgress(rootRef);

    const { routerPath, setRouterPath } = useAppStore();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.substring(1) || 'home';
        setRouterPath(path);
    }, [location, setRouterPath]);

    const { setScrollRatio } = useAppStore();

    useEffect(() => {
        setScrollRatio(newScrollRatio);
    }, [newScrollRatio, setScrollRatio]);

    useEffect(() => {
        if (rootRef.current) {
            rootRef.current.scrollTo(0, 0);
        }
    }, [routerPath]);

    return (
        <div
            ref={rootRef}
            className='relative h-dvh z-10 flex flex-col items-center overflow-auto overflow-x-hidden'
        >
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;
