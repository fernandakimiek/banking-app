import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { Entypo } from '@expo/vector-icons';

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  height: 48px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-width: 2px;
  padding: 16px;
  width: 100%;

  border-radius: 10px;
  border-color: ${(props) => (props.isError ? theme.RED : '#b65ef1')};
  background-color: #ffff;
  color: #888;
  padding-right: ${(props) => (props.hasSecureTextEntry ? '60px' : '16px')};
`;

export const EyeIcon = styled(Entypo)`
  position: absolute;
  right: 16px;
  top: 36px;
`;
