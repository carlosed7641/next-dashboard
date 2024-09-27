'use client'
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCafeOutline } from 'react-icons/io5'
import { useAppSelector } from '@/app/store'

export const WidgetsGrid = () => {

    const count = useAppSelector(state => state.counterReducer.count)
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                title={count.toString()}
                label='Contador'
                href='/dashboard/counter'
                icon={<IoCafeOutline size={50} className="text-blue-50" />}
            />
        </div>
    )
}
