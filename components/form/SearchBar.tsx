import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants/COLORS";
import SearchResult from "./SearchResult";
import { getWeather } from "../../utils/GetWeather";
import { useNavigation } from '@react-navigation/native';


export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('Search for city');
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [name, setName] = useState('');
    const navigation = useNavigation();

    
    async function onPressHandler(){
        try{
        const response = await getWeather('search.json',searchQuery);
        setLat(response[0].value.lat);
        setLon(response[0].value.lon);
        setName(`${response[0].value.country}/${response[0].value.name}`)
        return response
        }catch(error){
            return Alert.alert('Something went wrong', 'please try again later')
        }
    }


    function cityLocationHandler(){
        navigation.navigate('CityScreen',{
            screenName: `${name}`,
            lat: lat,
            lon: lon
        })
    }


    return (
        <View>
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.input}
                onChangeText={setSearchQuery}
                defaultValue={searchQuery}
                onPressIn={() => { setSearchQuery('') }}
                value={searchQuery}
                autoCorrect={true}
            />
            <TouchableOpacity style={styles.buttonWrapper} onPress={onPressHandler}>
                <LinearGradient style={styles.buttonWrapper}
                    colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}>
                    <View>
                        <Text style={styles.title}>Search</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <View>
            <SearchResult resultTitle={`${name}`} onPress={cityLocationHandler}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: WINDOW_HEIGHT / 11,
    },
    input: {
        height: '100%',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: 'white',
        fontSize: 20,
        flex: 2,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderWidth: 1,
    },
    buttonWrapper: {
        backgroundColor: 'red',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 20
    }
});
