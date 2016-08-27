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
      console.log(location)
    }


  },
  getLocation(searchTerm){
    if (navigator.geolocation) {
      var startPos;

      var geoSuccess = function(position) {
        startPos = position
        $.get('/api/searchYelp/')

      }
      navigator.geolocation.getCurrentPosition(geoSuccess)

    }
    else {
      console.log('Geolocation is not supported for this Browser/OS version yet.')

    }
  }

})

module.exports = CreatePlan
