import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BusinessCard from "../utils/card/business";
import { IBusinessCard } from "../utils/card/ibusiness";
import List from "../utils/list/listarr";

const gitfBusiness: IBusinessCard[] = [
    { BusId: 1, BusinessName: "Business 1", Amount: 53, Promotion: "family combo for 6 persons" },
    { BusId: 2, BusinessName: "Business 2", Amount: 54, Promotion: "family combo for 3 persons" },
    { BusId: 3, BusinessName: "Business 3", Amount: 53, Promotion: "family combo for 4 persons" },
    { BusId: 4, BusinessName: "Business 4", Amount: 53, Promotion: "family combo for 5 persons" },
]
function RenderItem({ data }: { data: IBusinessCard }) {
    return (
        <TouchableOpacity 
            style={styles.itemBox}
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

function Gift() {
    return (
        <List
            title="Support local business"
            data={gitfBusiness}
            renderItem={({ item }) => <RenderItem data={item} />}

        />
    )
}

const styles = StyleSheet.create({
    itemBox: {
        width: 360,
        alignItems: 'center',
        padding: 10,
        marginVertical: 1,
    },

})

export default Gift;