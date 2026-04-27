import { Field, FieldLabel } from '@/components/ui/field'
import { Progress } from '@/components/ui/progress'
import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export default function loading() {
    return (
        <div className='p-10'>
            <Spinner />
        </div>
    )
}
