import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ListOfSessions from './components/ListOfSessions';
import Session from './components/Session';

const App: React.FC<{}> = () => (
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
      <Route exact path="/sessions/:id" component={Session} />

      <Route path="/sessions">
        <ListOfSessions />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>

    </Switch>
  </div>
);

export default App;
