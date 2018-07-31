const initialState = {
  foundProductIds: []
}

export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'

export function search(queryAndProducts) {
  return {
    type: UPDATE_SEARCH_RESULTS,
    queryAndProducts
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      const products = action.queryAndProducts.products
      const query = RegExp(action.queryAndProducts.query, 'i')

      let matches = products.filter(product => product.title.match(query))
      const foundProductIds = matches.map(product => product.id)

      return {...state, foundProductIds}
    default:
      return state
  }
}
