import initialState from './initial-state'

function articlesCount(state = initialState.articlesCount, action) {
  switch (action.type) {
    case 'FETCH_ARTICLES_COUNT_SUCCESS':
      return action.response.articlesCount
    default:
      return state
  }
}

export default articlesCount
