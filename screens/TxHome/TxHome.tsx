import React from "react";
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
]

function TxHome() {
    return (
        <List
            isSendList={false}
            DATA={DATA}
        />
    );
}

export default TxHome;