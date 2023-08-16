import React, { useEffect, useState } from "react";
import { Alert, View, Text, StyleSheet, ScrollView, Button, Image } from "react-native";
import { useForegroundPermissions, PermissionStatus, getCurrentPositionAsync } from "expo-location";
import Screen from "../components/ui/Screen";
import { LinearGradient } from "expo-linear-gradient";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constants/DIMENSIONS";
import { COLORS } from "../constants/COLORS";
import { getMap } from "../utils/GetMap";
import { getCurrentWeather } from "../utils/GetWeather";
import LoadingOverlay from "../components/ui/Loading";
import { TouchableOpacity } from "react-native-gesture-handler";

import Weather from "../components/ui/Weather"

export default function HomeScreen({ navigation }) {
    // const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    // const [lat, setLat] = useState(0);
    // const [lon, setLon] = useState(0);
    // const [iconURL, setIconURL] = useState('');
    // const [mapURL, setMapURL] = useState('https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=14&size=400x400&maptype=roadmap');
    // const [loading, setLoading] = useState(false);
    // const [location, setLocation] = useState('')
    // const [description, setDescription] = useState('');
    // const [temperature, setTemperature] = useState('')

    // async function verifyPermissions() {

    //     if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
    //         const permissionResponse = await requestPermission();
    //         return permissionResponse.granted;
    //     }

    //     if (locationPermissionInformation.status === PermissionStatus.DENIED) {
    //         Alert.alert(
    //             "Location Permissions Needed",
    //             "Please grant access for location to use this app"
    //         );
    //         return false;
    //     }

    //     return true;

    // }

    // async function getLocationHandler() {
    //     setLoading(true)
    //     try {
    //         const hasPermission = await verifyPermissions();

    //         if (!hasPermission) {
    //             return;
    //         }

    //         const location = await getCurrentPositionAsync({ timeInterval: 30000 });
    //         setLat(location.coords.latitude);
    //         setLon(location.coords.longitude);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     getLocationHandler();
    // }, [mapURL, location]);

    // useEffect(() => {
    //     setLoading(true)
    //     async function getWeather() {
    //         const weatherData = await getCurrentWeather('current.json', lat, lon);
    //         setIconURL(weatherData[1].value.condition.icon)
    //         setDescription(weatherData[1].value.condition.text)
    //         setTemperature(weatherData[1].value.temp_c)
    //         setLocation(weatherData[0].value.tz_id)
    //     }
    //     getWeather()

    //     const URL = getMap(lat, lon);
    //     setMapURL(URL);
    //     setLoading(false)
    // }, [lat, lon, mapURL]);


    // function onPressHandler() {
    //     navigation.navigate('CurrentForecastScreen')
    // }

    // if (loading) {
    //     return <LoadingOverlay />
    // }


    return (
        <Weather/>
    );
}


const styles = StyleSheet.create({
    contentsContainer: {
        paddingTop: 20
    },
    imageContainer: {
        borderRadius: 15,
        padding: 1,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 100,
        zIndex: 2
    },
    imageWrapper: {
        width: '100%',
        height: WINDOW_HEIGHT / 4,
        borderRadius: 15,
        borderWidth: 2,
    },
    iconWrapper: {
        width: '100%',
        height: '100%'
    },
    secondMap: {
        position: 'absolute',
        opacity: 1
    },
    gridContainer: {
        marginTop: 5,
        width: '100%',
        height: WINDOW_HEIGHT / 4,
        display: 'flex',
        flexDirection: 'row',
    },
    gridWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    box1: {
        flex: 1.5,
        borderRadius: 15,
        marginRight: 2,
    },
    box2: {
        borderRadius: 15,
        flex: 1,
        marginLeft: 2,
        marginBottom: 2
    },
    box3: {
        borderRadius: 15,
        flex: 1,
        marginTop: 2,
        marginLeft: 2,
    },
    forecastButtonWrapper:{
        width: '100%',
        backgroundColor: 'pink',
        height: WINDOW_HEIGHT / 10,
        borderRadius: 15,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    }
});