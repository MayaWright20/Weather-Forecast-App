import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from './constants/COLORS';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './screens/HomeScreen';
import CurrentForecastScreen from './screens/CurrentForecastScreen';
import SavedCitiesScreen from './screens/SavedCitiesScreen';
import SearchCitiesScreen from './screens/SearchCitiesScreen';


const BottomTab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }, props) => (
  <TouchableOpacity
  {...props}
    activeOpacity={5.95}
    style={{
      top: -42,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: '50%',
      right: '50%',
      zIndex: 10,
      ...styles.bottomTabNavigatorShadow
    }}
    onPress={onPress}
  >
    <LinearGradient
      colors={[COLORS.MEDIUM_BLUE_1, COLORS.MEDIUM_BLUE_2, COLORS.MEDIUM_BLUE]}
      style={{

        width: 120,
        height: 120,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.bottomTabNavigatorShadow

      }}>
      <LinearGradient
        colors={[COLORS.DARKEST_BLUE, COLORS.MEDIUM_BLUE,]}
        style={{

          width: 100,
          height: 100,
          borderRadius: 70,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
        {children}
      </LinearGradient>
    </LinearGradient>
  </TouchableOpacity>
)

const SearchCitiesIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="map-search-outline" color={color} size={size} />
);

const HomeScreenIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
);

const SavedCitiesIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="content-save" color={color} size={size} />
);

const tabBarBackgroundGradient = () => (
  <LinearGradient colors={[COLORS.DARKEST_BLUE, COLORS.MEDIUM_BLUE]} style={{ height: '100%', borderRadius: 15 }} />
)


export default function App() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator
      initialRouteName={"CurrentLocation"}
        screenOptions={{
          tabBarStyle: {
            display: 'flex', paddingBottom: 0, justifyContent: 'center', borderTopWidth: 0,
            position: 'absolute', bottom: 25, left: 20, right: 20, zIndex: 2, elevation: 0, borderRadius: 15,
            ...styles.bottomTabNavigatorShadow
          },
          tabBarBackground: tabBarBackgroundGradient
        }}
      >
        <BottomTab.Screen
          name="SearchCitiesScreen"
          component={SearchCitiesScreen}
          options={{
            headerShown: false,
            tabBarItemStyle: { borderBottomLeftRadius: 15, borderTopStartRadius: 15 },
            tabBarLabelStyle: { marginBottom: 20 },
            tabBarIconStyle: { paddingTop: 0, marginTop: 20 },
            tabBarActiveTintColor: COLORS.WHITE,
            tabBarInactiveTintColor: COLORS.DARKEST_GREY,
            tabBarActiveBackgroundColor: COLORS.DARKEST_BLUE_TRANSPARENT,
            tabBarInactiveBackgroundColor: 'transparent',
            tabBarHideOnKeyboard: true,
            tabBarLabel: 'Search Cities',
            tabBarBadge: '',
            tabBarBadgeStyle: { backgroundColor: 'transparent', paddingTop: 0 },
            tabBarIcon: SearchCitiesIcon
          }} />

        <BottomTab.Screen
          name="CurrentLocation"
          component={HomeScreen}
          options={{
            tabBarButton: CustomTabBarButton,
            headerShown: false,
            tabBarLabelStyle: { marginBottom: 20 },
            tabBarIconStyle: { paddingTop: 0, marginTop: 20 },
            tabBarActiveTintColor: COLORS.WHITE,
            tabBarInactiveBackgroundColor: 'transparent',
            tabBarInactiveTintColor: COLORS.DARKEST_GREY,
            tabBarItemStyle: { position: 'absolute' },
            tabBarHideOnKeyboard: true,
            tabBarLabel: 'Current Location',
            tabBarBadge: '',
            tabBarBadgeStyle: { backgroundColor: 'transparent', paddingTop: 0 },
            tabBarIcon: HomeScreenIcon
          }} />

        <BottomTab.Screen
          name="SavedCitiesScreen"
          component={SavedCitiesScreen}
          options={{
            tabBarItemStyle: { borderBottomRightRadius: 15, borderTopEndRadius: 15 },
            headerShown: false,
            tabBarLabelStyle: { marginBottom: 20 },
            tabBarIconStyle: { paddingTop: 0, marginTop: 20 },
            tabBarActiveTintColor: COLORS.WHITE,
            tabBarInactiveTintColor: COLORS.DARKEST_GREY,
            tabBarActiveBackgroundColor: COLORS.DARKEST_BLUE_TRANSPARENT,
            tabBarInactiveBackgroundColor: 'transparent',
            tabBarHideOnKeyboard: true,
            tabBarLabel: 'Saved Cities',
            tabBarBadge: '',
            tabBarBadgeStyle: { backgroundColor: 'transparent', paddingTop: 0 },
            tabBarIcon: SavedCitiesIcon
          }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabNavigatorShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  }
})