import  React  from "react";

import { 
    FlatList, 
    ListRenderItem, 
    StyleSheet, 
    Text, 
    View 
} from "react-native";


function List({title, data, renderItem} :{title : string, data : any[], renderItem :ListRenderItem<any>}) {
    
    return( 
            <View style={style.containerList}>
                <Text style={style.titleText}>{title}</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    // keyExtractor={({item}: {item :ListData}) => item.Amount}
                    />
             </View>
    );    
};

const style = StyleSheet.create({
    containerList : {
        flex: 1,
        alignItems : 'center',
    },
    itemBox : {
        width : 360,
        alignItems : 'center',
        backgroundColor : '#1E1E1E',
        padding : 20,
        marginVertical : 1,
        borderRadius : 4,
    },
    titleText : {
        fontSize: 20,
        fontWeight:"800",
        marginBottom : 2,
        // flex : 1,
        alignItems : 'center',
        alignContent: 'center'
    },
    itemText : {
        color : '#16F06D'
    },

})

export default List;