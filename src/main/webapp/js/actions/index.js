import { normalize } from 'normalizr'
import * as api from '../api'
//import * as schema from './schema'

export const fetchArticles = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_ARTICLES_REQUEST',
  })

  const nextPage = Math.floor(getState().articles.length /10) + 1

  return api.fetchArticles(nextPage, 10).then(
    response => dispatch({
      type: 'FETCH_ARTICLES_SUCCESS',
      response: response
    }),
    error => dispatch({
      type: 'FETCH_ARTICLES_FAILURE',
      error: error
    })
  )
}

export const fetchArticlesCount = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_ARTICLES_COUNT_REQUEST',
  })

  return api.fetchArticlesCount().then(
    response => dispatch({
      type: 'FETCH_ARTICLES_COUNT_SUCCESS',
      response: response
    }),
    error => dispatch({
      type: 'FETCH_ARTICLES_COUNT_FAILURE',
      error: error
    })
  )
}

