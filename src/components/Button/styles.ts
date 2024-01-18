import styled from 'styled-components/native';

interface ButtonContainerProps {
  margin?: number;
  color?: string;
}

export const ContainerButton = styled.TouchableOpacity<ButtonContainerProps>`
  min-width: 80%;
  height: 44px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  ${(props) => (props.margin ? `margin: ${props.margin}px;` : '')}
  ${(props) => (props.color ? `background-color: ${props.color};` : 'blue')}
`;
