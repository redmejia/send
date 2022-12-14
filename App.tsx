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
import { Provider } from 'react-redux';
import Main from './screens/main/main';
import store from '../send/app/store';


function App() {

  return(
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;