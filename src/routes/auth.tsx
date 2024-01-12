import React from 'react';

import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import SignUp from '../screens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: true, title: ''}}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: true, title: ''}}
      />
    </Auth.Navigator>
  );
}
