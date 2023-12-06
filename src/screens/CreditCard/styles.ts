import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: '#fff';
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  padding: 5%;
`;

export const ContentAccount = styled.View`
  width: 100%;
  flex: auto;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 10%;
`;

export const Content = styled.View`
  width: 100%;
  height: 180px;
  border-radius: 50px;
  background-color: ${({theme}) => theme.PURPLEDARK1};
`;
