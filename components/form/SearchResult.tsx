import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { COLORS } from "../../constants/COLORS";
import { LinearGradient } from "expo-linear-gradient";
import { WINDOW_HEIGHT } from "../../constants/DIMENSIONS";

export default function SearchResult({resultTitle, onPress, saveCityHandler, heartIcon}){
    return(
            <TouchableOpacity style={styles.resultWrapper} onPress={onPress}>
                <LinearGradient style={styles.resultWrapper}
                    colors={[COLORS.LIGHT_GREEN, COLORS.DARK_GREEN]}>
                    <View style={styles.titleWrapper}>
                        
                        <Text style={styles.title}>{resultTitle}</Text>
                        <TouchableOpacity style={[styles.saveContainer, styles.saveContainerWrapper]} onPress={saveCityHandler}>
                        <LinearGradient style={styles.saveContainer} colors={['red','pink']}>
                        <Text style={styles.heartIcon}>{`${heartIcon}`}</Text> 
                        </LinearGradient>
                        </TouchableOpacity>
                        
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
        marginTop: 5,
    },
    titleWrapper:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        height:'100%',
        flex: 1,
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 20,
        paddingLeft: 30,
        maxWidth: '80%'
    },
    saveContainer: {
        height: '100%',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: '100%',
    },
    saveContainerWrapper:{
        width: '20%',
        borderLeftWidth: 2
    },
    heartIcon:{
        textAlign: 'center'
    }
});