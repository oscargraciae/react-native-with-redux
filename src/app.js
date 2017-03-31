import React from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import SuperheroesList from './SuperheroesList'
import TabBarList from './TabBarList'
const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={{flex: 1}}>
      <TabBarList />
    </View>
  </Provider>
)

export default App
