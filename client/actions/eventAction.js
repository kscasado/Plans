import axios from 'axios'
//  use yelp query to get businesses given location and search term
export function getBusinessesFromYelp (userLocation, searchTerm){
  return function (dispatch) {
    axios.get('/api/yelp/search', {
              params: {
                location: userLocation,
                term: searchTerm
              }
              })
              .then((response) => {
                dispatch({type: 'GET_BUSINESSES', payload: response.data})
              })
              .catch(error => {
                dispatch({type: 'GET_BUSINESSES_ERROR', payload: error})
              })
  }
}
