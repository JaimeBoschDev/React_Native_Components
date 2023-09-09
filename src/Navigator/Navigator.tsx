import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';
import {Animation1} from '../Screens/Animation1';
import {Animation2} from '../Screens/Animation2';
import {SwitchComponent} from '../Screens/SwitchComponent';
import {AlertScreen} from '../Screens/AlertScreen';
import {TextInputScreen} from '../Screens/TextInputScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation1" component={Animation1} />
      <Stack.Screen name="Animation2" component={Animation2} />
      <Stack.Screen name="SwitchComponent" component={SwitchComponent} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  );
};
