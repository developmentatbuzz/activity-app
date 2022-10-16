import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import Connections from './Connections';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { Ionicons } from '@expo/vector-icons'; 

const BodyTabs = () => {

  const Tab = AnimatedTabBarNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "#fff",
        tabStyle: {
          borderTopWidth: 1,
          borderTopColor: "#cecece"
        }
      }}
      appearance={{
      }}
      
    > 
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={() => ({
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} color={focused ? "white" : "black"} size={24} />
          ),
        })}
      />
      <Tab.Screen 
        name="Connections"
        component={Connections}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "people" : "people-outline"} color={focused ? "white" : "black"} size={24} />
          ),
        })}
      />
    </Tab.Navigator>
  )
}

export default BodyTabs