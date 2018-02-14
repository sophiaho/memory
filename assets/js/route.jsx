import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Memory from './memory';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <App>
          <Route path="/memory" component={Memory} />
        </App>
      </Switch>
    </Router>
  );
};

export default Root;
