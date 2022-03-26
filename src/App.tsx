import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ListOfSessions from './components/ListOfSessions';
import Session from './components/session/Session';
import Navigation from './components/navigation/Navigation';
import './styles/app.scss';
import ListOfGroups from './components/ListOfGroups';
import Group from './components/Group';
import Results from './components/Results';

const App: React.FC = () => (
  <div className="App">
    <header>
      <Navigation />
    </header>
    <main>
      <Switch>
        <Route path="/groups/:group" component={Group} />
        <Route path="/groups">
          <ListOfGroups />
        </Route>
        <Route path="/sessions/:id" component={Session} />
        <Route path="/sessions">
          <ListOfSessions />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
