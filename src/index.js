import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import App from './App'
import Header from './header/components/header'
import formReducer from './reducers/formReducer'
import itemsReducer from './reducers/itemsReducer'

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    form: formReducer,
    items: itemsReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const history = createHistory()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={App}/>
        <Route exact path='/search' component={Header}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
