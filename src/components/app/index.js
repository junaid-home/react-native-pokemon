/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import * as React from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SearchIconButton from '../search-navigation-button'
import HomeNavigator from '../../navigation/home-navigator'
import SearchScreen from '../../screens/search-screen'
import PopularScreen from '../../screens/popular-screen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />
            },
          }}
          name="Home"
          component={HomeNavigator}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            tabBarButton: () => (
              <SearchIconButton onPress={() => navigation.navigate('Search')} />
            ),
          })}
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Entypo name="add-to-list" size={size} color={color} />
            },
          }}
          name="Upload"
          component={PopularScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
