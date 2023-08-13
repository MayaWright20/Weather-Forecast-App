import React, { useEffect, useLayoutEffect, useState } from "react";
import { Alert, View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { API_URL } from "@env";
import { useForegroundPermissions, PermissionStatus, getCurrentPositionAsync } from "expo-location";
import axios from "react-native-axios";
import { OPEN_WEATHER_API_KEY } from "@env";
import Header from "../components/ui/Header";
import { COLORS } from "../constants/COLORS";
import { LinearGradient } from "expo-linear-gradient";

// import { getWeather } from "../utils/weatherApi";

export default function HomeScreen() {

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [data, setData] = useState({});

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

            const location = await getCurrentPositionAsync({ timeInterval: 300000 }); //updates location every 5 minutes
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);

            return;
        } catch (error) {
            console.log("error", error)
        }


    }

    async function getWeather(lat: number, lon: number) {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=c434098cc3a004dade4fca9c8f8cc5c5`);
            setData({ ...data })

            return;
        } catch (error) {
            console.log("getWeather error", error)
        }
    }



    getLocationHandler();
    useEffect(() => {
        getWeather(lat, lon);
    }, [])


    for (const property in data) {
        console.log(`${property}: ${data[property]}`);
        return (
            <View>
                <Header title="location" />
                {/* <View style={styles.container}> */}
                    <LinearGradient
                        // Background Linear Gradient
                        colors={[COLORS.DARKEST_BLUE, COLORS.MEDIUM_BLUE]}
                        style={styles.c}
                    >
                        <ScrollView>
                            <Text>hey</Text>
                        </ScrollView>
                    </LinearGradient>
                </View>
            // </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: COLORS.DARKEST_BLUE,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    c:{
        width: '100%',
        height: '100%'
    }
});
