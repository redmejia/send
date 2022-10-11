import  React  from "react";

import { 
    FlatList, 
    ListRenderItem, 
    StyleSheet, 
    Text, 
    View 
} from "react-native";

import { ListData } from "./ilist";


function Item({data, isSendList}: {data : ListData, isSendList : boolean}) {
   let text : JSX.Element;
   if (isSendList) {
      text = <Text>@{data.Name}</Text>
    }else {
        // status code 2 send to 
        // status code 1 recive from
       text = data.TxStatus === 1 ? <Text style={style.itemText}>recive ${data.Amount} from @{data.Name}</Text> :  <Text style={style.itemText}>send ${data.Amount} to @{data.Name}</Text> 
    }
    return (
        <View style={style.itemBox}>
           {text}
        </View>
    ); 
}

function List({isSendList, DATA} :{ isSendList: boolean, DATA : ListData[]}) {
    

    const renderItem : ListRenderItem<ListData> = ({item}) => <Item isSendList={isSendList} data={item}   />

    return( 
            <View style={style.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    // keyExtractor={({item}: {item :ListData}) => item.Amount}
                    />
            </View>
    );    
};

const style = StyleSheet.create({
    container : {
        height : 425,
    },
    itemBox : {
        width : 360,
        alignItems : 'center',
        backgroundColor : '#1E1E1E',
        padding : 20,
        marginVertical : 1,
        borderRadius : 4,
    },
    itemText : {
        color : '#16F06D'
    }

})

export default List;