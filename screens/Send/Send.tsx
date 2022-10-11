import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BalanceCard from "../utils/card/balance";
import { ListData } from "../utils/list/ilist";
import List from "../utils/list/listarr";
import { useNavigation } from "@react-navigation/native";

const DATA: ListData[] = [
    { id: 1, Name: "Maria" },
    { id: 2, Name: "Sofia" },
    { id: 3, Name: "Angel" },
    { id: 4, Name: "Monica" },
    { id: 5, Name: "Luis" },
    { id: 6, Name: "Angel" },
    { id: 7, Name: "Monica" },
    { id: 8, Name: "Luis" },
    { id: 9, Name: "Angel" },
    { id: 10, Name: "Monica" },
]

function RenderItem({ data, navigation }: { data: ListData, navigation : any  }): JSX.Element {
    
    return (
        <TouchableOpacity style={style.itemBox}
            onPress={() => {
                console.log("was presed", data.id);
                navigation.navigate("TX", {tx : data})
            }}
        >
            <Text style={style.itemBoxText}>@{data.Name}</Text>
        </TouchableOpacity>
    )
}

function Send() {
    const navigation = useNavigation()
    return (
        <View style={style.container} >
            <BalanceCard
                Title="Hi 👋"
                Price={53}
            />
            <View style={style.itemsBoxList}>
                <List
                    title="Sent To"
                    data={DATA}
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