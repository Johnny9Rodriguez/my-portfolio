import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import LoadingScreen from './pages/LoadingScreen';
import BackgroundCanvas from './three/BackgroundCanvas';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <div>404</div>,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/home',
                    element: <HomePage />,
                },
                {
                    path: '/projects',
                    element: <ProjectPage />,
                },
                {
                    path: '/creativity',
                    element: <div>Creativity</div>,
                },
                {
                    path: '/contact',
                    element: <ContactPage />,
                },
            ],
        },
    ]);

    return (
        <div className='relative h-dvh text-[#effafa] font-poppins'>
            <RouterProvider router={router} />
            <div className='absolute top-0 left-0 w-full h-dvh -z-10'>
                <BackgroundCanvas />
            </div>
            <LoadingScreen />
        </div>
    );
}

export default App;
