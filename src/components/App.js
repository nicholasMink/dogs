import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import * as routes from '../constants/routes';
import './App.css';

const App = () =>
  <Router>
    <div>
      <div className="nav-main">
        <Navigation />
      </div>
      <hr/>
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
    </div>
  </Router>

export default App;