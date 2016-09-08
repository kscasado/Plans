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
    this.props.params.hasGroups=false;
    console.log(userID)
    return $.get('/api/users/${this.props.params.user._id}/groups', result => {


      if(!result.length==0){
        this.props.params.hasGroups=true;
        this.setState({
          groups: result
        })
      }
    })
  },
  render () {
    var NoGroupElement;
    if(!this.props.params.hasGroups){
      NoGroupElement = <div>
        <h2>You have no groups, would you like to create one?</h2>
      </div>
    }
    return (
      <div>
        <h2 className='text-center'>Groups</h2>
        <strong>{this.state.groups}</strong>
      </div>
    )
  }
})

module.exports = Groups
