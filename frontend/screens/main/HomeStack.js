import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import ChatRoom from './ChatRoom'

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  )
}

export default HomeStack