import React from 'react';

import { signUpService } from '../../services/signUpService';
import { Container, ContainerFooter, FormView } from './styles';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { textTypes } from '../../components/Text/textTypes';

export default function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = async () => {
    await signUpService.signUp(email, name, password);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Container>
        <FormView>
          <Text type={textTypes.TITLE}>Sign Up</Text>
          <Input onChangeText={setName} placeholder="Name" value={name} />
          <Input onChangeText={setEmail} placeholder="E-mail" value={email} />
          <Input onChangeText={setPassword} value={password} placeholder="Password" />
        </FormView>
        <ContainerFooter>
          <Button
            color="#973aee"
            title="REGISTER"
            margin={18}
            typeText={textTypes.SUBTITLE}
            onPress={() => handleSignUp()}
          />
        </ContainerFooter>
      </Container>
    </>
  );
}
