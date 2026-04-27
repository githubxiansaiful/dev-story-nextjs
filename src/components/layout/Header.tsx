"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Navlinks from './Navlinks';

export default function Header() {
    const pathname = usePathname();
    if (pathname.startsWith("/dashboard")) return <></>;
    return (
        <div className='px-5 border-b border-amber-100'>
            <div className='flex h-20 justify-between items-center max-w-250 w-[90%] mx-auto'>
                <div className='flex'>
                    <Link href="/"> <span className='font-bold text-2xl relative'>DevStory <span className='block w-2 h-2 rounded-full bg-purple-700 absolute bottom-1.25 -right-2.5'></span></span></Link>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <Navlinks href="/dashboard">Dashboard</Navlinks>
                        <Navlinks href="/devstory">DevStory</Navlinks>
                        <Navlinks href="/Login">Login</Navlinks>
                        <Navlinks href="/contact">Contact</Navlinks>
                    </ul>
                </div>
            </div>
        </div>
    )
}
