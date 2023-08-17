import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getWeather } from "../../utils/GetWeather";
import { LinearGradient } from "expo-linear-gradient";
import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";
import { COLORS } from "../../constants/COLORS";


export default function Forecast({lat, lon }){
    const [forecast, setForecast] = useState([])

    
    useEffect(()=>{

        async function getForcastData(){
            const weatherData = await getWeather('forecast.json',`${lat},${lon}`);

            const daysArr = [];
            for(let i=0; i<5; i++){
                let dayObj = {
                    'key':i,
                    'date': weatherData[2].value.forecastday[i].date,
                    'averageTemp': weatherData[2].value.forecastday[i].day.avgtemp_c,
                    "sunrise": weatherData[2].value.forecastday[0].astro.sunrise,
                    "sunset": weatherData[2].value.forecastday[0].astro.sunset,
                    "iconURL": weatherData[2].value.forecastday[0].day.condition.icon,
                    "description": weatherData[2].value.forecastday[0].day.condition.text,
                    "maxTemp": weatherData[2].value.forecastday[0].day.maxtemp_c,
                    "minTemp": weatherData[2].value.forecastday[0].day.mintemp_c,
                }
                daysArr.push(dayObj)
            }
            setForecast(daysArr)
        
        }
        getForcastData()

    },[])

    return (

        <View>
            {forecast.map((item) => (
                <LinearGradient
                key={item.id}
                    style={styles.forecastButtonWrapper}
                    colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}>
                    <View>
                        <Text style={{ fontSize: 20 }}>{item.averageTemp}°C</Text>
                        <Text style={{ fontSize: 20 }}>{item.date}</Text>
                    </View>
                </LinearGradient>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    forecastButtonWrapper:{
        width: '100%',
        marginTop: 5,
        backgroundColor: 'pink',
        height: WINDOW_HEIGHT / 10,
        borderRadius: 15,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    }
});



