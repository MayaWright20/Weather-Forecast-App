import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants/COLORS";
import Header from "./Header";

interface ScreenProps {
    buttonTitle: string;
    children: ReactNode;
    headerTitle: string;
    onPress: ()=> void | null;
}

export default function Screen({ buttonTitle, children, headerTitle, onPress }: ScreenProps) {
    return (
        <View style={styles.container}>
            <Header buttonTitle={buttonTitle} headerTitle={headerTitle} onPress={onPress} />
            <LinearGradient
                colors={[COLORS.DARKEST_BLUE, COLORS.MEDIUM_BLUE]}
                style={styles.linearGradient}
            >
                {children}
            </LinearGradient>
        </View>
    );
}

interface Styles {
    container: ViewStyle;
    linearGradient: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        alignItems: "center",
    },
    linearGradient: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        padding: 20
    },
});
