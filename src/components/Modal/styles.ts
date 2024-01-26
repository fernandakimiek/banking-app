import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';

import theme from '../../styles/theme';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${theme.WHITE};
  height: 300px;
  width: 100%;

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px;
  z-index: 9;
`;

export const IconCloseModal = styled(AntDesign)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
