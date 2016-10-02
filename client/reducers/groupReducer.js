var initialState = {
  groups: [],
  isFetched: false,
  error: null
}
export default function reducer(state = initialState, action) {
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

    case 'GROUP_ADDED': {
      return { ...state, isFetched: false, error: null }
    }
    case 'GET_GROUPS_WITH_USER_ERROR': {
      return {...state, error: action.payload}
    }
    case 'GROUP_LOGOUT': {
      return { groups: [],
      isFetched: false,
      error: null }
    }
    case 'ADD_MEMBER': {
      return { ...state, isFetched: false, error: null }
    }
    case 'ADD_MEMBER_FAILED': {
      return { ...state, error: action.payload, isFetched: false }
    }
    case 'ADD_PLAN': {
      return { ...state, isFetched: false, error: null }
    }
    case 'ADD_PLAN_FAILED': {
      return { ...state, error:action.payload }
    }
  }
  return state
}
