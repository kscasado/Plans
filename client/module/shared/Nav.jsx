import React from 'react'

class Nav extends React.Component {
  render(){
    const content = this.props.children
    return (
      <div className='nav navbar-default'>
        <div>
          <a href='/auth/facebook'>Facebook Login</a>
        </div>

      </div>
    )
  }
}

module.exports = Nav
