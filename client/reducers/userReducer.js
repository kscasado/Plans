export default function reducer(state={
  _id: null,
  facebook:{
    id: null,
    imageUrl: null,
    name: null,
    token: null,
    email: null
  },
  groups: [{
    _id: null,
    groupName: null,
    members: [],
    plans: []
  }],
  plans: null,
  isFetched:false,
  hasGroups: false,
  hasEvents: false}, action) {
    switch (action.type) {
      case 'GET_USER': {

        return {...state,_id:action.payload._id, facebook: action.payload.facebook,
                        groups: action.payload.groups, plans: action.payload.plans, isFetched:true}
      }
      case 'ADD_GROUP': {
        return { ...state,
          groups: [...state.groups, {_id: action.payload._id, groupName: action.payload.groupname,
                                    plans: action.payload.plans, members: action.payload.members}]
        }

      }
      case 'ADD_GROUP_FAILED': {
        return {
          ...state
        }
      }
      case 'ADD_EVENT': {
        return {
          ...state,
          user: [...user.events, action.payload]
        }
      }
      case 'GET_GROUPS': {
        return {
          ...state,
          groups: action.payload.data
        }
      }

    }
    return state
}
