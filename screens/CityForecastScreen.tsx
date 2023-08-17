import React from 'react';
import {View, Text} from 'react-native';
import Screen from '../components/ui/Screen';
import Forecast from '../components/ui/Forecast';

export default function CityForecastScreen({navigation, route}){
    const {lat, lon} = route.params;
    const onPressHandler = () => {
        navigation.navigate('CityScreen');
    };
    return(
        <Screen buttonTitle="back" headerTitle="Current Forecast" onPress={onPressHandler}>
            <Forecast lat={lat} lon={lon}/>
            {/* <Text>forecast screen</Text> */}
        </Screen>
    )
}