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

export default function HomeScreen({ navigation, route }) {

    function onPressHandler(){
        navigation.navigate('ForecastScreen')
    }

    function onPressBackHandler(){
        navigation.navigate('HomeScreen')
    }

    return (
            <Weather
            // onPressHandler={onPressHandler} 
            buttonTitle={null}
            headerTitle={`Current Location`} 
            onPressBackHandler={onPressBackHandler}
            latitude={null}
            longitude={null}
            coords={false}
            />
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