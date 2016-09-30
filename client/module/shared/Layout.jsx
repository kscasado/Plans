import React from 'react'
import Nav from './Nav.jsx'
import { Link } from 'react-router'
class Layout extends React.Component {
  render() {
    const content = this.props.children

    return (
      <div className = 'mdl-layout mdl-js-layout'>

        <Link to={'/'}><h2 className='mdl-typography--text-center
          mdl-layout__title'>Lets Make Plans</h2></Link>

        <Nav />
        <div className = 'mdl-layout-spacer'>
          {content}
        </div>
      </div>
    )
  }
}

module.exports = Layout
