import { SimplePokemon } from '@/app/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsState {
    favorites: { 
        [key: string]: SimplePokemon
    }
}

// const getInitialState = () => {

//     const favorites = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}')
//     return favorites
// }

const initialState: PokemonsState = {
    // ...getInitialState() 
    favorites: {
 
    }
    // '1': { id: '1', name: 'bulbasaur' },
    // '4': { id: '4', name: 'charmander' },
    // '7': { id: '7', name: 'squirtle' },
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
            state.favorites = action.payload
        },
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

            const pokemon = action.payload
            const { id } = pokemon

            if (!!state.favorites[id]) delete state.favorites[id]
            else state.favorites[id] = pokemon

            // NO recomendado
            localStorage.setItem('favoritePokemons', JSON.stringify(state.favorites))
        }
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer