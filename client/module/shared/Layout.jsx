import React from 'react'
import Nav from './Nav.jsx'
class Layout extends React.Component {
  render(){
    const content = this.props.children
    console.log(content)
    return (
      <div className='well'>
        <h2 className='text-center'>Plans</h2>
        <Nav />
      {content}
      </div>
    )
  }
}

module.exports = Layout
