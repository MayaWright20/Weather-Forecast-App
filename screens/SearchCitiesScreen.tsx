import React, {useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/ui/Screen";
import SearchBar from "../components/form/SearchBar";
import SearchResult from "../components/form/SearchResult";
import { getWeather } from "../utils/GetWeather";

export default function SearchCitiesScreen(){

    function onPressOutHandler(){
        
    }


    return (
        <Screen buttonTitle="" headerTitle="Search Cities" onPress={null} >
            <View style={styles.searchBarContainer}>
            <SearchBar/>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    searchBarContainer:{
        height: '100%',
    }
})

