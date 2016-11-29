import initialState from './initial-state'

function isFetching(state = initialState.isFetching, action) {
  switch (action.type) {
    case 'FETCH_ARTICLES_REQUEST':
      return true
    case 'FETCH_ARTICLES_SUCCESS':
    case 'FETCH_ARTICLES_FAILURE':
      return false
    default:
      return state
  }
}

export default isFetching
