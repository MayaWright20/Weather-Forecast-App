import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { COLORS } from "../../constants/COLORS";
import { LinearGradient } from "expo-linear-gradient";
import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";

export default function SearchResult({resultTitle, onPress}){
    return(
            <TouchableOpacity style={styles.resultWrapper} onPress={onPress}>
                <LinearGradient style={styles.resultWrapper}
                    colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{resultTitle}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    resultWrapper:{
        width: '100%',
        height: WINDOW_HEIGHT / 15,
        borderRadius: 15,
        marginTop: 5
    },
    titleWrapper:{
        alignItems:'center',
        height:'100%',
        justifyContent:'center'
    },
    title:{
        fontSize: 20
    }
});