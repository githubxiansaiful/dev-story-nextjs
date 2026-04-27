import Sidebar from '@/components/layout/Sidebar';
import React from 'react'

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3 border-r-2 h-screen'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-span-9'>{children}</div>
        </div>
    )
}

export default DashboardLayout;