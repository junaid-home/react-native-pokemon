import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

import Screen from '../components/screen'

export default function SearchPage() {
  return (
    <Screen style={styles.container}>
      <Text>Hello Search Page</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
  },
})
