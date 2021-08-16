import * as React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import Input from '../components/input'
import Screen from '../components/screen'
import PokemonDetailsView from '../components/pokemon-details-view'
import NoInternet from '../components/no-net'
import Loader from '../components/loader'
import NoData from '../components/no-deta'
import useApi from '../hooks/useApi'

export default function SearchPage() {
  const api = useApi()
  const [query, setQuery] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [pokimonData, setPokemonData] = React.useState(null)

  const handleSubmit = async () => {
    setQuery('')
    setError(false)
    setLoading(true)
    api.getPokemonDetails(query.toLowerCase()).then((response) => {
      if (response.ok) {
        const data = {
          types: null,
          height: null,
          weight: null,
          sprites: {},
          name: response.data.name,
        }
        data.types = response.data.types
        data.weight = response.data.weight
        data.height = response.data.height
        data.sprites.frontDefault = response.data.sprites.front_default
        data.sprites.backDefault = response.data.sprites.back_default
        data.sprites.backFemail = response.data.sprites.back_shiny_female
        data.sprites.frontFemail = response.data.sprites.front_shiny_female
        setPokemonData(data)
      } else {
        setError(true)
      }
      setLoading(false)
    })
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/background.jpg')}
    >
      <ScrollView>
        <Screen style={styles.container} nomargin>
          <NoInternet />
          <Text style={styles.text}>
            Please enter the pokemon name you wanna search for, remember pokemon name
            should be valid like &apos;charizard&apos; & &apos;pikachu&apos; in order for
            search to work properly.
          </Text>
          <Input
            placeholder="Search..."
            onSubmit={handleSubmit}
            value={query}
            onChangeText={(text) => setQuery(text)}
            leftIconName="search"
            returnKeyType="search"
            placeholderTextColor="grey"
          />
          <View style={{ marginTop: 35 }} />
          {error && (
            <NoData
              style={{ text: styles.noDataText, container: styles.noDataContainer }}
            />
          )}
          {pokimonData && !error && <PokemonDetailsView data={pokimonData} />}
          <View style={{ marginTop: 35 }} />
        </Screen>
      </ScrollView>
      {loading && <Loader visible />}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingHorizontal: 5,
  },
  backgroundImage: {
    height: '100%',
  },
  text: {
    margin: 11,
    color: '#666',
  },
  noDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    color: '#666',
    textAlign: 'center',
  },
})
