import { normalize } from 'normalizr'
import * as api from '../api'
import * as schema from './schema'

export const fetchArticles = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_ARTICLES_REQUEST',
  })

  return api.fetchArticles(1, 10).then(
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

