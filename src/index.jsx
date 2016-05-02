import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store';
import { getRoutes } from './routing';
import * as a from './actions';

const store = configureStore();
store.dispatch(a.resetUi());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{getRoutes()}</Router>
  </Provider>,
  document.getElementById('app')
);
