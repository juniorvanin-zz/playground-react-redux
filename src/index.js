import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import shoppingCartReducer from './reducers/shoppingCartReducer'
import itemsReducer from './reducers/itemsReducer'

import MainPage from './mainPage/containers/mainPage'
import SearchResultsPage from './searchResultsPage/containers/searchResultsPage'
import CheckoutPage from './checkoutPage/components/checkoutPage'

const middleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    form: formReducer,
    items: itemsReducer,
    router: routerReducer,
    shoppingCart: shoppingCartReducer
  }),
  composeEnhancers(applyMiddleware(middleware))
)

const history = createHistory()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchResultsPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
