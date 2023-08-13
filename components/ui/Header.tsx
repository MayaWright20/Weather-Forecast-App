import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS } from "../../constants/COLORS";
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({ title }) {
    return (
        <View style={styles.headerContainer}>
            <LinearGradient
                // Background Linear Gradient
                colors={[COLORS.DARKEST_BLUE, COLORS.MEDIUM_BLUE]}
                style={styles.headerWrapper}
            >
                <SafeAreaView>
                    <Text style={styles.headerTitle}>{title}</Text>
                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.MEDIUM_BLUE,
        width: '100%',
        // paddingBottom: 20,
        justifyContent: 'center',
        borderBottomColor: COLORS.DARKEST_BLUE,



    },
    headerWrapper: {
        paddingBottom: 5,
        borderBottomColor: COLORS.DARKEST_GREY,
        borderBottomWidth: 5
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 30,
        color: COLORS.WHITE
    }

});