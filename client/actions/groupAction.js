import axios from 'axios'
//gets the groups that the user is apart of
export function getGroupsfromUser (userID) {
  return function (dispatch) {
    axios.get('/api/groups/' + userID)
      .then(response => {
        dispatch({type: 'GET_GROUPS_WITH_USER', payload: response.data})
      })
      .catch(error => {
        dispatch({type: 'GET_GROUPS_WITH_USER_ERROR', payload: error})
      })
  }
}
export function addUserToGroup (userEmail, groupID) {
  return (dispatch) => {
    axios.post('/api/groups/' + groupID + '/addMember', {
      UserEmail: userEmail
    })
    .then(response => {
      dispatch({type: 'ADD_MEMBER', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'ADD_MEMBER_FAILED', payload: 'Member not found'})
    })
  }
}
export function addPlanToGroup (groupID, date, time) {
  return (dispatch) => {
    axios.post('/api/groups/' + groupID + '/addPlan', {
      planDate: date,
      planTime: time
    })
    .then(response => {
      dispatch({type: 'PLAN_ADDED', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'PLAN_ADDED_FAILED', payload: 'Unable to add Plan'})
    })
  }
}
