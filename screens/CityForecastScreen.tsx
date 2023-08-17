import React from 'react';
import {View, Text} from 'react-native';
import Screen from '../components/ui/Screen';
import Forecast from '../components/ui/Forecast';

export default function CityForecastScreen({navigation, route}){
    const {lat, lon} = route.params;
    const onPressHandler = () => {
        navigation.navigate('CityScreen',{
            screenName: 'City Forecast',
            lat: lat,
            lon: lon
        });
    };
    return(
        <Screen buttonTitle="back" headerTitle="City Forecast" onPress={onPressHandler}>
            <Forecast lat={lat} lon={lon}/>
        </Screen>
    )
}