import React from 'react'
import cookie from 'react-cookie'
import jwtDecode from 'jwt-decode'
import $ from 'jquery'

const Nav = React.createClass({
  render () {
    var userComponent
    const {user} = this.state
    if (user) {
      userComponent= <div>
        <img src={user.facebook.imageUrl}></img>
      </div>// insert html here
    } else {
      userComponent = <a href='/auth/facebook'>Facebook Login</a>
    }
    return (

      <div className='nav navbar-default'>
        <div className='text-right'>
          {userComponent}

        </div>

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
