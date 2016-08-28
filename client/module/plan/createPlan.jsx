import React from 'react'
import $ from 'jquery'
const CreatePlan = React.createClass({
  render ( ) {
    return (
      <div className='container-fluid'>
        <div className='row'>

              <form className='form-inline text-center' onSubmit={this.searchYelp}>
                <div className='form-group'>
                  <label htmlFor='searchTerm' className='control-label'> Enter Search Term </label>
                  <input className='form-control' placeholder='Enter Search Term' ref='searchTerm' />
                  <label htmlFor='locationTerm' className='control-label'> Enter Location </label>
                  <input className='form-control' placeholder='Enter Location' ref='locationTerm' />
                  <button type="submit" className='btn btn-primary'>Search</button>
                </div>
          </form>

        </div>
      </div>
    )
  },
  searchYelp(event){
    event.preventDefault()
    const {searchTerm,locationTerm} = this.refs
    if(!locationTerm.value){
      this.getLocation(searchTerm.value)

    }
    this.getYelpResults(locationTerm.value,searchTerm.value)


  },
  getLocation(searchTerm){
    if (navigator.geolocation) {
      var startPos;

      var geoSuccess = function(position) {
        startPos = position


      }
      navigator.geolocation.getCurrentPosition(geoSuccess)

    }
    else {
      console.log('Geolocation is not supported for this Browser/OS version yet.')

    }
  },
  getYelpResults(userLocation,SearchTerm){
    $.ajax({
  method: 'GET',
  url: '/api/searchYelp',
  data:{location: userLocation, term: SearchTerm}

}).done((result) => {
  console.log(result)
}).fail((er) => {
  console.log(er)
})
  }

})

module.exports = CreatePlan
