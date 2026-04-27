import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between items-center h-15 px-5 border-b border-amber-100'>
            <div className='flex'>
                <span className='font-bold text-2xl relative'>DevStory <span className='block w-2 h-2 rounded-full bg-purple-700 absolute bottom-1.25 -right-2.5'></span></span>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <Link href="/">Home</Link>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
