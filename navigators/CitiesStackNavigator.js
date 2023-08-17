import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const CitiesStack = createStackNavigator();
import SearchCitiesScreen from '../screens/SearchCitiesScreen';
import CityScreen from '../screens/CityScreen';
import CityForecastScreen from '../screens/CityForecastScreen';

export default function CitiesStackNavigator() {
    return (
        <CitiesStack.Navigator >
            <CitiesStack.Screen
                name="SearchCitiesScreen"
                component={SearchCitiesScreen}
                options={{
                    headerShown: false,
                }}
            />
            <CitiesStack.Screen
                name="CityScreen"
                component={CityScreen}
                options={{
                    headerShown: false,
                }}
            />
            <CitiesStack.Screen
                name="CityForecastScreen"
                component={CityForecastScreen}
                options={{
                    headerShown: false,
                }}
            />
        </CitiesStack.Navigator>
    );
}