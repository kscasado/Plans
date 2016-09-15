export default function reducer(state={
  user:{
    id: null,
    photo: null,
    groups: null,
    events: null,
    name: null
  },
  hasGroups: false,
  hasEvents: false}, action) {
    switch (action.type) {
      case 'GET_USER': {
        return {...state, user: action.payload}
      }
      case 'ADD_GROUP': {
        return { ...state,
          user: [...user.groups, action.payload]
        }

      }
      case 'ADD_EVENT': {
        return {
          ...state,
          user: [...user.events, action.payload]
        }
      }

    }
    return state
}
