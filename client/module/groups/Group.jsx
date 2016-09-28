
import React from 'react'
import AddMemberForm from './addMemberForm.jsx'
import { connect } from 'react-redux'
import { addUserToGroup } from '../../actions/groupAction.js'
@connect((store) => {
  return{
    form: store.form
  }
})
export default class Group extends React.Component {

  componentWillMount () {

  }
  componentWillUnmount () {

  }


  render () {
    const { group } = this.props
    return (
      <div key={group._id} className='mdl-card mdl-cell mdl-shadow--4dp'>
        <div className='mdl-card_title mdl-card--expand'>
          Group Name: {group.groupname}
        </div>

        <div className='mdl-card_supporting-text'>
          Members:
          <ul className="mdl-list">
            {group.members.map((member) => {
              return <li className="mdl-list__item" key={member._id}>
                  <strong>{member.facebook.name}</strong></li>
            })}
          </ul>
          <AddMemberForm onSubmit={this._addMember.bind(this)} key={group._id}></AddMemberForm>

          Plans:
          <ul className="mdl-list">
            {group.plans.map((planOption) => {
                return <li className="mdl-list__item" key={planOption._id}>
                  <strong>{planOption.title}</strong></li>
            })}
          </ul>
        </div>

      </div>

    )
  }
  _addMember () {
    const {group, form} = this.props
    console.log(this.props.group)
    this.props.dispatch(addUserToGroup(form.AddMemberForm.values.memberEmail,
                                        group._id))
  }
}
