import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export default function loading() {
    return (
        <div className='p-10 mx-auto'>
            <Spinner />
        </div>
    )
}
