import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';

import Home from './screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#000',
            borderTopColor: 'rgba(255, 255, 255, 0.3)',
          },
          activeTintColor: '#fff',
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />

        <Screen
          name="Discover"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="search" size={size} color={color} />
            ),
          }}
        />

        <Screen
          name="New"
          component={Home}
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => null,
          }}
        />

        <Screen
          name="Inbox"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="chat" size={size} color={color} />
            ),
          }}
        />

        <Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
