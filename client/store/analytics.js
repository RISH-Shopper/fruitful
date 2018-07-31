import axios from 'axios'

/**
 * ACTION TYPES
 */
export const GET_ANALYTICS = 'GET_ANALYTICS'

/**
 * INITIAL STATE
 */

const initialState = {
  data: []
}

/**
 * ACTION CREATORS
 */

export const getAnalytics = (data) => ({
  type: GET_ANALYTICS,
  data
})



/**
 * THUNK CREATORS
 */
 export const fetchAnalytics = (apiPath) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/analytics/${apiPath}`)
      const action = getAnalytics(data)
      dispatch(action)
    }
    catch (err) {
      console.log(err)
    }
  }
}



/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ANALYTICS:
      return { ...state, data: action.data}
    default:
      return state
  }
}
