import React from 'react';

import Text from '../../components/Text';
import { textTypes } from '../../components/Text/textTypes';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ForgotPasswordContainer, InputContainer } from './styles';
import { buttonsTheme } from '../../components/Button/types';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');

  return (
    <>
      <ForgotPasswordContainer>
        <InputContainer>
          <Text type={textTypes.SUBTITLE}>Enter your email to reset your password</Text>
          <Input onChangeText={setEmail} placeholder="E-mail" value={email} />

          <Button
            title="SEND"
            type={buttonsTheme.primary}
            margin={18}
            typeText={textTypes.SUBTITLE}
            onPress={() => console.log('enviou email')}
          />
        </InputContainer>
      </ForgotPasswordContainer>
    </>
  );
};
export default ForgotPassword;
