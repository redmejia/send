import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IBusinessCard } from "./ibusiness";

function BusinessCard({ BusId, BusinessName, Promotion, Amount }: IBusinessCard) {

    return (
        <View style={styles.card}>
            <Image
                style={styles.giftLogo}
                source={require('../../public/gift.png')}
            />
            <View
                style={styles.promotionAmount}
            >
                <Text style={styles.promotionAmountText}>$ {Amount}</Text>
            </View>
            <Text style={styles.businessName}>{BusinessName}</Text>
            <Text style={styles.promotionDescription}>{Promotion}</Text>

        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        height: 170,
        width: 360,
        backgroundColor: "#16F06D",
        borderRadius: 15,
    },
    giftLogo: {
        marginTop: 10,
        marginLeft: 9
    },
    businessName: {
        marginTop: 6,
        marginLeft: 9,
        fontSize: 20,
        fontWeight: "bold"
    },
    promotionAmount: {
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    promotionAmountText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    promotionDescription: {
        marginTop: 6,
        marginLeft: 9,
        fontWeight : "500"
    }

})

export default BusinessCard;