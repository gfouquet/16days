import {combineReducers} from 'redux'
import articles from './articles'
import isFetching from './is-fetching'
import articlesCount from './articles-count'

const sixteenDays = combineReducers({articles, isFetching, articlesCount})
export default sixteenDays

export function hasMoreArticles(state) {
  return state.articlesCount == -1 || state.articles.length < state.articlesCount
}
