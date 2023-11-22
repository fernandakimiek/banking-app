import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {StackTypes} from '../../routes/stack';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation<StackTypes>();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.login}>
          <Image
            style={styles.logo}
            source={require('../../assets/wallet.png')}
          />
          <Text style={styles.title}>Welcome to Banking App!</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="E-mail"
            value={email}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
        </View>
        <View style={styles.button}>
          <Button
            color="#973aee"
            title="Login"
            onPress={() => console.log('logou')}
          />
        </View>

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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#d4c3eb', height: '100%'},
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    borderColor: '#b65ef1',
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 40,
  },
  button: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
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
