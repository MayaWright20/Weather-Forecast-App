import React, { useEffect, useState, useLayoutEffect } from "react";
import { Alert, View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { useForegroundPermissions, PermissionStatus, getCurrentPositionAsync } from "expo-location";
import { OPEN_WEATHER_API_KEY } from "@env";
import axios from "react-native-axios";
import Screen from "../components/ui/Screen";

interface WeatherData {
    [key: string]: any;
}

export default function HomeScreen({navigation}) {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [data, setData] = useState<WeatherData>({});

    async function verifyPermissions() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
                "Location Permissions Needed",
                "Please grant access for location to use this app"
            );
            return false;
        }

        return true;
    }

    async function getLocationHandler() {
        try {
            const hasPermission = await verifyPermissions();

            if (!hasPermission) {
                return;
            }

            const location = await getCurrentPositionAsync({ timeInterval: 300000 });
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
        } catch (error) {
            console.log("error", error);
        }
    }

    async function getWeather(latitude: number, longitude: number) {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`
            );
            setData({ ...response.data });
        } catch (error) {
            return(
            <Text>Error</Text>
            )
        }
    }

    useLayoutEffect(() => {
        getLocationHandler();
    }, [data]);

    useEffect(() => {
        getWeather(lat, lon);
    }, [lat, lon]);

    function onPressHandler(){
        navigation.navigate('CurrentForecastScreen')
    }

    return (
        <Screen buttonTitle={null} headerTitle="location" onPress={null}>
            <ScrollView>
                {Object.entries(data).map(([property, value]) => (
                    <Text key={property}>{`${property}: ${value}`}</Text>
                ))}
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({});
