import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import Home from './components/Home';
import ListOfSessions from './components/ListOfSessions';

const App: React.FC<{}> = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sessions">Sessions</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/sessions">
          <ListOfSessions />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
