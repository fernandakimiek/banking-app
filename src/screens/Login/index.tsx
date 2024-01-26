import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { StackTypes } from '../../routes/stack';

import { useAuth } from '../../contexts/Auth';
import { ContainerLogin, ContainerInputs, ContainerFooter } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { textTypes } from '../../components/Text/textTypes';
import PressableText from '../../components/PressableText';
import { buttonsTheme } from '../../components/Button/types';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
    marginBottom: 40,
  },
  scrollView: {
    flexGrow: 1,
  },
});

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const navigation = useNavigation<StackTypes>();
  const { signIn } = useAuth();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      return setErrorMessage('E-mail and password are required');
    }
    setLoading(true);
    try {
      await signIn(email, password);
    } catch (error) {
      setErrorMessage('E-mail or password is invalid');
    }
    setLoading(false);
  };

  const handleChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };

  const handleChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={['#eddae9', '#9487e0']}
      >
        <ContainerLogin>
          <ContainerInputs>
            <Image style={styles.logo} source={require('../../assets/images/wallet.png')} />
            <Text color={theme.PURPLEDARK1} type={textTypes.TITLE}>
              Banking app
            </Text>
            <Input
              title="E-mail"
              onChange={handleChangeEmail}
              placeholder="Enter your e-mail"
              value={email}
              errorMessage={errorMessage}
            />
            <Input
              title="Password"
              onChange={handleChangePassword}
              value={password}
              placeholder="Enter yout password"
              textContentType="password"
              errorMessage={errorMessage}
              secureText
              // errorMessage="Password is invalid"
            />
          </ContainerInputs>

          <Button
            title="LOGIN"
            margin={18}
            typeText={textTypes.SUBTITLE}
            onPress={() => handleLogin()}
            type={buttonsTheme.primary}
            loading={loading}
          />
          <PressableText
            color="#721f99"
            label="Forgot password"
            onPress={() => navigation.navigate('ForgotPassword')}
          />
          <ContainerFooter>
            <Text>Don't have an account yet? </Text>
            <PressableText
              color="#721f99"
              label="Sign up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </ContainerFooter>
        </ContainerLogin>
      </LinearGradient>
    </ScrollView>
  );
};

export default Login;
