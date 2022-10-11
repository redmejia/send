import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";


function Trasaction() {

    const r = useRoute()

   const {tx} : any = r.params; 
   console.log("this ", tx.Name);
   
    return(

        <Text>{tx.Name}</Text>
    )
}

export default Trasaction;