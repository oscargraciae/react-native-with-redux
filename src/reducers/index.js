import {combineReducers} from 'redux'
import SuperheroesReducer from './superheroesReducer'
import tabBarReducer from './tabBarReducer'
//combineReducers nos permite crear diferentes combineReducers
//aquí le pasamos el reducer que llama al archivo json con los superheroes
export default combineReducers({
  superheroes: SuperheroesReducer,
  tabId: tabBarReducer
})
