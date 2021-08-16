import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home-screen'
import DetailsScreen from '../screens/details-screen'

const Stack = createStackNavigator()

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'orangered' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen options={{ headerShown: false }} name="Feed" component={HomeScreen} />
      <Stack.Screen name="Pokemon Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}
