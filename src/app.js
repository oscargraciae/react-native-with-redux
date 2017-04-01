import React from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import SuperheroesList from './SuperheroesList'
import TabBarList from './TabBarList'
import configureStore from './configureStore'

let store = configureStore()

const App = () => (
  <Provider store={store}>
    <View style={{flex: 1}}>
      <TabBarList />
    </View>
  </Provider>
)

export default App
