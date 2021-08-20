import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

import { Provider } from 'react-redux';
import { store } from './store/store'
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

