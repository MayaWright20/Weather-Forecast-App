import React, { useEffect, useState } from "react";
import { Alert, View, Text, StyleSheet, ScrollView, Button, Image } from "react-native";
import { useForegroundPermissions, PermissionStatus, getCurrentPositionAsync } from "expo-location";
import Screen from "./Screen";
import { LinearGradient } from "expo-linear-gradient";
import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";
import { COLORS } from "../../constants/COLORS";
import { getMap } from "../../utils/GetMap";
import { getWeather } from "../../utils/GetWeather";
import LoadingOverlay from "./Loading";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Weather({ CityForecastScreen, ForecastScreen,coords,latitude, longitude, buttonTitle,headerTitle, onPressBackHandler}) {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [iconURL, setIconURL] = useState('');
    const [mapURL, setMapURL] = useState('https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=14&size=400x400&maptype=roadmap');
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('');
    const [temperature, setTemperature] = useState('')

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
        setLoading(true)
        try {
            const hasPermission = await verifyPermissions();

            if (!hasPermission) {
                return;
            }

            const location = await getCurrentPositionAsync({ timeInterval: 30000 });

            if(coords){
                setLat(latitude)
                setLon(longitude)
            }else{
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            }
        } catch (error) {
            console.log("error", error);
        }
        setLoading(false)
    }

    useEffect(() => {
        getLocationHandler();
    }, [mapURL, location]);

    useEffect(() => {
        setLoading(true)
        async function getLocationWeather() {
            const weatherData = await getWeather( 'forecast.json', `${lat},${lon}`);
            setIconURL(weatherData[1].value.condition.icon)
            setDescription(weatherData[1].value.condition.text)
            setTemperature(weatherData[1].value.temp_c)
            setLocation(weatherData[0].value.tz_id)
        }
        getLocationWeather()

        const URL = getMap(lat, lon);
        setMapURL(URL);
        setLoading(false)
    }, [lat, lon, mapURL]);

    const navigation = useNavigation();
    function onPressHandler(){
    if(!coords){
        navigation.navigate('ForecastScreen',{
            lat: lat,
            lon: lon
        })
    }else{
        navigation.navigate('CityForecastScreen',{
            lat: latitude,
            lon: longitude
        })
    }
}



    if (loading) {
        return <LoadingOverlay />
    }


    return (
        <Screen buttonTitle={buttonTitle} headerTitle={headerTitle} onPress={onPressBackHandler}>
            <ScrollView style={styles.contentsContainer}>
                <View>
                    <LinearGradient
                        style={styles.imageContainer}
                        colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}
                    >
                        <Image style={[styles.imageWrapper]} source={{ uri: mapURL }} />
                    </LinearGradient>
                    <View style={styles.gridContainer}>
                        <LinearGradient
                            style={styles.box1}
                            colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}
                        >
                            <View style={{ alignSelf: 'center', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 70, textAlign: 'center' }}>{`${temperature}°C`}</Text>
                            </View>
                        </LinearGradient>
                        <View style={styles.gridWrapper}>
                            <LinearGradient
                                style={styles.box2}
                                colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}
                            >
                                <Image style={[styles.iconWrapper]} source={{ uri: `https:${iconURL}` }} />
                            </LinearGradient>
                            <LinearGradient
                                style={styles.box3}
                                colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}
                            >
                                <View style={{ alignSelf: 'center', height: '100%', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 30, textAlign: 'center' }}>{`${description}`}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                        
                    </View>
                    
                        <TouchableOpacity style={[styles.forecastButtonWrapper, {marginTop: 5}]} onPress={onPressHandler}>
                        <LinearGradient
                                style={styles.forecastButtonWrapper}
                                colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}
                            >
                            <View>
                            <Text style={{fontSize: 20}}>GET FORECAST</Text>
                            </View>
                        </LinearGradient>
                        </TouchableOpacity>
                        
                </View>
            </ScrollView>
        </Screen>
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