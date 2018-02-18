import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import MainPage from './mainPage/containers/mainPage'
import SearchResultsPage from './searchResultsPage/containers/searchResultsPage'
import formReducer from './reducers/formReducer'
import itemsReducer from './reducers/itemsReducer'

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    form: formReducer,
    items: itemsReducer,
    router: routerReducer
  }),
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const history = createHistory()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchResultsPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
