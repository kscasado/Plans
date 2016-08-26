import React from 'react'

const CreatePlan = React.createClass({
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>

              <form className='form-inline' onSubmit={this.searchYelp}>
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
    console.log(this.refs)
    //console.log(searchTerm+location)
  }
})

module.exports = CreatePlan
