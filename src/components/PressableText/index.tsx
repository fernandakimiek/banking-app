import React from 'react';
import { Pressable } from 'react-native';
import { PressableProps } from 'react-native/types';
import Text from '../Text';

interface PressableTextProps extends PressableProps {
  color?: string;
  label?: string;
}

const PressableText = ({ color, label, ...props }: PressableTextProps) => {
  return (
    <Pressable {...props}>
      <Text color={color}>{label}</Text>
    </Pressable>
  );
};

export default PressableText;
