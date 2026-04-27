import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navlinks = ({ href, children }) => {
    const pathname = usePathname();
    return (
        <Link className={`${pathname.startsWith(href) && "text-purple-900"}`} href={href}>{children}</Link>
    )
}

export default Navlinks;