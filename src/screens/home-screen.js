import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Screen from '../components/screen'
import Loader from '../components/loader'
import { navigationRef } from '../utils/navigation-ref'
import PokemonView from '../components/pokemon-view'
import useApi from '../hooks/useApi'
import NoInternet from '../components/no-net'

export default function HomeScreen({ navigation }) {
  const api = useApi()
  const [pokemonData, setPokemonData] = React.useState([])
  const [nextPage, setNextPage] = React.useState(null)
  const [refreshing, setRefreshing] = React.useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    api.getPokemons(nextPage, setPokemonData, setNextPage).then(() => {
      setRefreshing(false)
    })
  }

  React.useEffect(() => {
    navigationRef.current = navigation
    api.getPokemons(undefined, setPokemonData, setNextPage)
  }, [])

  return (
    <Screen style={styles.container}>
      <NoInternet />
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
    paddingTop: 6,
  },
})
