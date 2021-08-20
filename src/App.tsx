import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ListOfSessions from './components/ListOfSessions';
import Session from './components/Session';
import Navigation from './components/navigation/Navigation';

const App: React.FC<{}> = () => (
  <div className="App">
    <header>
      <Navigation />
    </header>
    <main>
      <Switch>
        <Route path="/sessions/:id" component={Session} />
        <Route path="/sessions">
          <ListOfSessions />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
