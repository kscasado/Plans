import React from 'react'
import Nav from './Nav.jsx'
class Layout extends React.Component {
  render() {
    const content = this.props.children

    return (
      <div className = 'mdl-layout mdl-js-layout'>
        <h2 className='mdl-typography--text-center mdl-layout__header'>Lets Make Plans</h2>
        <Nav />

      {content}
      </div>
    )
  }
}

module.exports = Layout
