import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'

export default function NoNet() {
  const netInfo = useNetInfo()

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    )

  return null
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: 'red',
    zIndex: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 8.75,
  },
})
