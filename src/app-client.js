'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes.jsx';
require('./static/styles/main.scss');

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
