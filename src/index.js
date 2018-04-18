import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { Route } from 'react-router'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import shoppingCartReducer from './reducers/shoppingCartReducer'
import itemsReducer from './reducers/itemsReducer'
import applicationReducer from './reducers/applicationReducer'
import gamesReducer from './reducers/gamesReducer'

import MainPage from './mainPage/containers/mainPage'
import SearchResultsPage from './searchResultsPage/containers/searchResultsPage'
import CheckoutPage from './checkoutPage/components/checkoutPage'
import Layout from './layout/containers/layout'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunkMiddleware, routerMiddleware(history)]

const store = createStore(
  combineReducers({
    form: formReducer,
    items: itemsReducer,
    games: gamesReducer,
    router: routerReducer,
    application: applicationReducer,
    shoppingCart: shoppingCartReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares))
)

const history = createHistory()

const useDefaultLayout = content => (
  <Layout>
    { content }
  </Layout>
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={() => useDefaultLayout(<MainPage />)} />
        <Route exact path="/search" component={() => useDefaultLayout(<SearchResultsPage />)} />
        <Route exact path="/checkout" component={() => useDefaultLayout(<CheckoutPage />)} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
