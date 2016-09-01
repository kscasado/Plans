import React from 'react'

class Nav extends React.Component {
  render(){
    const content = this.props.children
    console.log('in nav')
    return (

      <div className='nav navbar-default'>
        <div className='text-right'>
          <a href='/auth/facebook'>Facebook Login</a>
        </div>

      </div>
    )
  }
}

module.exports = Nav
