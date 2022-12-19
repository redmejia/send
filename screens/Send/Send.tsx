import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BalanceCard from "../utils/card/balance";
import { ListData } from "../utils/list/ilist";
import List from "../utils/list/listarr";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AsyncStorage from '@react-native-async-storage/async-storage';

// const DATA: ListData[] = [
//     { id: 1, Name: "Maria" },
//     { id: 2, Name: "Sofia" },
//     { id: 3, Name: "Angel" },
//     { id: 4, Name: "Monica" },
//     { id: 5, Name: "Luis" },
//     { id: 6, Name: "Angel" },
//     { id: 7, Name: "Monica" },
//     { id: 8, Name: "Luis" },
//     { id: 9, Name: "Angel" },
//     { id: 10, Name: "Monica" },
// ]
export interface Contacts {
    username?: string,
    wallet_id?: string,
};

function RenderItem({ data, navigation }: { data: Contacts, navigation: any }): JSX.Element {

    // console.log(data)
    return (
        <TouchableOpacity style={style.itemBox}
            onPress={() => {
                navigation.navigate("Transaction", { reciver: data })
            }}
        >
            <Text style={style.itemBoxText}>@{data.username}</Text>
        </TouchableOpacity>
    )
}

const getAllData = async () => {

    try {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
        
        const c = result.map(c => JSON.parse(c[1]))

        return c
    } catch (e) {
        console.log("error trying to get data ", e);
    }
}


function Send() {
    const navigation = useNavigation()
    const { account } = useSelector(state => state.account)

    const { username, balance, wallet_id } = account.wallet;

    const [contact, setContacts] = useState([])

    useEffect(() => {
        getAllData().then(d => setContacts(d))
    }, [setContacts, getAllData])


    return (
        <View style={style.container} >
            <TouchableOpacity
                onPress={() => navigation.navigate("Wallet", {})}
            >
                <BalanceCard
                    Title={"Hi 👋 @" + username}
                    Price={balance}
                    WalletID={wallet_id}
                />
            </TouchableOpacity>

            <View style={style.itemsBoxList}>
                <List
                    title="Send To"
                    data={contact}
                    renderItem={({ item }) => <RenderItem
                        navigation={navigation}
                        data={item} />}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    itemsBoxList: {
        height: 415,
    },
    itemBox: {
        width: 360,
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        padding: 20,
        marginVertical: 1,
        borderRadius: 4,
    },
    itemBoxText: {
        color: '#16F06D'
    }
})

export default Send;