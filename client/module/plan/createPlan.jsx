import React from 'react'

class CreatePlan extends React.Component {
  render(){
    return (
      <div className='container'>
        <div className='row'>
          <div className='text-center'>
              <form onSubmit={this.searchYelp}>
                <h2>Create a Plan</h2>
                <input placeholder='Enter Search Term' ref='searchTerm' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = CreatePlan
