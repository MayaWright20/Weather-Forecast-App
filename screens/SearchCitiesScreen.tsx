import React from "react";
import { View,  StyleSheet } from "react-native";
import Screen from "../components/ui/Screen";
import SearchBar from "../components/form/SearchBar";


export default function SearchCitiesScreen(){
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

