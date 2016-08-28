import React from 'react'

class Plan extends React.Component {
  render(){
    const content = this.props.children
    return (
      <div className='jumbotron'>
        <h2 className='text-cent'>Plans</h2>
        {content}
        </div>
    )
  }
}

module.exports = Plan
