import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'

import Home from './layout/Home'
import Listings from './components/Listing'
import Register from './layout/Register'
import Login from './layout/Login'

const Routes = () => {
  return (
    <Switch>

      <PrivateRoute path="/listings/:category" ><Listings/></PrivateRoute>
      <Route  path="/login"  ><Login/></Route>
      <Route  path="/sign-up" ><Register/></Route>
      <PrivateRoute exact path='/' ><Home/></PrivateRoute>
    </Switch>
  );
}

export default Routes;
