
import React from 'react'
import AddMemberForm from './addMemberForm.jsx'
import { connect } from 'react-redux'
import { addUserToGroup, addPlanToGroup } from '../../actions/groupAction.js'
import  { Dialog }  from 'react-toolbox/lib/dialog'
import { TimePicker } from 'react-toolbox/lib/time_picker'
import { DatePicker } from 'react-toolbox/lib/date_picker'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
@connect((store) => {
  return{
    form: store.form
  }
})
export default class Group extends React.Component {
  //define a actions field
  actions = [
   { label: "Cancel", onClick: this._handleCancel.bind(this) },
   { label: "Save", onClick: this._handleSave.bind(this) }
  ]
  //since this is a "dumb" component we will use setState instead of store
  componentWillMount () {
    this.setState({
      dialogView: false,
      planDate: new Date(),
      planTime: new Date()
      })
  }
  componentWillUnmount () {

  }


  render () {
    const { group } = this.props
    return (

      <div key={group._id} className='mdl-card mdl-cell mdl-shadow--4dp'>
        <Dialog active={this.state.dialogView}
                actions={this.actions}>
          <h2>Create Plan</h2>
          <div>
            <DatePicker label='Plan Date' sundayFirstDayOfWeek
              onChange={this._handleDateChange.bind(this)}
              value={this.state.planDate} />
              <TimePicker
                label='Plan Time'
                onChange={this._handleChangeTime.bind(this)}
                value={this.state.planTime}
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
            {group.plans.map((plan) => {
                return <li className="mdl-list__item" key={plan._id}>
                  <strong>{plan.date}</strong></li>
            })}
          </ul>
          <CardActions>
            <button onClick={this._addPlan.bind(this, group._id)} className="mdl-button mdl-js-button mdl-button--raised">Create Plan</button>
          </CardActions>

      </div>

      </div>

    )
  }
  _handleCancel() {
    //toggleview
    this.setState({dialogView: false})
  }
  _handleSave() {
    //check to make sure no errors exist
    //check for if the date is in the past or if one already
    //occupies it
    this._addPlan()
  }
  _handleToggleView () {
    this.setState({dialogView: false})
  }
  _handleChangeTime (time) {

    this.state.planTime = time
  }
  _handleDateChange(date){

    this.state.planDate = date
  }
  _addPlan(){
    const { group } = this.props
    this.setState({dialogView: true})
    console.log(group)
    this.props.dispatch(addPlanToGroup(group._id,this.state.planDate,
                                        this.state.planTime))


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
