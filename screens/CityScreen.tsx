import React from "react";
import {View, Text} from "react-native";
import Screen from "../components/ui/Screen";
import Weather from "../components/ui/Weather";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CityScreen({navigation}){
    const route = useRoute()
    const {screenName, lat, lon} = route.params
    console.log(screenName, lat, lon)

    function onPressHandler(){
        navigation.navigate('CityForecastScreen',{
            lat: lat,
            lon: lon
        })
    }

    function onPressBackHandler(){
        navigation.navigate('SearchCitiesScreen')
    }

    return(
        <Weather 
        // onPressHandler={onPressHandler}
        buttonTitle="back"  
        headerTitle={`${screenName}`} 
        onPressBackHandler={onPressBackHandler}    
        latitude={lat}
        longitude={lon}    
        coords={true}
        />
    )
}