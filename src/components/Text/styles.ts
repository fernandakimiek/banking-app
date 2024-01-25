import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  customMargin?: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.customMargin ? `margin: ${props.customMargin};` : '')}
  font-size: ${(props) => props.fontSize};
  font-family: Poppins-Bold;
`;
