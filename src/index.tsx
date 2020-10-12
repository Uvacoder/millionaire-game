import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Start from './containers/Game/Start';
import Play from './containers/Game/Play';
import Over from './containers/Game/Over';
import NotFound from './components/NotFound';
import './utils/scss/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/play" component={Play} />
        <Route path="/over" component={Over} />
        <Route component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
