import styled from 'styled-components/native';
import theme from '../../styles/theme';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonContainerProps {
  margin?: number;
  color?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  ${(props) => (props.margin ? `margin: ${props.margin}px;` : '')}
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props) => (props.margin ? `margin: ${props.margin}px;` : '')};

  background-color: ${theme.TRANSPARENT};
  border-width: 2px;
  border-color: ${theme.PURPLE2};
`;

export const ButtonGradient = styled(LinearGradient)<ButtonContainerProps>`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin}px;` : '')};
`;

export const DisabledButton = styled(ButtonContainer)<ButtonContainerProps>`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ${(props) => (props.margin ? `margin: ${props.margin}px;` : '')};
  ${(props) => (props.color ? `background-color: ${props.color};` : '')}
`;
