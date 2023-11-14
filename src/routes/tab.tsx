import * as React from 'react';

import {Feather, MaterialIcons} from '@expo/vector-icons';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Investment from '../screens/Investment';

const Tab = createBottomTabNavigator();

type TabNavigation = {
  Home: undefined;
  Investment: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Investment"
        component={Investment}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
          tabBarLabel: 'Investir',
        }}
      />
    </Tab.Navigator>
  );
}
