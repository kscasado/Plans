import axios from 'axios'
//  use api to get plan data
export function getPlan (planID) {
  return function (dispatch) {
    axios.get('/api/plans/' + planID+ '/getPlan')
      .then(response => {

        dispatch({type: 'PLAN_FETCHED', payload: response.data})
      })
      .catch(error => {
        dispatch({type: 'PLAN_FETCHED_ERROR', payload: error})
      })
  }
}
/*
  add a PlanOption to the Event and associate it with the group
*/
export function addPlanOption ( planID, PlanOption) {
  return function (dispatch) {
    axios.post('/api/plans/' + planID + '/addPlanOption', {
      business: PlanOption
    })
    .then(response => {
      dispatch({type: 'ADD_PLAN_OPTION', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'ADD_PLAN_OPTION_FAILED', payload: error})
    })
  }
}
/*
  vote for the plan option
*/
export function voteForOption ( optionID, planID){
  return function (dispatch) {
    axios.post('/api/plans/'+ planID+'/options/'+optionID+'/vote')
    .then(response => {
      dispatch({type: 'VOTED', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'VOTE_FAILED', payload: error})
    })
  }
}
