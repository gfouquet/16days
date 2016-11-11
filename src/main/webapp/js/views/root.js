import React from 'react'
import Home from './home'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import App from './home'

const Root = ({store}) => (
  <Provider store={store}>
    <Home/>
  </Provider>
)

export default Root
