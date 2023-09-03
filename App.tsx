import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/Navigator/Navigator';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator></Navigator>
    </NavigationContainer>
  );
};

export default App;
