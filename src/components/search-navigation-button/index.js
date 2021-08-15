import * as React from 'react'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

export default function SearchIconButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <EvilIcons name="search" size={24} color="white" />
      </View>
    </TouchableWithoutFeedback>
  )
}

SearchIconButton.propTypes = {
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orangered',
    bottom: 15,
    borderWidth: 5,
    borderColor: 'white',
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
})
