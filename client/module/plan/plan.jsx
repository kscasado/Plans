import React from 'react'

class Plan extends React.Component {
  render() {

    
    return (
      <div>
        <h2 className='text-cent'>Avaliable Options</h2>
        {businesses}
      </div>
      )
  },

  containerWillMount(){
    this.createList()
  }
  createList() {
    const { businesses }= this.props
    console.log(businesses)
    if(!businesses){
      return<br></br>
    }
    else{
      let businessList = []

      for(var business of businesses) {
        const businessElement = (

          <div className='panel panel-primary'>
            <div className='panel-heading'>{business.name}</div>
            <div className='panel-body yelp-plan'><img src={business.image_url} className='img-responsive'/>
            <img className='text-right' src={business.rating_img_url} className='img-responsive' />
            <ul className='list-inline'>
              {business.categories.map(function(categorie, i){
                return <li>{categorie[0]} |</li>
              })}

            </ul>
          </div>
      </div>
        )
        businessList.push(businessElement)
      }
      return businessList
    }
  }
}

module.exports = Plan
