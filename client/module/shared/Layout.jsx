import React from 'react'
import Nav from './Nav.jsx'
class Layout extends React.Component {
  render() {
    const content = this.props.children

    return (
      <div className = 'container'>
        <h2 className='text-center'>Lets Make Plans</h2>
        <Nav />
      {content}
      </div>
    )
  }
}

module.exports = Layout
