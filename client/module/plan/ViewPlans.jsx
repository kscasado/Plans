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
    var planListElement = this._generatePlanList()
    return (
      <h1>View Plans</h1>
      {planListElement}

    )
  }
  componentWillMount () {

  }
  componentWillUnmount () {


  }
  _generatePlanList(){
    const { plans } = this.props
    if(plans.plansFetched){
      for(var plan of plans.plans){
        <div key={plan.id} className='mdl-card mdl-cell mdl-shadow--4dp'>
          <div className='mdl-card_media'>
            <img src={plan.imageUrl} className='img-responsive'/>
            </div>
          <div className='mdl-card_title mdl-card--expand'>
            <strong>Group:{plan.group}</strong>
          </div>


          </div>

      }
    }else{
      return <br></br>
    }
  }
  _getPlans(){
    const { user, plans } = this.props
    console.log(user.isFetched && !plans.plansFetched)
    if(user.isFetched && !plans.plansFetched){
      this.props.dispatch(getUsersPlans(user._id))
    }

  }
}
