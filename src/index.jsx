import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { initState } from './store/index';
import { getRoutes } from './routing';

const store = initState();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{getRoutes()}</Router>
  </Provider>,
  document.getElementById('app')
);
