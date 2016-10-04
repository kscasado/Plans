import axios from 'axios'
//  use api to get plan data
export function getPlan (planID) {
  return function (dispatch) {
    axios.get('/api/plans/' + planID)
      .then(response => {
        dispatch({type: 'PLAN_FETCHED', payload: response.data})
      })
      .catch(error => {
        dispatch({type: 'PLAN_FETCHED_ERROR', payload: error})
      })
  }
}
