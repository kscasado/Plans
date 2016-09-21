import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { addGroup, getGroups } from '../../actions/userAction'
import { getGroupsfromUser } from '../../actions/groupAction'
@connect((store) => {
  return{
    user: store.user,
    group: store.group
  }
})
export default class Groups extends React.Component {
  componentWillMount () {

  }
  componentWillUnmount () {

  }
  _getGroups () {
    const { user, group } = this.props
    if (user.isFetched && !group.isFetched) {
      this.props.dispatch(getGroupsfromUser(user._id))
    }
  }
  _addGroup () {
    this.props.group.isFetched = false;
    this.props.dispatch(addGroup(this.props.user._id,
                                    this.props.user._id, 'Default Group'))
  }
  _generateGroupElement (group) {
    if (!group.isFetched) {
      return <br></br>
    } else {
      let groupList = []
      for (var thisGroup of group.groups) {
        const groupElement =
          <div key={thisGroup._id} className='mdl-card mdl-cell mdl-shadow--4dp'>
            <div className='mdl-card_title mdl-card--expand'>
              {thisGroup.groupname}
            </div>
          </div>
        groupList.push(groupElement)
      }
      return groupList
    }
  }
  render () {
    const { user, group } = this.props
    //console.log('groups: '+group)
    this._getGroups()
    var groupElement = this._generateGroupElement(group)
    var addGroupElement =
      <div className="mdl-typography--text-center">
        <label htmlFor='newGroupName' className='mdl-textfield__label'>New Group Name</label>
        <input className='mdl-textfield__input' placeholder='Enter New Group Name' ref='searchTerm' />
        <button onClick={this._addGroup.bind(this)} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
            <i className="material-icons">add</i>
        </button>
      </div>

    return (
      <div>
        <h2>Groups</h2>
        {addGroupElement}
        {groupElement}
      </div>
    )
  }
}
