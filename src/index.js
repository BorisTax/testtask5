//import 'bootstrap/dist/css/bootstrap.min.css'
//import * as $ from 'jquery'
//import 'popper.js'
//import 'bootstrap/dist/js/bootstrap.bundle.min'
//import 'owl.carousel'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from './store'
import routes from './routes'


const history = createHistory()
const store = configureStore(history)
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        {routes}
    </ConnectedRouter>
  </Provider>,
  rootElement
)