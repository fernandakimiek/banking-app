import React from 'react';

import { TextInputProps } from 'react-native';
import { ContainerInput } from './styles';
import { DisplayFlexColumn } from '../GlobalStyles/styles';
import Text from '../Text';
import theme from '../../styles/theme';

interface InputProps extends TextInputProps {
  title?: string;
  leftText?: boolean;
  errorMessage?: string;
}

const Input = ({ title, leftText, errorMessage, ...props }: InputProps) => {
  const margin = leftText ? '0px 250px 0px 0px' : '0px';
  return (
    <DisplayFlexColumn>
      {title && (
        <Text customMargin={margin} color={theme.GRAYHARD}>
          {title}
        </Text>
      )}
      <ContainerInput isError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text customMargin="0px 180px 0px 0px" color={theme.RED}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
