import React from "react";
import Screen from "../components/ui/Screen";
import Forecast from "../components/ui/Forecast";

export default function ForecastScreen({ route, navigation }){

    const{lat, lon} = route.params;
    const onPressHandler = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <Screen buttonTitle="back" headerTitle="Current Forecast" onPress={onPressHandler}>
            <Forecast lat={lat} lon={lon}/>
        </Screen>
    );
};




