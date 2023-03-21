/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { Body, Header } from './src/components';
import { store, persistor } from './src/redux/store';
import { theme } from './src/assets/colors/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={isDarkMode ? theme.darker : theme.primary}
          />
          <Header />
          <Body />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
