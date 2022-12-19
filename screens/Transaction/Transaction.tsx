import { useRoute } from "@react-navigation/native";
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Badge from "../utils/badge/badge";
import { useSelector, useDispatch } from "react-redux";
import { wallet2walletTransfer } from "../../redux/wallet/wallet";



function Trasaction() {


    const { account } = useSelector(state => state.account)
    const { walletToWalletStatus } = useSelector(state => state.wallet)

    const [amount, setAmount] = useState("")

    const r = useRoute()

    const { reciver }: any = r.params;


    const dispatch: any = useDispatch()


    const { balance, username, user_id, wallet_id } = account.wallet
    let myBalance: string = balance.toString();

    return (

        <View style={styles.container}>

            <Badge Title={`$${myBalance}`} style={{ width: myBalance.length * 16 }} />
            <View style={styles.sendToBox} >
                <Text style={styles.textSendTo}>{"to @" + reciver.username}</Text>
            </View>
            <TextInput
                placeholder="$"
                keyboardType="number-pad"
                style={styles.textInput}
                onChangeText={(a) => {
                    // const amount: number = (a as unknown as number)
                    setAmount(a)
                }}
            />
            {amount.length > 0 &&

                <TouchableOpacity
                    style={styles.btnSend}
                    onPress={() => {
                        const txIntent = {
                            sender : {
                                username : username,
                                user_id : user_id,
                                wallet_id : wallet_id,
                                amount : amount
                            },
                            reciver : {
                                username: reciver.username,
                                wallet_id : reciver.wallet_id
                            }
                        }
                        dispatch(wallet2walletTransfer(txIntent))
                        if (walletToWalletStatus.proceed && walletToWalletStatus.tx_status_code) {
                            console.log("King Ruls this place");
                        }

                    }}
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