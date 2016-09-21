import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import plans from './eventReducer'
import user from './userReducer'
import group from './groupReducer'

export default combineReducers({
  user,
  group,
  plans,
  form: formReducer,
  routing: routerReducer
})
