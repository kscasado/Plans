import React from 'react'
import cookie from 'react-cookie'
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getUser } from '../../actions/userAction.js'
import $ from 'jquery'
@connect ((store) => {
  return {
    user: store.user
  }
})
export default class Nav extends React.Component {
  render () {
    const content = this.props.children
    var userComponent
    const {user} = this.props

    if (user) {

      var planLink = 'users/'+user._id+'/plans'
      var groupLink='users/'+user._id+'/groups'
      userComponent= <div>
        <img src={user.facebook.imageUrl}></img>

        <Link to={`users/${user._id}/plans`} className="mdl-badge" data-badge="0"><strong>Plans</strong></Link>
        <strong> | </strong>
        <Link to={`users/${user._id}/groups`} className="mdl-badge" data-badge="0"><strong>Groups</strong></Link>
        <br></br>
      <a href='/auth/logout'><strong>LogOut</strong></a>
      </div>
    } else {
      userComponent = <a href='/auth/facebook'>Facebook Login</a>
    }
    return (
      <div>
      <div className='mdl-navigation mdl-typography--text-right'>
        {userComponent}
      </div>
      {content}
    </div>
    )
  }
  getUserData (_id) {
    this.props.dispatch(getUser(_id))

    // $.ajax({
    //   method: 'GET',
    //   url: '/api/users/' + _id
    //
    // }).done((result) => {
    //   this.setState({user: result})
    // })
  }

  componentWillMount () {
    if(cookie.load('token')){
      this.getUserData(jwtDecode(cookie.load('token'))._id)
    }
  }
}
