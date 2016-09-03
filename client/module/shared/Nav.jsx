import React from 'react'
import cookie from 'react-cookie'
import jwtDecode from 'jwt-decode'

class Nav extends React.Component {
  render () {
    const content = this.props.children
    // var token = JSON.parse(cookie.load(token))
    if(cookie.load('token')){
      console.log(jwtDecode(cookie.load('token')))
    }
    return (

      <div className='nav navbar-default'>
        <div className='text-right'>
          <a href='/auth/facebook'>Facebook Login</a>

        </div>

      </div>
    )
  }
}
<a href='/auth/facebook'>Facebook Login</a>

module.exports = Nav
