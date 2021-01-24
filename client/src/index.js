import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
const dotenv = require('dotenv')
dotenv.config()

ReactDOM.render((
  <AuthContextProvider>
     <BrowserRouter>
        <App /> {/* The various pages will be displayed by the `Main` component. */}
    </BrowserRouter>
  </AuthContextProvider>
 
  ), document.getElementById('root')
);
