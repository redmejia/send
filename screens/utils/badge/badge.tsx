import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
    style?: any,
    Title: string,
}
function Badge(props: Props) {
    console.log(props.style);
    
    return (
        <View style={styles.badgeContainer}>
            <View style={{ ...styles.badgeBox, ...props.style}}>
                <Text style={{...styles.textBadge, ...props.style}}>{props.Title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    badgeContainer: {
        width: 350,
        height: 60,
        justifyContent: 'center',
        alignContent : 'center'

    },
    badgeBox: {
        alignItems: 'center',
        justifyContent: 'center',
 
        width: 60,
        height: 40,



        borderRadius: 15,
        backgroundColor: "#16F06D",

    },
    textBadge: {
        textAlign : 'center',
        color: '#111010',
        fontSize: 15,
        fontWeight: 'bold',

    }
})
export default Badge;