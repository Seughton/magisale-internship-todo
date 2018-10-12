import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import ToDo from './ToDo';
import store from './Store/createStore'


ReactDOM.render(
    <Provider store={ store }>
      <ToDo />
    </Provider> ,
  document.getElementById('root'));
