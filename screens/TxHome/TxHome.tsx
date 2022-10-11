import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BalanceCard from "../utils/card/balance";
import { ListData } from "../utils/list/ilist";
import List from "../utils/list/listarr";




const DATA: ListData[] = [
    { TxStatus: 2, Name: "Maria", Amount: 54 },
    { TxStatus: 1, Name: "Rey", Amount: 53 },
    { TxStatus: 2, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Maria", Amount: 54 },
    { TxStatus: 1, Name: "Maria", Amount: 54 },
    { TxStatus: 1, Name: "Rey", Amount: 53 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
    { TxStatus: 1, Name: "Richard", Amount: 34 },
]

function RenderItem({ data }: { data: ListData }): JSX.Element {
    let text: JSX.Element;
    if (data.TxStatus == 1) {
        text = <Text style={style.itemBoxText}>recive ${data.Amount} from @{data.Name}</Text>
    } else {
        text = <Text style={style.itemBoxText}>send ${data.Amount} to @{data.Name}</Text>
    }

    return (
        <View style={style.itemBox}>
            {text}
        </View>
    )

}

function TxHome() {
    return (
        <View style={style.container}>
            <BalanceCard
                Title="Hi 👋"
                Price={53}
            />
            <View style={style.itemsBoxList}>
            <List
                title="Transaction History"
                data={DATA}
                renderItem={({ item }) => <RenderItem data={item} />}

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
    },
})
export default TxHome;