import axios from 'axios'
//  use yelp query to get businesses given location and search term
export function getBusinessesFromYelp (userLocation, searchTerm, isLatLong){
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
//  get the plans that the user has from the db
export function getUsersPlans (userID) {
  return function (dispatch) {
    axios.get('/api/plans/' + userID)
      .then(response => {
        dispatch({ type: "PLANS_FETCHED", payload: response.data })
      })
      .catch(error => {
        dispatch({ type: "PLANS_FETCHED_ERROR", payload: error })
      })
  }
}
