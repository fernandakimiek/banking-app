import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ContainerInputProps {
  isError?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  height: 48px;
  margin: 4px;
  border-width: 2px;
  padding: 16px;
  width: 100%;

  border-radius: 10px;
  border-color: ${(props) => (props.isError ? theme.RED : '#b65ef1')};
  background-color: #ffff;
  color: #888;
`;
