import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS } from "../../constants/COLORS";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <View style={[styles.headerContainer, styles.bottomTabNavigatorShadow]}>
            <LinearGradient
                colors={[COLORS.MEDIUM_BLUE, COLORS.DARKEST_BLUE]}
                style={styles.headerWrapper}
            >
                <SafeAreaView>
                    <Text style={styles.headerTitle}>{title}</Text>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        justifyContent: 'center',
        borderBottomColor: COLORS.DARKEST_BLUE,
        backgroundColor: COLORS.MEDIUM_BLUE,
    },
    headerWrapper: {
        paddingBottom: 5,
        borderBottomColor: COLORS.DARKEST_GREY,
        borderBottomWidth: 5,
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 30,
        color: COLORS.WHITE,
    },
    bottomTabNavigatorShadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        zIndex: 2
    },
});

export default Header;






