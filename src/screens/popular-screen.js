import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

import Screen from '../components/screen'

export default function PopularPage() {
  return (
    <Screen style={styles.container}>
      <Text>Hello Popular</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
  },
})
