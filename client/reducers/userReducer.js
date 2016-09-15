export default function reducer(state={
  _id: null,
  facebook:{
    id: null,
    imageUrl: null,
    name: null,
    token: null,
    email: null
  },
  groups: null,
  plans: null,
  hasGroups: false,
  hasEvents: false}, action) {
    switch (action.type) {
      case 'GET_USER': {
        return {...state,_id:action.payload._id, facebook: action.payload.facebook,
                        groups: action.payload.groups, plans: action.payload.plans}
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
