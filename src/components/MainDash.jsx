import React, { useState } from 'react';
import { clsx } from 'clsx';

import {
    SidebarProvider,
} from "./ui/sidebar"



import SideBarDemo from './SideBarDemo';






const MainDash = () => {
  

    return (
        <div className='flex h-screen bg-[#FAFAFA]'>
            {/* side bar */}
            <div className=' bg-white text-black shadow-lg'>
                <SidebarProvider>
                    {/* main side bar */}
                    <SideBarDemo/>                
                </SidebarProvider>
            </div>

            {/* main content */}
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-yellow-500 h-[90%] w-full max-w-4xl p-6 rounded-lg shadow-lg"></div>

            </div>

        </div>
    )
}

export default MainDash
