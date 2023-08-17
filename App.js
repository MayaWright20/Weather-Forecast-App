import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import SavedCitiesContextProvider from './context/savedCities';

export default function App() {

  return (
    <SavedCitiesContextProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SavedCitiesContextProvider>
  );
}
