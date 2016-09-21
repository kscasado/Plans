export default function reducer(state = {
  plans:[],
  businesses:[],
  businessesFetched:false,
  plansFetched:false,
  error: null
  }, action) {
  switch (action.type) {
      case 'GET_BUSINESSES': {
        //  iterate through arrayList and add to state
        return{...state,businesses:action.payload,businessesFetched:true}
      }
      case 'GET_BUSINESSES_ERROR': {
        return {...state, error:action.payload}
      }

    }
  return state
}
