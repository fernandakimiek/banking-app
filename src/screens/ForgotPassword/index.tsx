import React from 'react';

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
          <Input
            title="Enter your email to reset your password"
            onChangeText={setEmail}
            placeholder="E-mail"
            value={email}
          />
        </InputContainer>
        <Button
          title="SEND"
          type={buttonsTheme.primary}
          margin={18}
          typeText={textTypes.SUBTITLE}
          onPress={() => console.log('enviou email')}
        />
      </ForgotPasswordContainer>
    </>
  );
};
export default ForgotPassword;
