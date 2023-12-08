import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, ScrollView} from 'react-native';
import {StackTypes} from '../../routes/stack';

import {useAuth} from '../../contexts/Auth';
import {ContainerLogin, ContainerInputs, ContainerFooter} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import {textTypes} from '../../components/Text/textTypes';
import PressableText from '../../components/PressableText';

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
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation<StackTypes>();
  const {signIn} = useAuth();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      keyboardShouldPersistTaps="handled">
      <ContainerLogin>
        <ContainerInputs>
          <Image
            style={styles.logo}
            source={require('../../assets/images/wallet.png')}
          />
          <Text type={textTypes.TITLE}>Welcome to Banking App!</Text>
          <Input onChangeText={setEmail} placeholder="E-mail" value={email} />
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            textContentType="password"
          />
        </ContainerInputs>

        <Button
          color="#973aee"
          title="LOGIN"
          margin={18}
          typeText={textTypes.SUBTITLE}
          onPress={() => signIn(email, password)}
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
    </ScrollView>
  );
};

export default Login;
