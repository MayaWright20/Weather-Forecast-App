import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS } from "../../constants/COLORS";
import { WINDOW_WIDTH } from "../../constants/DIMENSIONS";

interface HeaderProps {
    headerTitle: string;
    buttonTitle: string | null;
    onPress: () => void | null;
}

const Header: React.FC<HeaderProps> = ({ headerTitle, buttonTitle, onPress }) => {
    return (
        <View style={[styles.headerContainer, styles.bottomTabNavigatorShadow]}>
            <LinearGradient
                colors={[COLORS.MEDIUM_BLUE, COLORS.DARKEST_BLUE]}
                style={styles.headerWrapper}
            >
                <SafeAreaView>
                    <View style={styles.titleWrapper}>
                        <TouchableOpacity onPress={onPress} style={styles.backButtonWrapper}>
                            <Text style={[styles.headerTitle, styles.backButtonText]}>{buttonTitle}</Text>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>{headerTitle}</Text>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        borderBottomColor: COLORS.DARKEST_BLUE,
        backgroundColor: COLORS.MEDIUM_BLUE,
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 100,
        zIndex: 2
    },
    headerWrapper: {
        paddingBottom: 5,
        borderBottomColor: COLORS.DARKEST_BLUE,
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 100,
        zIndex: 2
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 10, 
    },
    headerTitle: {
        fontSize: 30,
        color: COLORS.WHITE,
    },
    backButtonWrapper: {
        position: 'absolute',
        left: 10
    },
    backButtonText:{
        fontSize: 14
    },
    bottomTabNavigatorShadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 500,
        zIndex: 2
    },
});

export default Header;
