import React from 'react';
import {Feather} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackRoutes from './stack';
import TabRoutes from './tab';
import Login from '../screens/Login';
import {useAuth} from '../contexts/Auth';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const {authData, signOut} = useAuth();
  return (
    <Drawer.Navigator
      screenOptions={{
        overlayColor: 'transparent',
        title: '',
        headerShown: authData ? true : false,
      }}>
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: () => <Feather name="home" color="black" size={24} />,
          drawerLabel: 'Home',
        }}
      />

      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: () => <Feather name="user" color="black" size={24} />,
          drawerLabel: 'Profile',
        }}
      />

      <Drawer.Screen
        name="logout"
        component={Login}
        options={{
          drawerIcon: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="black"
              onPress={signOut}
            />
          ),
          drawerLabel: 'Logout',
        }}
      />
    </Drawer.Navigator>
  );
}
