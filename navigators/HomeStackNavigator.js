import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import ForecastScreen from "../screens/ForecastScreen";

export default function HomeStackNavigator() {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen
                name="ForecastScreen"
                component={ForecastScreen}
                options={{
                    headerShown: false,
                }}
            />
        </HomeStack.Navigator>
    );
}