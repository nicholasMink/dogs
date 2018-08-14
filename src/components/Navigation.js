import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

import * as routes from '../constants/routes';

const Navigation = () =>
  <ul>
    <li><Link to={routes.LANDING}>Home</Link></li>
    {/* <li><Link to={routes.SINGLE}>Dog Info</Link></li> */}
  </ul>

export default Navigation;