import { configureStore } from '@reduxjs/toolkit'
// import type { Middleware } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import PokemonsReducer from './pokemons/pokemons'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import { localStorageMiddleware } from './middleware/localstorage-middleware'

export const store = configureStore({
    reducer: {
        counterReducer,
        pokemons: PokemonsReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    //  .concat(localStorageMiddleware as Middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector