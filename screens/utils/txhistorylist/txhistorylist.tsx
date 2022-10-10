import  React  from "react";
import { 
    FlatList, 
    ListRenderItem, 
    StyleSheet, 
    Text, 
    View 
} from "react-native";

interface  ListData {
    Name : string,
    Amount : number,
};


const DATA : ListData[] = [
    {Name : "Maria", Amount : 54},
    {Name : "Rey", Amount : 53},
     {Name : "Richard", Amount : 34},
     {Name : "Maria", Amount : 54},
     {Name : "Maria", Amount : 54},
     {Name : "Rey", Amount : 53},
     {Name : "Richard", Amount : 34},
     {Name : "Maria", Amount : 54},
     {Name : "Maria", Amount : 54},
     {Name : "Rey", Amount : 53},
     {Name : "Richard", Amount : 34},
     {Name : "Maria", Amount : 54},
]

function Item({data}: {data : ListData}) {
    return (
        <View style={style.itemBox}>
            <Text style={style.itemText}>${data.Amount} from @{data.Name}</Text>
        </View>
    ); 
}

function HistoryList() {

    const renderItem : ListRenderItem<ListData> = ({item}) => <Item data={item} />

    return( 
            <View style={style.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    // keyExtractor={(item: ListData) => item.Amount}
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

export default HistoryList;