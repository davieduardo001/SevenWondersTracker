import * as React from 'react'
import { } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './SRC/screens/Home'
import Player from './SRC/screens/Player'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen 
          name="Player" 
          component={Player} 
          options={{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}