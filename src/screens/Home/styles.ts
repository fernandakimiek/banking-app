import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const ViewContainer = styled.View`
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${Platform.OS === 'ios' ? 0 : 20}px;
`;

export const ContainerHeader = styled.View`
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-right: 80px;
`;

export const ContainerAccount = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 300px;
  height: 150px;
  background-color: white;
  margin-top: 50px;
  border-radius: 30px;
`;

export const AccountArea = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const AppName = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.PURPLE};
  font-weight: 700;
`;

export const Status = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.GRAY4};
`;

export const CarouselItem = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 80%;
  background-color: purple;
  margin: 20px;
  border-radius: 20px;
`;

export const CarouselImage = styled.Image`
  width: 100%;
  height: 70%;
  border-radius: 20px;
`;
