import React from 'react'

import { connect } from 'react-redux'
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
    if (user.isFetched && !group.isFetched) {
      this.props.dispatch(getGroupsfromUser(user._id))
    }
  }
  _addGroup () {
    const { form } = this.props

    this.props.dispatch(addGroup(this.props.user._id,
                                  this.props.user._id,
                                  form.AddGroupForm.values.NewGroupName))
    this.props.dispatch({type:'GROUP_ADDED',payload: true})
  }
  //  fetches groups
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

            <div className='mdl-card_supporting-text'>
              Members:
              <ul className="mdl-list">
                {thisGroup.members.map((member) => {
                  return <li className="mdl-list__item" key={member._id}>
                      <strong>{member.facebook.name}</strong></li>
                })}
              </ul>
              Plans:
              <ul className="mdl-list">
                {thisGroup.plans.map((planOption) => {
                    return <li className="mdl-list__item" key={planOption._id}>
                      <strong>{planOption.title}</strong></li>
                })}
              </ul>
            </div>

          </div>

        groupList.push(groupElement)
      }
      return groupList
    }
  }
  render () {
    const { user, group } = this.props
    this._getGroups()
    var groupElement = this._generateGroupElement(group)

    return (
      <div>
        <h2>Groups</h2>
        <AddGroupForm onSubmit={this._addGroup.bind(this)}/>
        {groupElement}
      </div>
    )
  }
}
