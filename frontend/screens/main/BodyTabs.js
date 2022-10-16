import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import Connections from './Connections';

const BodyTabs = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
      }}
    > 
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen 
        name="Connections"
        component={Connections}
      />
    </Tab.Navigator>
  )
}

export default BodyTabs