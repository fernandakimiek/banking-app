import 'react-native-gesture-handler';

import React from 'react';

import {ThemeProvider} from 'styled-components/native';

import Routes from './src/routes';
import COLORS from './src/styles/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={COLORS}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
