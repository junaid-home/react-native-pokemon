import React from 'react'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'
import { View, StyleSheet } from 'react-native'

export default function Loader({ visible = false }) {
  if (!visible) return null

  return (
    <View style={styles.overlay}>
      <LottieView autoPlay loop source={require('../../assets/animations/loader.json')} />
    </View>
  )
}

Loader.propTypes = {
  visible: PropTypes.bool,
}

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
})
