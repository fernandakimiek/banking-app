import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabRoutes from './tab';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
    </Stack.Navigator>
  );
}
