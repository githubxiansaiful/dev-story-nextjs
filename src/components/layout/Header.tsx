import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='px-5 border-b border-amber-100'>
            <div className='flex h-20 justify-between items-center max-w-250 w-[90%] mx-auto'>
                <div className='flex'>
                    <Link href="/"> <span className='font-bold text-2xl relative'>DevStory <span className='block w-2 h-2 rounded-full bg-purple-700 absolute bottom-1.25 -right-2.5'></span></span></Link>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li><Link href="/">Home</Link></li>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/devstory">DevStory</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
