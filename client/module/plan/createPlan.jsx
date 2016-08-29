import React from 'react'
import $ from 'jquery'
const CreatePlan = React.createClass({
  render ( ) {

    const businesses = this.createList()
    console.log(businesses)
    return (
      <div className='container-fluid'>
        <div className='row'>


              <form className='form-inline text-center' onSubmit={this._searchYelp}>
                <div className='form-group'>
                  <label htmlFor='searchTerm' className='control-label'> Enter Search Term </label>
                  <input className='form-control' placeholder='Enter Search Term' ref='searchTerm' />
                  <label htmlFor='locationTerm' className='control-label'> Enter Location </label>
                  <input className='form-control' placeholder='Enter Location' ref='locationTerm' />
                  <button type="submit" className='btn btn-primary'>Search</button>
                </div>
          </form>
          {businesses}
        </div>
      </div>
    )
  },
  componentWillMount(){

  },
  componentWillUnmount(){

      this.serverRequest.abort()
  },
  createList(){
    const { businesses }= this.state
    console.log(businesses)
    if(!businesses){
      return<br></br>
    }
    else{
      let businessList = []

      for(var business of businesses){
        const businessElement = (

          <div className='yelp-plan row'>
            <h2>{business.name}</h2>
            <img src={business.image_url} className='img-responsive'/>
          </div>
        )
        businessList.push(businessElement)
      }
      return businessList
    }

  },
  getInitialState(){
    return{
      businesses: null,
      error: false,
      loading: true
    }
  },

  _searchYelp(event){
    event.preventDefault()
    const {searchTerm,locationTerm} = this.refs
    if(!locationTerm.value){
      this.getLocation(searchTerm.value)

    }
    this.getYelpResults(locationTerm.value,searchTerm.value)


  },
  _getLocation(searchTerm){
    if (navigator.geolocation) {
      var startPos;

      var geoSuccess = function(position) {
        startPos = position
        getYelpResults(startPos,SearchTerm,true)


      }
      navigator.geolocation.getCurrentPosition(geoSuccess)

    }
    else {
      console.log('Geolocation is not supported for this Browser/OS version yet.')

    }
  },
  getYelpResults(userLocation,SearchTerm,isLatLong){

    $.ajax({
      method: 'GET',
      url: '/api/searchYelp',
      if(isLatLong){
        data:{location: userLocation, ll: {userLocation.latitude,userLocation.longitude}}
      else{
        data:{location:userLocation, term:SearchTerm}
      }
    }).done((result) => {
        this.setState({businesses: result})

    }).fail((er) => {
      console.log(er)
    })
  }

})

module.exports = CreatePlan
