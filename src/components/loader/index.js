import React from 'react'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'
import { View, StyleSheet } from 'react-native'

export default function Loader({ visible = false }) {
  if (!visible) return null

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        style={{ height: '40%', width: '40%' }}
        loop
        source={require('../../assets/animations/loader.json')}
      />
    </View>
  )
}

Loader.propTypes = {
  visible: PropTypes.bool,
}

const styles = StyleSheet.create({
  overlay: {
    position: 'relative',
    top: '40%',
    left: '38%',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
})
