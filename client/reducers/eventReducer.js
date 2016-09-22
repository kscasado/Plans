export default function reducer (state = {
  plans: [],
  businesses: [],
  groupForPlan: null,
  businessesFetched: false,
  plansFetched: false,
  searchTerm: null,
  locationTerm: null,
  error: null
  }, action) {
  switch (action.type) {
    case 'GET_BUSINESSES': {
    //  iterate through arrayList and add to state
    return {...state, businesses: action.payload, businessesFetched: true}
    }
    case 'GET_BUSINESSES_ERROR': {
        return {...state, error: action.payload}
    }
    case 'PLANS_FETCHED': {
        var newPlanList = []
        for (var newPlan of action.payload) {
          newPlanList.push({

            _id: newPlan._id,
            title: newPlan.title,
            url: newPlan.url,
            group: newPlan.group.groupname,
            image: newPlan.imageURL,
            address: newPlan.address + ',' + newPlan.city
          })
        }
        return {...state, plans: newPlanList, plansFetched: true}
    }
    case 'PLANS_FETCHED_ERROR': {
      return {...state, error: action.payload}
    }
    case 'CHANGE_GROUP_FOR_PLAN': {
      return { ...state, groupForPlan: action.payload }
    }
    case 'PLAN_LOGOUT': {
      return { plans: [],
      businesses: [],
      groupForPlan: null,
      businessesFetched: false,
      plansFetched: false,
      searchTerm: null,
      locationTerm: null,
      error: null
      }
    }
  }
  return state
}
