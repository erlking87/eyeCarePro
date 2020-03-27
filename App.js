import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './screens/HomeScreen';
import EyeListStackScreen from './screens/EyeListScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home"
          component={HomeStackScreen}
          options={{
            title: 'Get Started',
            tabBarIcon: ({ focused }) => <Ionicons focused={focused} name="md-home" size={30} style={{ marginBottom: -3 }} color="#85A0B6"/>,
          }}
        />
        <Tab.Screen 
          name="List"
          component={EyeListStackScreen} 
          options={{
            title: 'List',
            tabBarIcon: ({ focused }) => <Ionicons focused={focused} name="md-menu" size={30} style={{ marginBottom: -3 }} color="#85A0B6"/>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
