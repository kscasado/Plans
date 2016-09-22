import { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import cookie from 'react-cookie'
import  { pushPath } from 'redux-simple-router'
@connect ((store) => {
  return {
    user: store.user,
    group: store.group,
    plans: store.plans
  }
})

export default class LogoutComponenet extends Component {
  componentWillMount () {
    //  dispatch all of the logouts so store is cleared
    const{ dispatch } = this.props
    cookie.remove('token')
    dispatch({type: 'USER_LOGOUT', payload: true})
    dispatch({type: 'GROUP_LOGOUT', payload: true})
    dispatch({type: 'PLAN_LOGOUT', payload: true})

  }
  // push the path back to the home
  componentDidMount () {
    browserHistory.push('/')
  }
  render () {
    return null
  }


}
