import React from 'react';
import Header from '../../components/Header';
import { Container, ViewContainer } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />

      <ViewContainer />
    </Container>
  );
}
