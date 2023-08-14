import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Screen from "../components/ui/Screen";

const SavedCitiesScreen: React.FC = () => {
    return (
        <Screen buttonTitle="" headerTitle="Saved Cities" onPress={null}>
            <Text>Saved cities</Text>
        </Screen>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'blue',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});

export default SavedCitiesScreen;
