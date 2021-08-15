import * as React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import navigation from '../../utils/navigation-ref'

export default function PokemonView({ item: data }) {
  return (
    <View style={[styles.item, styles[data.power]]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Pokemon Details', { name: data.name })}
      >
        <Image style={styles.image} source={{ uri: data.image }} />
        <Text style={styles.text}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

PokemonView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    power: PropTypes.string,
  }),
  navigation: PropTypes.object,
}

const styles = StyleSheet.create({
  item: {
    maxWidth: Dimensions.get('window').width / 2,
    flex: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 4,
    marginHorizontal: 4,
    elevation: 2,
    padding: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 15,
    paddingVertical: 5,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  rock: {
    backgroundColor: '#f6d6a7',
  },
  ghost: {
    backgroundColor: 'rgb(247, 247, 247)',
  },
  electric: {
    backgroundColor: 'rgb(255, 255, 161)',
  },
  bug: {
    backgroundColor: '#f6d6a7',
  },
  poison: {
    backgroundColor: '#e0a7f6',
  },
  normal: {
    backgroundColor: '#f4f4f4',
  },
  fairy: {
    backgroundColor: 'rgba(255, 192, 203, 0863)',
  },
  fire: {
    backgroundColor: '#fbe3df',
  },
  grass: {
    backgroundColor: '#e2f9e1',
  },
  water: {
    backgroundColor: '#e0f1fd',
  },
  flying: {
    backgroundColor: '#e2f9e1',
  },
})
