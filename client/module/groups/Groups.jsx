import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { addGroup } from '../../actions/userAction'
@connect((store) => {
  return{
    user: store.user
  }
})
export default class Groups extends React.Component {
  componentWillMount () {

  }
  componentWillUnmount () {

  }
  _getGroups () {
    const { userID } = this.props.params
    this.props.params.hasGroups=false;
    return $.get('/api/users/${this.props.params.user._id}/groups', result => {


      if(!result.length==0){
        this.props.params.hasGroups=true;
        this.setState({
          groups: result
        })
      }
    })
  }
  _addGroup(){
    if(!this.props.params.hasGroups){
      this.props.dispatch(addGroup(this.props.params.user._id,
                                    this.props.params.user._id, 'Default Group'))
    }
  }
  render () {
    const { user } = this.props

    var NoGroupElement
    if (user.groups.length===0) {
      NoGroupElement =
      <div className="mdl-typography--text-center">
        <h2>You have no groups, would you like to create one?</h2>
          <button onClick={this._addDefaultGroup} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
            <i className="material-icons">add</i>
          </button>
        </div>
    }
    return (
      <div>
        <h2>Groups</h2>
        {NoGroupElement}
        <strong>{user.groups}</strong>
      </div>
    )
  }
}
