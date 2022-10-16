import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Badge from "../utils/badge/badge";
import BusinessCard from "../utils/card/business";
import { IBusinessCard } from "../utils/card/ibusiness";
import List from "../utils/list/listarr";

const gitfBusiness: IBusinessCard[] = [
    { BusId: 1, BusinessName: "Business 1", Amount: 53, Promotion: "family combo for 6 persons" },
    { BusId: 2, BusinessName: "Business 2", Amount: 54, Promotion: "family combo for 3 persons" },
    { BusId: 3, BusinessName: "Business 3", Amount: 53, Promotion: "family combo for 4 persons" },
    { BusId: 4, BusinessName: "Business 4", Amount: 53, Promotion: "family combo for 5 persons" },
]

function RenderItem({ data, navigation }: { data: IBusinessCard, navigation : any }): JSX.Element {
    return (
        <TouchableOpacity
            style={styles.itemBox}
            onPress={()=>{
                // navigation.navigate("Send Gift", {card : data})
                navigation.navigate("Send Gift", { card: data })
            }}
        >
            <BusinessCard
                BusId={data.BusId}
                BusinessName={data.BusinessName}
                Amount={data.Amount}
                Promotion={data.Promotion}
            />
        </TouchableOpacity>
    )
}

let myAmount : string =  "53.00";

function Gift() {
    const navigatin = useNavigation()
    return (
        <View
            style={styles.container}
        >
            <Badge Title={"$53.00"}  style={{width : myAmount.length*16}} />
            <View style={styles.itemsBoxList}>

                <List
                    title="Gift card from local business"
                    data={gitfBusiness}
                    renderItem={({ item }) => <RenderItem data={item} navigation={navigatin} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    itemsBoxList: {
        height: 550,
    },
    itemBox: {
        alignItems: 'center',
        padding: 1,
    },

})

export default Gift;