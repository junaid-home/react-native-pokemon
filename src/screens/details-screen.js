import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ImageBackground } from 'react-native'
import PokemonDetailsView from '../components/pokemon-details-view'
import NoInternet from '../components/no-net'
import Loader from '../components/loader'
import useApi from '../hooks/useApi'

import Screen from '../components/screen'

export default function DetailsPage({ route }) {
  const api = useApi()
  const [pokimonData, setPokemonData] = React.useState(null)

  React.useEffect(() => {
    api.getPokemonDetails(route.params.name).then((details) => {
      const data = {
        types: null,
        height: null,
        weight: null,
        sprites: {},
        name: details.data.name,
      }
      data.types = details.data.types
      data.weight = details.data.weight
      data.height = details.data.height
      data.sprites.frontDefault = details.data.sprites.front_default
      data.sprites.backDefault = details.data.sprites.back_default
      data.sprites.backFemail = details.data.sprites.back_shiny_female
      data.sprites.frontFemail = details.data.sprites.front_shiny_female
      setPokemonData(data)
    })
  }, [])

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/background.jpg')}
    >
      <Screen style={styles.container}>
        <NoInternet />
        {pokimonData ? <PokemonDetailsView data={pokimonData} /> : <Loader visible />}
      </Screen>
    </ImageBackground>
  )
}

DetailsPage.propTypes = {
  route: PropTypes.object,
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
  },
  backgroundImage: {
    flex: 1,
  },
})
