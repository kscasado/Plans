import React from 'react'

class Layout extends React.Component {
  render(){
    const content = this.props.children
    return (
      <div className='well'>
        <h2 className='text-center'>Plans</h2>
        {content}
      </div>
    )
  }
}

module.exports = Layout
