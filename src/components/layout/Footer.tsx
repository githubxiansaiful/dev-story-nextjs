"use client"
import { usePathname } from "next/navigation"

export default function Footer() {

    const pathname = usePathname();
    if (pathname.startsWith("/dashboard")) return <></>;

    return (
        <div className='h-[250px] bg-amber-100 flex justify-center items-center'>footer</div>
    )
}
