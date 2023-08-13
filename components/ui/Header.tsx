import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS } from "../../constants/COLORS";

export default function Header({title}){
    return(
        <View style={styles.headerContainer}>
            <SafeAreaView>
                <Text style={styles.headerTitle}>{title}</Text>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: COLORS.MEDIUM_BLUE,
        width: '100%',
        paddingBottom: 20,
        justifyContent: 'center'
        
    },
    headerTitle:{
        textAlign: 'center',
        fontSize: 30,
        color: COLORS.WHITE
    }

});