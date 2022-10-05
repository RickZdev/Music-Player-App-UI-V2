import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/navigations/AppStack';
import { LogBox, StatusBar } from 'react-native';

import COLORS from './src/global/COLORS';

const App = () => {
  LogBox.ignoreAllLogs(true)
  StatusBar.setBackgroundColor(COLORS.background)
  StatusBar.setBarStyle('light-content')
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
