import React from 'react'
import cookie from 'react-cookie'
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getUser } from '../../actions/userAction.js'

@connect ((store) => {
  return {
    user: store.user
  }
})
export default class Nav extends React.Component {
  render () {
    var userComponent
    const { user } = this.props
    if (cookie.load('token') && !user.isFetched) {
      this.getUserData(jwtDecode(cookie.load('token'))._id)
    }
    if (user.isFetched) {
      var planLink = 'users/'+user._id+'/plans'
      var groupLink='users/'+user._id+'/groups'
      userComponent= <div>
        <img src={user.facebook.imageUrl}></img>

        <Link to={`users/${user._id}/plans`} className="mdl-badge" data-badge={`${user.plans.length}`}><strong>Plans</strong></Link>
        <strong> | </strong>
        <Link to={`users/${user._id}/groups`} className="mdl-badge" data-badge={`${user.groups.length}`}><strong>Groups</strong></Link>
        <br></br>
      <Link to={`/auth/logout`}>LogOut</Link>
      </div>
    } else {
      userComponent = <a href='/auth/facebook'>Facebook Login</a>
    }
    return (
      <div>
      <div className='mdl-navigation mdl-typography--text-right'>
        {userComponent}
      </div>

    </div>
    )
  }

  getUserData (_id) {
    this.props.dispatch(getUser(_id))
  }

  componentWillMount () {

  }
}
