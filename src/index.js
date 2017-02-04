import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import App from './components/app'
import ProfileContainer from './containers/ProfileContainer'
import About from './components/about'
import NoMatch from './components/no_match'
import Profile from './components/profile'
import reducers from './reducers'


import createLogger from 'redux-logger'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
