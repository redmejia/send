import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Badge({ title }: { title: string }) {
    return (
        <View style={styles.badgeContainer}>
            <View style={styles.badgeBox}>
                <Text style={styles.textBadge}>{title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    badgeContainer: {
        width: 350,
        height : 60,
        justifyContent: 'center',

    },
    badgeBox: {
        width: 60,
        height: 40,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 15,
        backgroundColor: "#16F06D",
    },
    textBadge: {
        color: '#111010',
        fontSize: 15,
        fontWeight: 'bold',
        
    }
})
export default Badge;