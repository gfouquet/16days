import React from 'react'
import {render} from 'react-dom'
import configureStore from './store'
import Root from 'views/root'

const store = configureStore()
console.log("store", store)

render(<Root store={store} />, document.getElementById('app'))
