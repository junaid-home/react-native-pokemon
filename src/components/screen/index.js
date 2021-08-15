import * as React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native'

function Screen({ children, style = {} }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})

Screen.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
}

export default Screen
