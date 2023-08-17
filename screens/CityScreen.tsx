import React from "react";
import Weather from "../components/ui/Weather";
import { useRoute } from "@react-navigation/native";

export default function CityScreen({navigation}){
    const route = useRoute()
    const {screenName, lat, lon} = route.params

    function onPressHandler(){
        navigation.navigate('CityForecastScreen',{
            screenName: screenName,
            lat: lat,
            lon: lon
        })
    }

    function onPressBackHandler(){
        navigation.navigate('SearchCitiesScreen')
    }

    return(
        <Weather 
        buttonTitle="back"  
        headerTitle={`${screenName}`} 
        onPressBackHandler={onPressBackHandler}    
        latitude={lat}
        longitude={lon}    
        coords={true}
        />
    )
}