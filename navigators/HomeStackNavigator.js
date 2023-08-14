import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import CurrentForecastScreen from "../screens/CurrentForecastScreen";

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
                name="CurrentForecastScreen"
                component={CurrentForecastScreen}
                options={{
                    headerShown: false,
                }}
            />
        </HomeStack.Navigator>
    );
}