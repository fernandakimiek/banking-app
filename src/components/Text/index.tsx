import React from 'react';

import { TextProps as TextPropsNative } from 'react-native/types';
import { ContainerText } from './styles';
import { useMemo } from 'react';
import { textTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  customMargin?: string;
}
const Text = ({ color, type, customMargin, ...props }: TextProps) => {
  const handleFontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '18px';
      case textTypes.SUBTITLE:
        return '16px';
      default:
        return '12px';
    }
  }, [type]);
  return (
    <ContainerText customMargin={customMargin} color={color} fontSize={handleFontSize} {...props} />
  );
};

export default Text;
