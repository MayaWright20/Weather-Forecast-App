import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/ui/Screen";

interface CurrentForecastScreenProps {
    navigation: any; 
}

const CurrentForecastScreen: React.FC<CurrentForecastScreenProps> = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <Screen buttonTitle="back" headerTitle="Current Forecast" onPress={onPressHandler}>
    
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CurrentForecastScreen;

