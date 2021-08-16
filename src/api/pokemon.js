import api from './client'

function __getAllDetails(results) {
  return Promise.all(
    results.map(async (current) => {
      const response = await fetch(current.url)
      const data = await response.json()

      return data
    })
  )
}

export const getPokemonData = async (nextPage = '/pokemon?offset=0&limit=20') => {
  const pokemons = await api.get(nextPage)
  if (pokemons.ok) {
    return {
      ok: pokemons.ok,
      nextPage: pokemons.data.next.replace('https://pokeapi.co/api/v2', ''),
      results: await __getAllDetails(pokemons.data.results),
    }
  } else return { ok: pokemons.ok }
}

export const getPokemonDetails = async (name) => {
  const pokemonData = await api.get(`pokemon/${name}`)
  return pokemonData
}
