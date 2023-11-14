import React from 'react';
import {Button, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/stack';

const Login = () => {
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={{marginTop: 60}}>
      <Text style={{textAlign: 'center'}}>Login</Text>
      <Button title="Fazer login" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Login;
