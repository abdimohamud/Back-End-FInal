import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'

import Home from './layout/Home'
import Listings from './components/Listing'
import Register from './layout/Register'
import Login from './layout/Login'
import { Footer } from './components';
import Navbar from './components/Navbar'

function App() {
  return (
      <>
        <Navbar />
        <Switch>

<PrivateRoute path="/listings/:category" component={Listings}/>
<Route  path="/login"  ><Login/></Route>
<Route  path="/sign-up" ><Register/></Route>
<PrivateRoute exact path='/' component={Home} />
</Switch>
        <Footer />
      </>
  );
}

export default App;


