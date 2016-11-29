import initialState from './initial-state'

function articles(state = initialState.articles, action) {
  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return state.concat(action.response)
    default:
      return state
  }
}

export default articles
