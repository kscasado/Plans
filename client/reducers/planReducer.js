let initialState = {
  groupname: null,
  groupID: null,
  date: null,
  id: null,
  options: [],
  winner: null,
  isFetched: false,
  error: null
}
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'PLAN_FETCHED': {
      return {
        ...state,
        groupname: action.payload.group.groupname,
        date: action.payload.date,
        id: action.payload._id,
        groupID: action.payload.group._id,
        isFetched: true,
        error: null
      }
    }
    case 'PLAN_FETCHED_ERROR': {
      return { ...state, error: action.payload, isFetched: true}
    }
    case 'PLAN_REMOVE': {
      return { initialState
      }
    }
    case 'ADD_PLAN_OPTION': {
      let newPlanOption = {
        id: action.payload._id

      }
      return {...state}
    }
    case 'ADD_PLAN_OPTION_FAILED': {
      return {
        ...state, error:action.payload
      }
    }
  }
  return state
}
