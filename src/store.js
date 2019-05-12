import { applyMiddleware, compose, createStore } from 'redux'
//import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers'
//import sagas from './sagas'
import thunk from 'redux-thunk'

export default function configureStore (history) {
  //const sagaMiddleware = createSagaMiddleware()
  let middleware = applyMiddleware(
    //sagaMiddleware,
    thunk,
    routerMiddleware(history)
  )
    /* Incorporate Redux Dev Tools */
   if (process.env.NODE_ENV !== 'production') {
     const devToolsExtension = window.devToolsExtension
     if (typeof devToolsExtension === 'function') {
       middleware = compose(middleware, devToolsExtension())
     }
   }

  const store = createStore(reducers, middleware)
  //sagaMiddleware.run(sagas)
  return store
}