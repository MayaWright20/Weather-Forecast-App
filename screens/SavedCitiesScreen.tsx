import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/ui/Screen";
import SearchResult from "../components/form/SearchResult";
import { SavedCitiesContext } from "../context/savedCities";
import { useNavigation } from '@react-navigation/native';

export default function SavedCitiesScreen(){
    const { ids, removeCity } = useContext(SavedCitiesContext);
    const navigation = useNavigation();

    function cityLocationHandler(screenName, lat, lon) {
        navigation.navigate('CityScreen', {
            screenName: screenName,
            lat: lat,
            lon: lon
        });
    }
    function splitByComma(string) {
        return string.split(",");
    }

    return (
        <Screen buttonTitle="" headerTitle="Saved Cities" onPress={null}>
            <View style={styles.container}>
                {ids.map(id => {
                    const splitId = splitByComma(id);
                    return (
                        <SearchResult 
                            key={id}
                            resultTitle={splitId[2]} 
                            onPress={() => cityLocationHandler(splitId[2],splitId[0],splitId[1])}
                            saveCityHandler={() => removeCity(id)}
                            heartIcon="❤️"
                        />
                    );
                })}
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container:{
        height: '100%'
    }
});
