import React, { useState } from "react";
import { Share, StyleSheet, Text, View, TextInput, Alert, Linking, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BalanceCard from "../utils/card/balance";
import { getContactWalletInfo, transferToWallet } from "../../redux/wallet/wallet";
import { updateBalance } from "../../redux/auth/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';



const onShare = async (shareid: string) => {
    Share.share(
        {
            message: shareid,
            title: "share id",
            // url: 'share this id with the sender  ' + shareid,
        },
        {
            dialogTitle: 'share this with the sender ' + shareid,
        }
    )

};

const storeData = async (key: string, newContact: Object) => {
    try {
        await AsyncStorage.setItem(
            "@" + key,
            JSON.stringify(newContact),
        );
        console.log("new contact was added");

    } catch (error) {
        // Error saving data
        console.log("some error trying to store data ", error);

    }
};

const clear = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.log(e);
    }
    console.log("clear done ...");

}





function Wallet() {
    const dispatch: any = useDispatch()
    const { account } = useSelector(state => state.account)
    const { bankToWalletStatus, contactInformation } = useSelector(state => state.wallet)


    const { user_id, share_id, username, wallet_id, balance } = account.wallet;

    const [amount, setAmount] = useState("")
    const [shareid, setShareId] = useState("")

    return (
        <View style={styles.container}>
            <BalanceCard
                Price={balance}
                Title={"Hi 👋 @" + username}
                WalletID={wallet_id}
            />


            <TextInput
                placeholder="$"
                value={amount.toString()}
                placeholderTextColor="#16F06D"
                keyboardType="number-pad"
                style={styles.textInput}
                onChangeText={(a) => {
                    setAmount(a)
                }}
            />
            <KeyboardAvoidingView behavior="padding">

                {amount.length > 0 &&
                    <>


                        <TouchableOpacity
                            style={styles.btnSend}
                            onPress={() => {
                                const txIntent = {
                                    username: username,
                                    user_id: user_id,
                                    wallet_id: wallet_id,
                                    amount: amount
                                }

                                dispatch(transferToWallet(txIntent))
                                if (bankToWalletStatus.proceed && bankToWalletStatus.tx_status_code) {
                                    dispatch(updateBalance(txIntent))
                                    setAmount("")
                                }
                            }}
                        >
                            <Text style={styles.textSendBtn}>
                                <Text style={styles.textAlert}>Add founds to my wallet </Text>
                                +</Text>
                        </TouchableOpacity>
                    </>
                }

                <View style={styles.shareBox}>
                    <Text style={styles.shareText}>Share this id with a sender or contact</Text>
                    <Text style={styles.shareSmText}>{share_id}</Text>
                    <TouchableOpacity
                        style={styles.shareBtn}
                        onPress={() => onShare(share_id)}
                    >
                        <Text>Share</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.shareBox}>
                    <Text style={styles.shareText}>Add new contact </Text>
                    <TextInput
                        placeholderTextColor="#16F06D"
                        placeholder={`Paste or copy contact Share id here 👥`}
                        style={styles.inputStyle}
                        onChangeText={(shareid) => setShareId(shareid)}
                    />
                    <TouchableOpacity
                        style={styles.shareBtn}
                        onPress={() => {
                            dispatch(getContactWalletInfo(shareid))
                            const newContact = {
                                username: contactInformation.username,
                                wallet_id: contactInformation.wallet_id
                            }
                            storeData(newContact.username, newContact)
                            setShareId("")
                        }}
                    >
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.shareBox}>
                    <Text style={styles.shareText}>All contact</Text>
                    <TouchableOpacity
                        style={styles.shareBtn}
                        onPress={() => getAllData()}
                    >
                        <Text>all</Text>
                    </TouchableOpacity>
                </View> */}
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent : 'center',
        // alignContent: "center",
        alignItems: 'center',
        marginTop: 25,
    },
    shareBox: {

        marginTop: 25,
        height: 100,
        width: 300,
        backgroundColor: '#111010',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 15,
    },
    shareText: {
        color: '#16F06D',
        fontWeight: '600'
    },
    shareSmText: {
        color: '#16F06D',
        fontSize: 13,
        fontWeight: '400'
    },
    shareBtn: {
        marginTop: 10,
        backgroundColor: "#16F06D",
        width: 100,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        // marginTop: 10,
        height: 90,
        width: 300,
        textAlign: 'center',

        color: '#16F06D',

        backgroundColor: '#111010',
        fontSize: 50,
        borderRadius: 10
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

    },
    textAlert: {
        color: "#ffff",
        fontWeight: 'bold',
        fontSize: 15
    },
    inputStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#16F06D',
        borderBottomWidth: 3,
        borderBottomColor: '#16F06D',
        paddingTop: 15,
        width: 290,
    },
})

export default Wallet;