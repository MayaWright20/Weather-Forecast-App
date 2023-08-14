import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CurrentForecastScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>FORECAST SCREEN</Text>
        </View>
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
