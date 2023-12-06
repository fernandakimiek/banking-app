import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerRoutes from './drawer';
import AuthRoutes from './auth';
import {Text, View} from 'react-native';
import {useAuth} from '../contexts/Auth';

export default function Routes() {
  const {authData, isLoading} = useAuth();

  if (isLoading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Carregando informações....</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {authData ? <DrawerRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
