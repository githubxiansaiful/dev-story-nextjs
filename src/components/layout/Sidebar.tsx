import Link from 'next/link';
import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div className='flex border-b border-zinc-500 p-5'>
                <Link href="/"> <span className='font-bold text-2xl relative'>DevStory <span className='block w-2 h-2 rounded-full bg-purple-700 absolute bottom-1.25 -right-2.5'></span></span></Link>
            </div>
            <ul className='grid gap-4 p-5'>
                <li>Dashboard</li>
                <li>Add Story</li>
                <li>My Profile</li>
                <li>Settings</li>
                <li>Logout</li>
                <li>Notifications</li>
                <li>Bookmarks</li>
                <li>Analytics</li>
                <li>Help Center</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Sidebar;