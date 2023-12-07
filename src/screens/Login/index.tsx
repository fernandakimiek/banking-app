import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {StackTypes} from '../../routes/stack';

import {useAuth} from '../../contexts/Auth';
import {ContainerLogin} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#63099e',
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 40,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    bottom: 30,
  },
  footerText: {
    fontSize: 14,
  },
  textPressable: {
    fontSize: 14,
    color: '#721f99',
    fontWeight: 'bold',
  },
  containerForgotPassword: {
    alignItems: 'center',
  },
});

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation<StackTypes>();
  const {signIn} = useAuth();
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <ContainerLogin>
        <View style={styles.login}>
          <Image
            style={styles.logo}
            source={require('../../assets/wallet.png')}
          />
          <Text style={styles.title}>Welcome to Banking App!</Text>
          <Input onChangeText={setEmail} placeholder="E-mail" value={email} />
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            textContentType="password"
          />
        </View>

        <Button
          color="#973aee"
          title="Login"
          onPress={() => signIn(email, password)}
        />

        <View style={styles.containerForgotPassword}>
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.textPressable}>Forgot password</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account yet? </Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textPressable}>Sign up</Text>
          </Pressable>
        </View>
      </ContainerLogin>
    </ScrollView>
  );
};

export default Login;
