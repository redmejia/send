import React from 'react';
import { View, StyleSheet } from 'react-native';
import BalanceCard from '../../screens/utils/card/balance';
import TxHome from '../TxHome/TxHome';


function Home() {
  return (
    <View style={style.home} >
      <BalanceCard Salute='Hi' Price={53} />
      <TxHome />
    </View>
  );
}
const style = StyleSheet.create({
  home: {
    marginTop: 20,
    // justifyContent: "center", test uncomment when add nav top bar
    flex: 1,
    alignItems: 'center',
  }
});

export default Home;