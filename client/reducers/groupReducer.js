export default function reducer(state = {
  groups: [{
    id: null,
    members: [],
    events: [],
    name: null
  }],
  error:null}, action) {
  switch (action.type) {
    case 'GET_GROUPS_WITH_USER': {
      return { ...state, groups:[...state.groups, action.payload] }
    }
    case 'GET_GROUPS_WITH_USER_ERROR': {
      return {...state, error:action.payload}
    }
  }
  return state
}
