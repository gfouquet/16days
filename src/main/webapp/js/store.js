import {createStore, applyMiddleware, compose} from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import sixteenDays from './reducers'
import {initialState} from './reducers'


console.log("initialState", initialState)

const configureStore = () => {
  const logger = createLogger()

  const middleware = compose(
    applyMiddleware(thunk, promise, logger)
    , window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  return createStore(sixteenDays, initialState, middleware)
}

export default configureStore
