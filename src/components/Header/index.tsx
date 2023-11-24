import React from 'react';
import {Container, ContainerHeader, Avatar, AppName, Status} from './styles';

export default function Header() {
  return (
    <Container>
      <ContainerHeader>
        <AppName>Banking App</AppName>
        <Status>Ativo</Status>
      </ContainerHeader>
      <Avatar
        source={{
          uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg',
        }}
      />
    </Container>
  );
}
