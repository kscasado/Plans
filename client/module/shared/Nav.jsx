import React from 'react'
import cookie from 'react-cookie'
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router'
import $ from 'jquery'

const Nav = React.createClass({
  render () {
    const content =this.props.children
    var userComponent
    const {user} = this.state

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
      </div>// insert html here
    } else {
      userComponent = <a href='/auth/facebook'>Facebook Login</a>
    }
    return (
      <div>
      <div className='mdl-navigation__left-section'>
        {userComponent}
      </div>
      {content}
    </div>
    )
  },
  getUserData (_id) {
    $.ajax({
      method: 'GET',
      url: '/api/users/' + _id

    }).done((result) => {
      this.setState({user: result})
    })
  },
  getInitialState(){
    return{
      user: null
    }
  },
  componentWillMount () {
    if(cookie.load('token')){
      this.getUserData(jwtDecode(cookie.load('token'))._id)
    }
  }
})

module.exports = Nav
