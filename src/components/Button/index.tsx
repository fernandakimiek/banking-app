import React from 'react';

import { TouchableOpacityProps } from 'react-native/types';
import { ButtonContainer, ButtonGradient, ButtonSecondary, DisabledButton } from './styles';
import Text from '../Text';
import theme from '../../styles/theme';
import { buttonsTheme } from './types';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: number;
  color?: string;
  typeText?: string;
  type?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

const Button = ({
  title,
  margin,
  color,
  typeText,
  type,
  loading,
  disabled,
  onPress,
  ...props
}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      {loading ? (
        <ActivityIndicator color={theme.WHITE} />
      ) : (
        <Text color={color} type={typeText}>
          {title}
        </Text>
      )}
    </>
  );

  if (disabled) {
    return (
      <ButtonContainer margin={margin} {...props}>
        <DisabledButton color={theme.GRAY}>{renderText(theme.WHITE)}</DisabledButton>
      </ButtonContainer>
    );
  }

  switch (type) {
    case buttonsTheme.secondary:
      return (
        <ButtonSecondary color={color} margin={margin} onPress={handleOnPress} {...props}>
          {renderText(theme.PURPLEDARK1)}
        </ButtonSecondary>
      );
    case buttonsTheme.primary:
    default:
      return (
        <ButtonContainer margin={margin} onPress={handleOnPress} {...props}>
          <ButtonGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={['#ae3099', '#781180', '#460694']}
          >
            {renderText(theme.WHITE)}
          </ButtonGradient>
        </ButtonContainer>
      );
  }
};

export default Button;
