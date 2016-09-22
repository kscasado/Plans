import React from 'react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm.jsx'
import { addPlanOption } from '../../actions/userAction.js'
import { getBusinessesFromYelp } from '../../actions/eventAction.js'
import { getGroupsfromUser } from '../../actions/groupAction.js'

@connect((store) => {
  return {
    user: store.user,
    plans: store.plans,
    group: store.group,
    form: store.form
  }
})

export default class CreatePlan extends React.Component {
  componentWillMount () {

  }

  render () {
    this._getGroups()
    const businesses = this._createList()
    return (
      <div className='mdl-grid'>
        <div className='text-center'>

            <SearchForm onSubmit={this._handleSubmit.bind(this)}/>

          <div className='mdl-grid'>
            {businesses}
          </div>
        </div>
      </div>
    )
  }
  /*
    used to keep state for when adding a plan
    to a specific group
    TODO: Try to refactor setState is not needed in this component

  */
  _changeGroupForPlan(event) {
    console.log(event.target.value)
    this.props.dispatch({type:"CHANGE_GROUP_FOR_PLAN", payload:event.target.value})
  }
  /*
    Handles the Submit for the yelp form
    TODO: Add getting geolocation if value is not entered
  */
   _handleSubmit () {
    const { form, dispatch } = this.props
    if(!form.SearchForm.values.locationTerm){
      _getLocation(form.SearchForm.values.searchTerm)
    }
      dispatch(getBusinessesFromYelp(form.SearchForm.values.locationTerm,
              form.SearchForm.values.searchTerm, false))
}
  /*
    Create a businessList based on the SearchForm
    TODO: function is too big, refactor
  */
  _createList () {
    const { businesses }= this.props.plans
    const { user, group } = this.props

    if (businesses.length === 0) {
      return<br></br>
    }
    else{
      let businessList = []

      for(var business of businesses) {
        const businessElement = (


          <div key={business.id} className='mdl-card mdl-cell mdl-shadow--4dp'>
            <div className='mdl-card_media'>
              <img src={business.image_url} className='img-responsive'/>
              </div>
            <div className='mdl-card_title mdl-card--expand'>
              <a href={business.url}>{business.name}</a>
            </div>

              <div className='mdl-card_supporting-text'>
                <img className='text-right' src={business.rating_img_url} className='img-responsive' />
                <ul className='list-inline'>
                  {business.categories.map(function(categorie, i){
                    return <li key={categorie}>{categorie[0]} </li>
                  })}

                </ul>
            </div>
            <div className='mdl-layout-spacer'></div>
          <div id="AddPlanIcon" className="mdl-card_menu">
            <select onChange={this._changeGroupForPlan.bind(this)} value={this.props.plans.groupForPlan}>
              {group.groups.map((group)=> {
                return <option value={group._id} key={group._id}>{group.groupname}</option>
              })}
            </select>
            <button onClick={this._addPlan.bind(this, business)} id="AddPlanIcon" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i id="AddPlanIcon" className="material-icons">add</i>
            </button>

          </div>
          <br></br>
          <br></br>
          {this.props.children}
        </div>
        )
        businessList.push(businessElement)
      }
      return businessList
    }

  }
  /*
    get the yelp results given the location and search term
  */
  _addPlan (business) {
    const { user, plans } = this.props
    var groupID= ((plans.groupForPlan) ? plans.groupForPlan : user.groups[0])
    this.props.dispatch(addPlanOption(user._id, groupID, business))
  }
  _getGroups () {
    const { user, group } = this.props
    if (user.isFetched && !group.isFetched) {
      this.props.dispatch(getGroupsfromUser(user._id))
    }
  }
  /*
    gets the location is no location is entered


  */
  _getLocation (searchTerm) {
    const { user, dispatch } = this.props
    if (navigator.geolocation) {
      var startPos
      var geoSuccess = function (position) {
        startPos = position
        console.log(startPos)
        dispatch(getBusinessesFromYelp(startPos, searchTerm, true))
      }
      navigator.geolocation.getCurrentPosition(geoSuccess)
    } else {
      console.log('Geolocation is not supported for this Browser/OS version yet.')
    }
  }
}
