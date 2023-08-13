import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ForecastScreen from './screens/ForecastScreen';
import SavedForecastsScreen from './screens/SavedForecastsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from './constants/COLORS';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: { display: 'flex',paddingBottom: 0, justifyContent: 'center', borderTopWidth:0 },
        tabBarBackground:() =>(
          <LinearGradient  colors={[COLORS.DARKEST_BLUE, COLORS.MEDIUM_BLUE]} style={{height:'100%'}}/>
        )
      }}
      >
        <BottomTab.Screen 
        name="Current Location"
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarLabelStyle: {marginBottom: 20},
          tabBarIconStyle: {paddingTop: 0, marginTop:20},
          tabBarActiveTintColor: COLORS.WHITE,
          tabBarInactiveTintColor: COLORS.MEDIUM_GREY,
          tabBarActiveBackgroundColor: COLORS.DARKEST_BLUE_TRANSPARENT,
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Home1',
          tabBarBadge: '',
          tabBarBadgeStyle:{backgroundColor: 'transparent', paddingTop: 0},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>

<BottomTab.Screen 
        name="Curren Location"
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarLabelStyle: {marginBottom: 20},
          tabBarIconStyle: {paddingTop: 0, marginTop:20},
          tabBarActiveTintColor: COLORS.WHITE,
          tabBarInactiveTintColor: COLORS.MEDIUM_GREY,
          tabBarActiveBackgroundColor: COLORS.DARKEST_BLUE_TRANSPARENT,
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Home1',
          tabBarBadge: '',
          tabBarBadgeStyle:{backgroundColor: 'transparent', paddingTop: 0},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>

<BottomTab.Screen 
        name="Curre Location"
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarLabelStyle: {marginBottom: 20},
          tabBarIconStyle: {paddingTop: 0, marginTop:20},
          tabBarActiveTintColor: COLORS.WHITE,
          tabBarInactiveTintColor: COLORS.MEDIUM_GREY,
          tabBarActiveBackgroundColor: COLORS.DARKEST_BLUE_TRANSPARENT,
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Home1',
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

