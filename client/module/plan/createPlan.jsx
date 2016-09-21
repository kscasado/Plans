import React from 'react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm.jsx'
import { addPlanOption } from '../../actions/userAction.js'
import { getBusinessesFromYelp } from '../../actions/eventAction.js'

@connect((store) => {
  return {
    user: store.user,
    plans: store.plans,
    form: store.form
  }
})

export default class CreatePlan extends React.Component {
  render () {
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
  componentWillMount () {

  }
  componentWillUnmount () {


  }
   _handleSubmit () {
    const { form, dispatch } = this.props
      dispatch(getBusinessesFromYelp(form.SearchForm.values.locationTerm,
              form.SearchForm.values.searchTerm))
}
  /*
    Create a businessList based on the state

  */
  //renders the businesses
  _createList () {
    const { businesses }= this.props.plans
    if(businesses.length === 0){
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
              <a href='/api/yelp/{business.id}'>{business.name}</a>
            </div>

              <div className='mdl-cad_supporting-text'>
                <img className='text-right' src={business.rating_img_url} className='img-responsive' />
                <ul className='list-inline'>
                  {business.categories.map(function(categorie, i){
                    return <li key={i}>{categorie[0]} </li>
                  })}

                </ul>
            </div>
            <div className='mdl-layout-spacer'></div>
          <div id="AddPlanIcon" className="mdl-card_menu">
            <button onClick={this._addPlan.bind(this,business)}id="AddPlanIcon" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i id="AddPlanIcon" className="material-icons">add</i>
              <span class="mdl-tooltip" for="AddPlanIcon">Add This Plan</span>

            </button>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>

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
    const { user } = this.props
    console.log(user.groups[0])
    this.props.dispatch(addPlanOption(user._id, user.groups[0], business))
  }
  /*
    gets the location is no location is entered


  */
  _getLocation (searchTerm) {
    if (navigator.geolocation) {
      var startPos
      var geoSuccess = function (position) {
        startPos = position
        getYelpResults(startPos,SearchTerm,true)
      }
      navigator.geolocation.getCurrentPosition(geoSuccess)
    } else {
      console.log('Geolocation is not supported for this Browser/OS version yet.')
    }
  }
  /*
    uses yelp api to get search result and populate state with business list

  */
  _getYelpResults(userLocation,SearchTerm,isLatLong){
    this.props.dispatch(getGroupsFromUser(userLocation,SearchTerm))

  }
}
