import {combineReducers} from 'redux'
import * as api from '../api'

export const initialState = {
  articles: api.articles
}

console.log("api", api)
const sixteenDays = combineReducers({articles})
export default sixteenDays

function articles(state = initialState.articles, action) {
  action
  console.log("articles", state)
  return state
}
