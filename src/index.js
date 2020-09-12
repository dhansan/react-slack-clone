//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Styles
import 'semantic-ui-css/semantic.min.css';
// Link
import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
