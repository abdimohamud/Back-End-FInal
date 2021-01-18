import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { useAuth } from './contexts/AuthContext';

import ProtectedRoute from './utils/ProtectedRoute'
import Home from './layout/Home'
import Listings from './layout/Listings'
import Login from './layout/Login'
import Register from './layout/Register'
import './App.css';

function App() {
  const { user } = useAuth();
  return (
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
          <ProtectedRoute path='/home'><Home/></ProtectedRoute>
          <ProtectedRoute path="/listings/:category"><Listings/></ProtectedRoute>
          <Route path="/login"><Login/></Route>
          <Route path="/sign-up"><Register/></Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
