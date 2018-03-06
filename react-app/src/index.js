import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Home from './components/home/home'
import EventComponent from './components/event/eventComponent'
import ListEventComponent from './components/event/listEventComponent'
import configureStore from './store/configure-store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/event' component={EventComponent} />
        <Route path='/listEvent' component={ListEventComponent} />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)