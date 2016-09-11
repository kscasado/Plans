import axios from 'axios'
/*
  get a list of groups that the user has
*/
export function getGroups (userID) {
  return function (dispatch) {
    axios.get('/api/users/' + userID + '/groups')
      .then(response => {
        return response
      })
      .catch(error => {
        return error
      })
  }
}
/*
  getUser information in json format
*/
export function getUser (userID) {
  axios.get('/api/users/' + userID)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}
export function getEvents (userID) {
  axios.get('/api/users/' + userID + '/events')
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}
/*
  add a Event to the users eventList given the Event information
*/
export function addEvent (userID, Event) {
  axios.post('/api/users/' + userID + '/addEvent', {
    userEvent: Event
  })
  .then(response => {
    return response
  })
  .catch(error => {
    return error
  })
}
/*
  add a group to the users groupList given the array of members and the
  name of the group
*/
export function addGroup (userID, members, name) {
  axios.post('/api/users/' + userID + '/addGroup', {
    memberNames: members,
    groupName: name
  })
  .then(response => {
    return response
  })
  .catch(error => {
    return error
  })
}
