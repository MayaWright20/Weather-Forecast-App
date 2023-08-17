import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants/COLORS";
import SearchResult from "./SearchResult";
import { getWeather } from "../../utils/GetWeather";
import { useNavigation } from '@react-navigation/native';
import { SavedCitiesContext } from "../../context/savedCities";


export default function SearchBar() {
    const savedCitiesCtx = useContext(SavedCitiesContext);

    
    const [searchQuery, setSearchQuery] = useState('Search for city');
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [cityId, setCityId] = useState('');
    const [name, setName] = useState('');
    const navigation = useNavigation();
    const [cityIsSaved, setCityIsSaved] = useState(false);

    
    
    async function onPressHandler(){
        if(searchQuery === 'Search for city' || ''){
            return Alert.alert('type in a city name')
        }
        try{
        const response = await getWeather('search.json',searchQuery);
        setLat(response[0].value.lat);
        setLon(response[0].value.lon);
        setCityId(`${response[0].value.lat},${response[0].value.lon},${response[0].value.country}/${response[0].value.name}`)
        setName(`${response[0].value.country}/${response[0].value.name}`)

        return response
        }catch(error){
            return Alert.alert('Something went wrong', 'please try again later')
        }
    }
    
    useEffect(() => {
        setCityIsSaved(savedCitiesCtx.ids.includes(cityId));
    }, [savedCitiesCtx.ids, cityId]);


    function cityLocationHandler(){
        navigation.navigate('CityScreen',{
            screenName: `${name}`,
            lat: lat,
            lon: lon
        })
    }


        function changeSavedCityStatusHandler(){
            console.log('clicked');
            if(cityIsSaved){
                savedCitiesCtx.removeCity(cityId);
            }else{
                savedCitiesCtx.addCity(cityId)
            }
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
            <SearchResult resultTitle={`${name}`} onPress={cityLocationHandler}
                saveCityHandler={changeSavedCityStatusHandler} 
                heartIcon={cityIsSaved? '❤':'🤍'}/>
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
