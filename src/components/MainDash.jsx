import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';

import {
    SidebarProvider,
} from "./ui/sidebar"

import SideBarDemo from './SideBarDemo';
import Repo from './Repo';
import MobileSidebar from './MobileSidebar';
import RepositoryList from "./RepositoryList";
import repositories from "../assets/data/repositories.json";


// img ----
import img1 from "../assets/img/CodeAnt Ai.png"

const MainDash = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const MobileLayout = () => (
        <div className='min-h-screen bg-gray-50'>
            <div className='flex items-center justify-between p-4 bg-white border-b'>
                <img src={img1} alt="CodeAnt AI" className="h-8" />
                <button onClick={() => setIsSidebarOpen(true)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </button>
            </div>
            <div className='p-1'>
                <RepositoryList repositories={repositories} />
            </div>
            <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
    );

    const DesktopLayout = () => (
        <div className='flex h-screen bg-[#FAFAFA]'>
            {/* side bar */}
            <div className=' bg-white text-black w-1/6 h-full shadow-lg'>
                <SidebarProvider className="w-full h-full">
                    {/* main side bar */}
                    <SideBarDemo className="w-full h-full" />
                </SidebarProvider>
            </div>

            {/* main content */}
            <div className="h-screen w-5/6 mx-auto px-4 py-4">
                {/* content */}
                <Repo />
            </div>

        </div>
    );


    return isMobile ? <MobileLayout /> : <DesktopLayout />;
}

export default MainDash
