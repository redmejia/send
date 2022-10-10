import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICardData } from "./ibalance";



function BalanceCard({Salute, Price}: ICardData) {
    return(
        <View style={style.card}> 
            <View style={style.cardBody}>
                <Text style={style.cardTextSmall}>{Salute}</Text>
                <Text style={style.cardTextBig}>${Price}</Text> 
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card : {
        height : 150,
        width : 300,
        backgroundColor : "#16F06D",
        borderRadius : 15,
        marginBottom : 25,
    },
    cardBody : {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
    },
    cardTextSmall : {
        color : '#111010',
        fontSize : 20,
        fontWeight : '400'
    },
    cardTextBig : {
        color : '#111010',
        fontSize : 60,
        fontWeight : 'bold',
    }
});


export default BalanceCard