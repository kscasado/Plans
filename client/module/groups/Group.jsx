
import React from 'react'
import AddMemberForm from './addMemberForm.jsx'
import { connect } from 'react-redux'
import { addUserToGroup, addPlanToGroup } from '../../actions/groupAction.js'
import moment from 'moment'
import { Link } from 'react-router'
import  { Dialog}  from 'react-toolbox/lib/dialog'
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
            <DatePicker label='Plan Date'
              onChange={this._handleDateChange.bind(this)}
              value={this.state.planDate} />
              <TimePicker
                label='Plan Time'
                onChange={this._handleChangeTime.bind(this)}
                value={this.state.planTime}
              />
          </div>

        </Dialog>
        <CardTitle>
          Group Name:<strong> {group.groupname} </strong>
        </CardTitle>

        <CardText>
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
              return ( <li className="mdl-list__item" key={plan._id}>
                      <Link to={`plans/${plan._id}`}>
                      {moment(plan.date).format('ddd, MMM D hA')}
                    </Link>
                  </li> )
            })}
          </ul>

      </CardText>
      <CardActions>
        <button onClick={this._addPlan.bind(this, group._id)} className="mdl-button mdl-js-button mdl-button--raised">Create Plan</button>
      </CardActions>

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
    this.props.dispatch(addPlanToGroup(this.props.group._id,this.state.planDate,
                                        this.state.planTime))
    this.setState({dialogView: false})

  }
  _handleToggleView () {
    this.setState({dialogView: false})
  }
  _handleChangeTime (time) {
    this.setState({planTime: time})
  }
  _handleDateChange(date){
    this.setState({planDate: date})
  }
  _addPlan () {
    this.setState({dialogView: true})
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
