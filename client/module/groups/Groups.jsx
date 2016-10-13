import React from 'react'

import { connect } from 'react-redux'
import Group from './Group.jsx'
import { addGroup, getGroups } from '../../actions/userAction'
import { getGroupsfromUser } from '../../actions/groupAction'
import AddGroupForm from './addGroupForm.jsx'
@connect((store) => {
  return{
    user: store.user,
    group: store.group,
    form: store.form
  }
})
export default class Groups extends React.Component {
  componentWillMount () {

  }
  componentWillUnmount () {

  }
  _getGroups () {
    const { user, group } = this.props
    console.log('user.isFetched: '+ user.isFetched + 'group.isFetched:' + group.isFetched)
    if (user.isFetched && !group.isFetched) {
      this.props.dispatch(getGroupsfromUser(user._id))
    }
  }
  _addGroup () {
    const { form } = this.props

    this.props.dispatch(addGroup(this.props.user._id,
                                  this.props.user._id,
                                  form.AddGroupForm.values.NewGroupName))
              .then(this.props.dispatch({type: 'GROUP_ADDED', payload: true}))
  }
  //  fetches groups
  _generateGroupElement (group) {
    if (!group.isFetched) {
      return <br></br>
    } else {
      let groupList = []
      for (var thisGroup of group.groups) {
        const groupElement = <Group group= {thisGroup} key={thisGroup._id}></Group>


        groupList.push(groupElement)
      }
      return groupList
    }
  }
  render () {
    const { user, group } = this.props
    this._getGroups()
    var groupElement = this._generateGroupElement(group)
    var error = <br></br>
    if(group.error){
      error=<div className='alert alert-danger'><strong>{group.error}</strong></div>
    }
    return (
      <div>
        <h2>Groups</h2>
        <AddGroupForm onSubmit={this._addGroup.bind(this)}/>
        {error}
        <div className="mdl-grid">
          {groupElement}
        </div>
      </div>
    )
  }
}
