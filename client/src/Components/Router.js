import React from './node_modules/react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from './node_modules/react-router-dom';
import Home from '../Routes/Home/Home';

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
