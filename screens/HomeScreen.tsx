import React from "react";
import Weather from "../components/ui/Weather"

export default function HomeScreen({ navigation}) {

    function onPressBackHandler(){
        navigation.navigate('HomeScreen')
    }

    return (
            <Weather
            buttonTitle={null}
            headerTitle={`Current Location`} 
            onPressBackHandler={onPressBackHandler}
            latitude={null}
            longitude={null}
            coords={false}
            />
    );
}

