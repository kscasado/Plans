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
