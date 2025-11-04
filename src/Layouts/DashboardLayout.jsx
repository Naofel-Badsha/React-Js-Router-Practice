import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='col-span-1 bg-indigo-100 w-[300px] h-screen'>
                <Sidebar></Sidebar>
            </div>
            <div className='container m-auto bg-indigo-500 w-full h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;