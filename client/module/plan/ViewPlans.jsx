import React from 'react'
import { connect } from 'react-redux'
import { getUsersPlans } from '../../actions/eventAction.js'

@connect((store) => {
  return {
    user: store.user,
    plans: store.plans,
    group: store.group
  }
})

export default class ViewPlans extends React.Component {
  render () {
    this._getPlans()
    return (
      <h1>View Plans</h1>


    )
  }
  componentWillMount () {

  }
  componentWillUnmount () {


  }
  _getPlans(){
    const { user, plans } = this.props
    if(user.isFetched && !plans.plansFetched){
      this.props.dispatch(getUsersPlans(user._id))
    }

  }
}
