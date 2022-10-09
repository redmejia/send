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
import { View, Text, StyleSheet } from 'react-native';

function App() {

  return(

    <View style={style.home}>
      <Text>Hello wold</Text>
    </View>
  )
}
const style = StyleSheet.create({
  home : {
    justifyContent: "center",
    flex : 1,
    alignItems : 'center',
  }
});
export default App;