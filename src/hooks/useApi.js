import { getPokemonData, getPokemonDetails as getpokemonDetalsData } from '../api/pokemon'
import cache from '../utils/cache'

function useApi() {
  function getPokemons(nextPage, setPokemonData, setNextPage) {
    return getPokemonData(nextPage).then((response) => {
      if (response.ok) {
        const pokiData = []
        response.results.forEach((pokemon) => {
          pokiData.push({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            power: pokemon.types[pokemon.types.length - 1].type.name,
          })
        })

        setPokemonData(pokiData)
        setNextPage(response.nextPage)
        cache.store('pokemons', pokiData)
        cache.store('nextPage', response.nextPage)
      } else {
        return cache.get('pokemons').then((pokemons) => {
          setPokemonData(pokemons)
          setNextPage('nextPage')
        })
      }
    })
  }

  return { getPokemons, getPokemonDetails: getpokemonDetalsData }
}

export default useApi
