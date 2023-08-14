import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigators/BottomTabNavigator';

export default function App() {

  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}
