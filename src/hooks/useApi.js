import { getPokemonData, getPokemonDetails } from '../api/pokemon'

function useApi() {
  return { getPokemons: getPokemonData, getPokemonDetails }
}

export default useApi
