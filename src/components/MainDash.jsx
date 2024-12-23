import React, { useState } from 'react';
import { clsx } from 'clsx';

import {
    SidebarProvider,
} from "./ui/sidebar"

import SideBarDemo from './SideBarDemo';
import Repo from './Repo';






const MainDash = () => {


    return (
        <div className='flex h-screen bg-[#FAFAFA]'>
            {/* side bar */}
            <div className=' bg-white text-black shadow-lg w-1/6 h-screen'>
                <SidebarProvider className="w-full h-screen">
                    {/* main side bar */}
                    <SideBarDemo className="w-full h-full" />
                </SidebarProvider>
            </div>

            {/* main content */}
            <div className="h-screen w-5/6 mx-auto px-4 py-4 shadow-lg">                                
                {/* content */}
                <Repo/>                
            </div>

        </div>
    )
}

export default MainDash
