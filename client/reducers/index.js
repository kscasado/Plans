import { combineReducers } from 'redux'

import events from './eventReducer'
import user from './userReducer'
import group from './groupReducer'

export default combineReducers({
  events,
  user,
  group
})
