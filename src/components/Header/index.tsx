import React from 'react';
import { Container, ContainerHeader, Avatar, AppName, Status } from './styles';
import { useAuth } from '../../contexts/Auth';

export default function Header() {
  const { authData } = useAuth();
  return (
    <Container>
      <ContainerHeader>
        <AppName>Hello {authData?.name}!</AppName>
        <Status>Ativo</Status>
      </ContainerHeader>
      <Avatar
        source={{
          uri: authData?.avatar,
        }}
      />
      {/* <ContainerAccount>
        <Text>{authData?.account}</Text>
        <Text>{authData?.amount}</Text>
      </ContainerAccount> */}
    </Container>
  );
}
