import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { getWeather } from "../../utils/GetWeather";
import { LinearGradient } from "expo-linear-gradient";
import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";
import { COLORS } from "../../constants/COLORS";


export default function Forecast({ lat, lon }) {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {

        async function getForcastData() {
            const weatherData = await getWeather('forecast.json', `${lat},${lon}`);

            const daysArr = [];
            for (let i = 0; i < 5; i++) {
                let dayObj = {
                    'key': i,
                    'date': weatherData[2].value.forecastday[i].date,
                    'averageTemp': weatherData[2].value.forecastday[i].day.avgtemp_c,
                    "sunrise": weatherData[2].value.forecastday[0].astro.sunrise,
                    "sunset": weatherData[2].value.forecastday[0].astro.sunset,
                    "iconURL": `https:${weatherData[2].value.forecastday[0].day.condition.icon}`,
                    "description": weatherData[2].value.forecastday[0].day.condition.text,
                    "maxTemp": weatherData[2].value.forecastday[0].day.maxtemp_c,
                    "minTemp": weatherData[2].value.forecastday[0].day.mintemp_c,
                }
                daysArr.push(dayObj)

            }

            setForecast(daysArr)

        }
        getForcastData()

    }, [])

    return (

        <ScrollView style={styles.container}>
            {forecast.map((item) => (

                <LinearGradient
                    key={item.id}
                    style={styles.forecastButtonWrapper}
                    colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}>
                    <View style={styles.contentsWrapper}>
                        <View>
                            <Text style={{ fontSize: 20 }}>{item.date}</Text>
                            <Text style={{ fontSize: 20 }}>average:{item.averageTemp}°C</Text>
                            <Text style={{ fontSize: 20 }}>min: {item.minTemp}°C</Text>
                            <Text style={{ fontSize: 20 }}>max: {item.maxTemp}°C</Text>
                            <Text style={{ fontSize: 20 }}>{item.description}°C</Text>
                        </View>
                        <Image style={styles.icon} source={{ uri: "https://cdn.weatherapi.com/weather/64x64/day/113.png" }} />

                    </View>
                </LinearGradient>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    contentsWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    forecastButtonWrapper: {
        width: '100%',
        marginTop: 5,
        padding: 15,
        backgroundColor: 'pink',
        borderRadius: 15,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        flex: 1
    }
});



