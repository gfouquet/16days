import {combineReducers} from 'redux'

export const initialState = {
  articles: [],
  isFetching: false
}

const sixteenDays = combineReducers({articles, isFetching})
export default sixteenDays

function articles(state = initialState.articles, action) {
  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return action.response
    default:
      return state
  }
}

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
