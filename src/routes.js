'use strict';

import React from 'react'
import { Route, IndexRoute, Router } from 'react-router'
import Layout from './components/Layout.jsx';
import SignInPage from './components/SignInPage.jsx';
import IndexPage from './components/IndexPage.jsx';
import GamePage from './components/GamePage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

const routes = (
  <Router>
    <Route path="/profile" component={Layout}>
      <IndexRoute component={IndexPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
    <Route path="/games/:id" component={Layout}>
      <IndexRoute component={GamePage}/>
    </Route>
    <Route path="/" component={SignInPage}>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);

export default routes;
