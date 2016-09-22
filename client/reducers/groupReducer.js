export default function reducer(state = {
  groups: [],
  isFetched: false,
  error: null}, action) {
  switch (action.type) {
    case 'GET_GROUPS_WITH_USER': {
      var newList = []
      //  iterate through arraylist and add to state
      for (var group of action.payload) {
        newList.push({
          _id: group._id,
          groupname: group.groupname,
          members: group.members,
          plans: group.planOptions
        })
      }
      return { ...state, groups: newList, isFetched: true }
    }
    case 'GET_GROUPS_WITH_USER_ERROR': {
      return {...state, error: action.payload}
    }
    case 'GROUP_LOGOUT': {
      return { groups: [],
      isFetched: false,
      error: null }
    }
  }
  return state
}
