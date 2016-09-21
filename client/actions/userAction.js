import axios from 'axios'
/*
  get a list of groups that the user has
*/
export function getGroups (userID) {
  return function (dispatch) {
    axios.get('/api/users/' + userID + '/groups')
      .then(response => {
        dispatch({type:"GET_GROUPS", payload: response})
      })
      .catch(error => {
        dispatch({type:"GET_GROUPS_FAILED", payload: error})
      })
  }
}
/*
  getUser information in json format
*/
export function getUser (userID) {
return function (dispatch){
  axios.get('/api/users/' + userID)
    .then(response => {
      dispatch({type: "GET_USER", payload: response.data})
    })
    .catch(error => {
      dispatch({type: "GET_USER_FAILED", payload: error})
    })
  }
}
export function getEvents (userID) {
  return function(dispatch){
  axios.get('/api/users/' + userID + '/events')
    .then(response => {
      dispatch({type: "GET_EVENT", payload:response})
    })
    .catch(error => {
      dispatch({type: "GET_EVENT_ERROR", payload:error})
    })
  }
}
/*
  add a Event to the users eventList given the Event information
*/
export function addPlanOption (userID,groupID, Event) {
  return function (dispatch) {

    axios.post('/api/users/' + userID + '/group/'+groupID + '/addPlanOption', {
      business: Event
    })
    .then(response => {
      console.log(response+'in response')
      dispatch({type: "ADD_EVENT", payload:response.data})
    })
    .catch(error => {
      console.log(error)
      dispatch({type:"ADD_EVENT_ERROR", payload:error})
    })
  }
}
/*
  add a group to the users groupList given the array of members and the
  name of the group
*/
export function addGroup (userID, members, name) {
  //console.log('userID: '+userID+'members:'+members)
  return function(dispatch){
    axios.post('/api/users/' + userID + '/addGroup', {
      memberIDs: members,
      groupName: name
    })
    .then(response => {
      console.log('in the response')
      console.log(response)
      dispatch({type:'ADD_GROUP', payload: response.data})
    })
    .catch(error => {
      console.log(error)
      dispatch({type: 'ADD_GROUP_FAILED', payload:error})
    })
  }
}
