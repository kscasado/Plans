import React from 'react'
import $ from 'jquery'
class Groups extends React.Component {
  getInitialState () {
    return {
      user: null,
      groups: null,
      hasGroups: false
    }
  }
  componentWillMount () {
    this.serverRequest = this._getGroups()
  }
  componentWillUnmount () {
    this.serverRequest.abort()
  }
  _getGroups () {
    const { userID } = this.props.params
    return $.get('/api/users/${userID}/groups', result => {
      const { groupsResult } = result
      if (groupsResult === 'nogroups') {
        this.setState({
          groups: 'none'
        })
      } else {
        this.setState({
          groups: groupsResult
        })
      }
    })
  }
  render () {
    return (
      <div className=''>
        <h2 className='text-center'>Plans</h2>
        <strong>{this.state.groups}</strong>
      </div>
    )
  }
}

module.exports = Groups
