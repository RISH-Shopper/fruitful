import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CATEGORIES = 'SET_CATEGORIES'
const SELECT_CATEGORY = 'SELECT_CATEGORY'

/**
 * INITIAL STATE
 */

 // Dan was here ;)

const initialState = {
  categories: [],
  selectedCategory: 0
}

/**
 * ACTION CREATORS
 */
export const setCategories = categories => ({type: SET_CATEGORIES, categories})
export const selectCategory = categoryId => ({type: SELECT_CATEGORY, categoryId})

/**
 * THUNK CREATORS
 */
export const getCategories = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/categories');
      const categories = response.data;
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
    case SELECT_CATEGORY:
      return {...state, selectedCategory: action.categoryId}
    default:
      return state
  }
}
