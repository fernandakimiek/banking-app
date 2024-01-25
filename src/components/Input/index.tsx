import React, { useState } from 'react';

import { TextInputProps, View } from 'react-native';
import { ContainerInput, EyeIcon } from './styles';
import { DisplayFlexColumn } from '../GlobalStyles/styles';
import Text from '../Text';
import theme from '../../styles/theme';

interface InputProps extends TextInputProps {
  title?: string;
  leftText?: boolean;
  errorMessage?: string;
  secureText?: boolean;
}

const Input = ({ title, leftText, errorMessage, secureText, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureText);

  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  };

  const margin = leftText ? '0px 250px 0px 0px' : '0px';
  return (
    <DisplayFlexColumn>
      {title && (
        <Text customMargin={margin} color={theme.GRAYHARD}>
          {title}
        </Text>
      )}

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

      {errorMessage && (
        <Text customMargin="0px 180px 0px 0px" color={theme.RED}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
