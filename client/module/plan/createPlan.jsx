import React from 'react'
import $ from 'jquery'
const CreatePlan = React.createClass({
  render ( ) {

    const businesses = this.createList()
    return (
      <div className='container-fluid'>
        <div className='row'>


              <form className='form-inline text-center' onSubmit={this._searchYelp}>
                <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                  <label htmlFor='searchTerm' className='mdl-textfield__label'> Enter Search Term </label>
                  <input className='mdl-textfield__input' placeholder='Enter Search Term' ref='searchTerm' />
                  </div>
                  <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>

                  <label htmlFor='locationTerm' className='mdl-textfield__label'> Enter Location </label>
                  <input className='mdl-textfield__input' placeholder='Enter Location' ref='locationTerm' />
                  </div>
                  <div>
                  <button type="submit" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons">search</i>

                  </button>
                </div>
          </form>
          <div className='mdl-grid'>
            {businesses}
          </div>
        </div>
      </div>
    )
  },
  componentWillMount () {

  },
  componentWillUnmount () {

      this.serverRequest.abort()
  },
  createList () {
    const { businesses }= this.state
    if(!businesses){
      return<br></br>
    }
    else{
      let businessList = []

      for(var business of businesses) {
        const businessElement = (


          <div className='mdl-card mdl-cell mdl-shadow--4dp'>
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
                    return <li>{categorie[0]} |</li>
                  })}

                </ul>
            </div>
            <div className='mdl-layout-spacer'></div>
          <div className ="mdl-card_menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">note add</i>

            </button>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>

            </button>
          </div>
          <br></br>
          <br></br>
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
  _getLocation (searchTerm) {
    if (navigator.geolocation) {
      var startPos;

      var geoSuccess = function (position) {
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
      url: '/api/yelp/search',
      data:{location:userLocation, term:SearchTerm,isLatLong: isLatLong}

    }).done((result) => {
        this.setState({businesses: result})

    }).fail((er) => {
      console.log(er)
    })
  }

})

module.exports = CreatePlan
