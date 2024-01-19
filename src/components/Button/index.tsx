import React from 'react';

import { TouchableOpacityProps } from 'react-native/types';
import { ButtonContainer, ButtonGradient, ButtonSecondary } from './styles';
import Text from '../Text';
import theme from '../../styles/theme';
import { buttonsTheme } from './types';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: number;
  color?: string;
  typeText?: string;
  type?: string;
}

const Button = ({ title, margin, color, typeText, type,  ...props }: ButtonProps) => {
  switch (type) {
    case buttonsTheme.secondary:
      return (
        <ButtonSecondary color={color} margin={margin} {...props}>
          <Text color={theme.PURPLEDARK1} type={typeText}>
            {title}
          </Text>
        </ButtonSecondary>
      );
    case buttonsTheme.primary:
    default:
      return (
        <ButtonContainer  margin={margin} {...props}>
          <ButtonGradient start={{x: 0, y: 0}} end={{x: 1.0, y: 1.0}} colors={['#ae3099', '#781180', '#460694']}>
          <Text color={theme.WHITE} type={typeText}>
            {title}
          </Text>
          </ButtonGradient>
        </ButtonContainer>
      );
  }

};

export default Button;
