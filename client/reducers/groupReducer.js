export default function reducer(state = {
  groups: [],
  isFetched: false,
  error: null}, action) {
  switch (action.type) {
    case 'GET_GROUPS_WITH_USER': {
      var newList = [...state.groups]
      for(var group of action.payload) {
        newList.push({
          _id: group._id,
          groupname: group.groupname,
          members: group.members,
          plans: group.plans
        })
      }
      return { ...state, groups: newList, isFetched: true }
    }
    case 'GET_GROUPS_WITH_USER_ERROR': {
      return {...state, error: action.payload}
    }
  }
  return state
}
