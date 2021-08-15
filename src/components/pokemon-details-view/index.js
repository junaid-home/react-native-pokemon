import * as React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Image } from 'react-native'

export default function PokemonDetailsView({ data }) {
  return (
    <View>
      <Text style={styles.name}>{data.name}</Text>
      <View style={styles.stats}>
        <Text style={styles.statsText}>
          Weight: <Text style={styles.statsSpan}>{data.weight}</Text>
        </Text>
        <Text style={styles.statsText}>
          Height: <Text style={styles.statsSpan}>{data.height}</Text>
        </Text>
      </View>
      <View style={styles.powers}>
        {data.types.map((type) => (
          <Text style={styles.power} key={type.type.name}>
            #{type.type.name}
          </Text>
        ))}
      </View>
      <View style={styles.images}>
        {data.sprites.frontDefault && (
          <Image style={styles.image} source={{ uri: data.sprites.frontDefault }} />
        )}
        {data.sprites.backDefault && (
          <Image style={styles.image} source={{ uri: data.sprites.backDefault }} />
        )}
        {data.sprites.backFemail && (
          <Image style={styles.image} source={{ uri: data.sprites.backFemail }} />
        )}
        {data.sprites.frontFemail && (
          <Image style={styles.image} source={{ uri: data.sprites.frontFemail }} />
        )}
      </View>
    </View>
  )
}

PokemonDetailsView.propTypes = {
  data: PropTypes.object,
}

const styles = StyleSheet.create({
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 7,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.75)',
  },
  name: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    textShadowRadius: 10,
    textShadowOffset: { height: 1, width: 1 },
    textShadowColor: 'rgba(0,0,0,.5)',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  statsText: {
    marginHorizontal: 5,
    color: '#999',
  },
  statsSpan: {
    color: 'limegreen',
  },
  powers: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  power: {
    marginHorizontal: 5,
    paddingVertical: 7,
    paddingHorizontal: 10,
    color: '#999',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
})
