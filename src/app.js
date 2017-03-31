import React from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import SuperheroesList from './SuperheroesList'

const App = () => (
  <Provider store={createStore(reducers)}>
    <View>
      <SuperheroesList></SuperheroesList>
    </View>
  </Provider>
)

export default App
