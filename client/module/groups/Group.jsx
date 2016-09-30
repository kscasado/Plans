
import React from 'react'
import AddMemberForm from './addMemberForm.jsx'
import { connect } from 'react-redux'
import { addUserToGroup } from '../../actions/groupAction.js'
import  { Dialog }  from 'react-toolbox/lib/dialog'
import { TimePicker } from 'react-toolbox/lib/time_picker'
import { DatePicker } from 'react-toolbox/lib/date_picker'
@connect((store) => {
  return{
    form: store.form
  }
})
export default class Group extends React.Component {
  actions = [
   { label: "Cancel", onClick: this._handleToggleView.bind(this) },
   { label: "Save", onClick: this._handleToggleView.bind(this) }
  ]
  componentWillMount () {
    this.setState({
      dialogView: false,
      eventDate: new Date(),
      eventTime: new Date()
      })
  }
  componentWillUnmount () {

  }


  render () {
    const { group } = this.props
    console.log(this.state.eventDate)
    return (

      <div key={group._id} className='mdl-card mdl-cell mdl-shadow--4dp'>
        <Dialog active={this.state.dialogView}
                actions={this.actions}>
          <h2>Create Event</h2>
          <div>
            <DatePicker label='Event Date' sundayFirstDayOfWeek
              onChange={this._handleDateChange.bind(this)}
              value={this.state.eventDate} />
              <TimePicker
                label='Event Time'
                onChange={this._handleChangeTime.bind(this)}
                value={this.state.eventTime}
              />
          </div>

        </Dialog>
        <div className='mdl-card_title mdl-card--expand'>
          Group Name:<strong> {group.groupname} </strong>
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
          <div className='mdl-card_menu'>
            <button onClick={this._addEvent.bind(this, group._id)}className="mdl-button mdl-js-button mdl-button--raised">Create Event</button>
          </div>

      </div>

      </div>

    )
  }
  _handleToggleView () {
    this.setState({dialogView: false})
  }
  _handleChangeTime (time) {

    this.state.eventTime = time
  }
  _handleDateChange(date){

    this.state.eventDate = date
  }
  _addEvent(groupID){
    this.setState({dialogView: true})
    console.log(groupID)
  }
  _closeDialog() {
    this.setState({modalView: false})
  }
  _addMember () {
    const {group, form} = this.props
    console.log(this.props.group)
    this.props.dispatch(addUserToGroup(form.AddMemberForm.values.memberEmail,
                                        group._id))
  }
}
