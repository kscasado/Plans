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
      console.log(action.payload)

      //get options data
      var optionList = []
      for(var option of action.payload.options){
        optionList.push({
          title: option.title,
          id: option._id,
          url: option.url,
          image: option.imageURL,
          votes: option.votes
        })
      }
      console.log(optionList)
      return {
        ...state,
        groupname: action.payload.group.groupname,
        date: action.payload.date,
        id: action.payload._id,
        groupID: action.payload.group._id,
        options: optionList,
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
    case 'VOTED': {
      return {
        ...state, isFetched: false
      }
    }
    case 'VOTE_FAILED': {
      return {
        ...state, error:action.payload
      }
    }
  }
  return state
}
