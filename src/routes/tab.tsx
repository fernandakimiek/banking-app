import * as React from 'react';

import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Investment from '../screens/Investment';
import theme from '../styles/theme';
import CreditCard from '../screens/CreditCard';

const Tab = createBottomTabNavigator();

type TabNavigation = {
  Home: undefined;
  Investment: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: theme.PURPLEDARK2,
        tabBarActiveTintColor: theme.WHITE,
        tabBarStyle: {
          padding: 8,
          height: 60,
          backgroundColor: theme.PURPLE1,
        },
        tabBarLabelStyle: {
          marginBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="CreditCard"
        component={CreditCard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={size} color={color} />
          ),
          tabBarLabel: 'Credit Card',
        }}
      />
      <Tab.Screen
        name="Investment"
        component={Investment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
          tabBarLabel: 'Investment',
        }}
      />
    </Tab.Navigator>
  );
}
