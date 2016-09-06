import React from 'react'
import $ from 'jquery'
import { browserHistory } from 'react-router'
const Groups = React.createClass ({
  getInitialState () {
    return {
      user: null,
      groups: null,
      hasGroups: false
    }
  },
  componentWillMount () {
    console.log('Groups ComponentWillMount')
    this.serverRequest = this._getGroups()
  },
  componentWillUnmount () {

  },
  _getGroups () {
    const { userID } = this.props.params
    return $.get('/api/users/${userID}/groups', result => {
      const { groupsResult } = result
      console.log(groupsResult)
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
  },
  render () {
    return (
      <div>
        <h2 className='text-center'>Groups</h2>
        <strong>{this.state.groups}</strong>
      </div>
    )
  }
})

module.exports = Groups
