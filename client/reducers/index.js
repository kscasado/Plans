import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import plans from './eventReducer'
import user from './userReducer'
import group from './groupReducer'
import plan from './plan'

export default combineReducers({
  user,
  group,
  plans,
  plan,
  form: formReducer,
  routing: routerReducer
})
