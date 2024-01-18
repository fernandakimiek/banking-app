import 'react-native-gesture-handler';

import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes';
import COLORS from './src/styles/theme';
import { AuthProvider } from './src/contexts/Auth';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <AuthProvider>
        <ThemeProvider theme={COLORS}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
