import axios from 'axios'

export function getGroups () {
  return function (dispatch) {
    axios.get('/api/users/' + user._id + '/groups')
      .then(response => {
        return response
      })
      .catch(error => {
        return error
      })
  }
}
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

export function addEvent(userID, Event) {
  axios.post('/api/users/' +userID + '/addEvent',
        )
}
