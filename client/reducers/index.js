import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import events from './eventReducer'
import user from './userReducer'
import group from './groupReducer'

export default combineReducers({
  user,
  group,
  routing:routerReducer
})
