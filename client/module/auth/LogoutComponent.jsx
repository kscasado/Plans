import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import cookie from 'react-cookie'
@connect ((store) => {
  return {
    user: store.user,
    group: store.group,
    plans: store.plans
  }
})
export default class LogoutComponenet extends Component {
  componentWillMount() {
    const { user, group, plans, dispatch} = this.props
    cookie.remove('token')
    dispatch({type:'USER_LOGOUT', payload:true})
    dispatch({type:'GROUP_LOGOUT', payload: true})
    dispatch({type:'PLAN_LOGOUT', payload: true})
    this.props.routing.replace('/')
  }
  render() {
    return null
  }

}
