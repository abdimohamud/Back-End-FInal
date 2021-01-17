import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  Listings,
  Login,
  Register
} from './layout';

const Routes = () => {
  return (
    <Switch>
      <Route path="/listings/:category" component={Listings} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={Register} />
      <Route exact path='/' component={Home}></Route>
    </Switch>
  );
}

export default Routes;
