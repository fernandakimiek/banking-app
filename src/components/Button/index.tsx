import React from 'react';

import { TouchableOpacityProps } from 'react-native/types';
import { ContainerButton } from './styles';
import Text from '../Text';
import theme from '../../styles/theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: number;
  color?: string;
  typeText?: string;
}

const Button = ({ title, margin, color, typeText, ...props }: ButtonProps) => {
  return (
    <ContainerButton color={color} margin={margin} {...props}>
      <Text color={theme.WHITE} type={typeText}>
        {title}
      </Text>
    </ContainerButton>
  );
};

export default Button;
