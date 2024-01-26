import React, { useState } from 'react';

import { TextInputProps, View } from 'react-native';
import { ContainerInput, EyeIcon } from './styles';
import { DisplayFlexColumn } from '../GlobalStyles/styles';
import Text from '../Text';
import theme from '../../styles/theme';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureText?: boolean;
}

const Input = ({ title, errorMessage, secureText, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureText);

  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  };

  return (
    <DisplayFlexColumn>
      {title && <Text color={theme.GRAYHARD}>{title}</Text>}

      <ContainerInput
        hasSecureTextEntry={secureText}
        secureTextEntry={currentSecure}
        isError={!!errorMessage}
        {...props}
      />
      {secureText && (
        <EyeIcon
          onPress={handleOnPressEye}
          name={currentSecure ? 'eye' : 'eye-with-line'}
          size={24}
          color="black"
        />
      )}

      {errorMessage && <Text color={theme.RED}>{errorMessage}</Text>}
    </DisplayFlexColumn>
  );
};

export default Input;
