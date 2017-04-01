import {combineReducers} from 'redux'
import SuperheroesReducer from './superheroesReducer'
import tabBarReducer from './tabBarReducer'
import dataReducer from './dataReducer'

export default combineReducers({
  superheroes: SuperheroesReducer,
  tabId: tabBarReducer,
  dataReducer
})
