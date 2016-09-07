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

    this.serverRequest = this._getGroups()
  },
  componentWillUnmount () {

  },
  _getGroups () {
    const { userID } = this.props.params
    console.log(userID)
    return $.get('/api/users/${this.props.params.user._id}/groups', result => {

      console.log(result)
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
