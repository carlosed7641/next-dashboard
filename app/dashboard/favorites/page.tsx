import { FavoritePokemons } from "@/app/pokemons/components/FavoritePokemons";

export const metadata = {
    title: 'Favoritos',
    description: 'Listado de pokemons'
}

export default function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
      <FavoritePokemons />
    </div>
  );
}