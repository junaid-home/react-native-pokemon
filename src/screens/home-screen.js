import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import useApi from '../hooks/useApi'
import Screen from '../components/screen'
import Loader from '../components/loader'
import { navigationRef } from '../utils/navigation-ref'
import PokemonView from '../components/pokemon-view'

export default function HomeScreen({ navigation }) {
  const api = useApi()
  const [pokemonData, setPokemonData] = React.useState([])
  const [nextPage, setNextPage] = React.useState(null)
  const [refreshing, setRefreshing] = React.useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    api.getPokemons(nextPage).then((pokemons) => {
      const pokiData = []
      pokemons.results.forEach((pokemon) => {
        pokiData.push({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          power: pokemon.types[pokemon.types.length - 1].type.name,
        })
      })

      setPokemonData(pokiData)
      setNextPage(pokemons.nextPage)
      setRefreshing(false)
    })
  }

  React.useEffect(() => {
    navigationRef.current = navigation
    api.getPokemons().then((pokemons) => {
      const pokiData = []
      pokemons.results.forEach((pokemon) => {
        pokiData.push({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          power: pokemon.types[pokemon.types.length - 1].type.name,
        })
      })

      setPokemonData(pokiData)
      setNextPage(pokemons.nextPage)
    })
  }, [])

  return (
    <Screen style={styles.container}>
      {pokemonData.length ? (
        <FlatList
          data={pokemonData}
          renderItem={PokemonView}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          style={styles.container}
        />
      ) : (
        <Loader visible />
      )}
    </Screen>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingTop: 6,
  },
})
