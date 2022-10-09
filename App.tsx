/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BalanceCard from './screens/utils/card/balance';
import HistoryList from './screens/utils/txhistorylist/txhistorylist';

function App() {

  return(
        <View style={style.home} >
          <BalanceCard Salute='Hi there' Price={53}/>
          <HistoryList />
        </View>
  )
}
const style = StyleSheet.create({
  home : {
    marginTop : 80,
    // justifyContent: "center", test uncomment when add nav top bar
    flex : 1,
    alignItems : 'center',
  }
});
export default App;