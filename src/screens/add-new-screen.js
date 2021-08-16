import * as React from 'react'
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native'

import NoInternet from '../components/no-net'
import Screen from '../components/screen'
import Input from '../components/input'

export default function PopularPage() {
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <NoInternet />
        <Text style={styles.text}>Please fill out the form to add new pokemon!</Text>
        <View style={styles.spaceBetween} />
        <Input placeholder="Name" />
        <View style={styles.spaceBetween} />
        <Input placeholder="Height" />
        <View style={styles.spaceBetween} />
        <Input placeholder="Weight" />
        <View style={styles.spaceBetween} />
        <Input placeholder="Powers (Seperated by comma's)" />
        <View style={styles.spaceBetween} />
        <Input placeholder="Thumbnail URLs (Seperated by comma's)" />
        <View style={styles.spaceBetween} />
        <Button color="orangered" title="Add new" />
        <View style={styles.spaceBetween} />
        <View style={styles.spaceBetween} />
      </Screen>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  spaceBetween: {
    marginVertical: 8,
  },
  text: {
    marginHorizontal: 8,
    color: 'grey',
  },
})
