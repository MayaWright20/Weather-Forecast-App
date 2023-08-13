import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ForecastScreen from './screens/ForecastScreen';
import SavedForecastsScreen from './screens/SavedForecastsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from './constants/COLORS';
export default function App() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: { display: 'flex',paddingBottom: 0, justifyContent: 'center' },
      }}
      >
        <BottomTab.Screen 
        name="Current Location"
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarLabelStyle: {marginBottom: 20},
          tabBarIconStyle: {paddingTop: 0, marginTop:20},
          tabBarActiveTintColor: COLORS.LIGHT_GREEN,
          tabBarInactiveTintColor: COLORS.MEDIUM_GREY,
          tabBarActiveBackgroundColor: COLORS.LIGHT_BLUE,
          tabBarInactiveBackgroundColor: COLORS.DARK_BLUE,
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Home',
          tabBarBadge: '',
          tabBarBadgeStyle:{backgroundColor: 'transparent', paddingTop: 0},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

