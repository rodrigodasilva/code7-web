import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" exact component={SignUp} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
