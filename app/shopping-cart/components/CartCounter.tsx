'use client'
import { useAppDispatch, useAppSelector } from "@/app/store"
import { addOne, susbtractOne, initCounterState } from "@/app/store/counter/counterSlice"
import { useEffect } from "react"

interface CounterResponse {
    count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {

    const data = await fetch('/api/counter').then(res => res.json())

    return data
}


export const CartCounter = () => {

    const count = useAppSelector(state => state.counterReducer.count)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiCounter()
        .then(({count}) => dispatch(initCounterState(count)))
    }, [dispatch])

    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex gap-2">
                <button onClick={() => dispatch(addOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]">
                    +1
                </button>
                <button onClick={() => dispatch(susbtractOne())} 
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]">
                    -1
                </button>
            </div>
        </>
    )
}
