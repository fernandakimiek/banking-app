import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${Platform.OS === 'ios' ? 0 : 20}px;
`;

export const ContainerHeader = styled.View`
  margin-left: 10px;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 30px;
  margin-right: 20px;
`;

export const AppName = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.PURPLE};
  font-weight: 700;
`;

export const Status = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.GRAY4};
`;
