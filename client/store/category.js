import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CATEGORIES = 'SET_CATEGORIES'

/**
 * INITIAL STATE
 */

 // Dan was here ;)

const initialState = {}

/**
 * ACTION CREATORS
 */
const setCategories = categories => ({type: SET_CATEGORIES, categories})

/**
 * THUNK CREATORS
 */
export const getCategories = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/categories');
      const categories = response.data;
      console.log('CATEGORIES', categories)
      const action = setCategories(categories);
      dispatch(action);
    }
    catch (error){
      console.log(error)
    }
  };
};

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {...state, categories: action.categories}
    default:
      return state
  }
}
