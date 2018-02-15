import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import formReducer from './formReducer'

const reducers = combineReducers({
  items: itemsReducer,
  form: formReducer
})

export default reducers
