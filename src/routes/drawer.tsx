import {Feather} from '@expo/vector-icons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import StackRoutes from './stack';
import TabRoutes from './tab';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{title: ''}}>
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
    </Drawer.Navigator>
  );
}
