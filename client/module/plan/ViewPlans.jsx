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
      <div>
        <h1>View Plans</h1>
        <div className="mdl-grid">
          {planListElement}
        </div>
      </div>
    )
  }
  componentWillMount () {

  }
  componentWillUnmount () {


  }
  _generatePlanList () {
    const { plans } = this.props
    if(plans.plansFetched){
      let planList= []
      for(var plan of plans.plans){
        const planElement =
          <div key={plan.id} className='mdl-card mdl-cell mdl-shadow--4dp'>
            <div className='mdl-card_media'>
              <img src={plan.image} className='img-responsive'/>
              </div>
            <div className='mdl-card_title mdl-card--expand'>
              <strong>Plan:{plan.title}</strong>
              <br></br>
              <strong>Group:{plan.group}</strong>
            </div>
            <div className='mdl-card_supporting-text'>
              <strong>Address:{plan.address}</strong>
            </div>


          </div>
        planList.push(planElement)

      }
      return planList
    }else{
      return <br></br>
    }
  }
  //  dispatch to the getUserPlans to get the users plans from redux layer
  _getPlans () {
    const { user, plans } = this.props
    if(user.isFetched && !plans.plansFetched){
      this.props.dispatch(getUsersPlans(user._id))
    }

  }
}
