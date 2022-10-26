import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Modal, View, Text, TouchableOpacity } from "react-native";
import BusinessCard from "../utils/card/business";
import { IBusinessCard } from "../utils/card/ibusiness";


function ModalSend({ isOpen, setOpen }: { isOpen: boolean, setOpen: Function }): JSX.Element {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={isOpen}
            onRequestClose={() => {
                setOpen(!isOpen)
            }}

        >

            <View style={styles.centeredView}>

                <TouchableOpacity
                    style={styles.closeBtn}
                    onPress={() => setOpen(!isOpen)}
                >
                    <Text style={{ ...styles.text, ...{ color: '#1E1E1E' } }}>Close</Text>
                </TouchableOpacity>

                <Text>show</Text>
            </View>

        </Modal>
    )
}

function SendGiftCard() {
    const [isOpen, setOpen] = useState<boolean>(false)
    const r = useRoute()

    const { BusId }: Readonly<IBusinessCard | undefined> = r.params
    
    console.log(BusId);
    


    return (
        <View
            style={styles.container}
        >

            {/* <BusinessCard
                BusId={card.BusId}
                BusinessName={card.BusinessName}
                Amount={card.Amount}
                Promotion={card.Promotion}
            /> */}
            <TouchableOpacity
                style={styles.buyBtn}
                onPress={() => setOpen(true)}
            >
                <Text style={styles.text}>Buy</Text>
            </TouchableOpacity>
            <ModalSend isOpen={isOpen} setOpen={setOpen} />
        </View>
    )

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    buyBtn: {
        marginTop: 20,
        height: 40,
        width: 300,
        backgroundColor: "#1E1E1E",
        borderRadius: 15,

        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: '#16F06D',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700'
    },
    closeBtn: {
        marginTop: 20,
        height: 40,
        width: 300,
        backgroundColor: "tomato",
        borderRadius: 15,

        justifyContent: 'center',
        alignContent: 'center'
    },

})
export default SendGiftCard;