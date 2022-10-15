import { useRoute } from "@react-navigation/native";
import React, { startTransition, useState } from 'react';
import { TextInput, StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";
import Badge from "../utils/badge/badge";



function Trasaction() {

    const [amount, setAmount] = useState<number>(0)

    const r = useRoute()

    const { tx }: any = r.params;

    return (

        <View style={styles.container}>
            <Badge title="$ 899" />
            <View style={styles.sendToBox} >
                <Text style={styles.textSendTo}>{tx.Name}</Text>
            </View>
            <TextInput
                placeholder="$"
                keyboardType="number-pad"
                style={styles.textInput}
                onChangeText={(a) => {
                    const amount: number = (a as unknown as number)
                    setAmount(amount)
                }}
            />
            {amount > 0 &&

                <TouchableOpacity
                    style={styles.btnSend}
                >
                    <Text style={styles.textSendBtn}>Send</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    sendToBox: {
        marginBottom: 20,
        height: 40,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#16F06D",
        borderRadius: 15,
    },
    textSendTo: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 25

    },
    textInput: {
        height: 200,
        width: 350,
        textAlign: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',

        backgroundColor: "#16F06D",
        fontSize: 50,
        borderRadius: 15
    },
    btnSend: {

        backgroundColor: '#1E1E1E',
        marginTop: 20,
        height: 40,
        width: 300,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 15
    },
    textSendBtn: {
        color: "#16F06D",
        fontWeight: "bold",
        fontSize: 25

    }
});



export default Trasaction;