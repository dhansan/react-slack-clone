//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
// Styles
import 'semantic-ui-css/semantic.min.css';
// Link
import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import firebase from './components/Firebase/firebase';
import * as serviceWorker from './serviceWorker';

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push('/');
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const RootwithAuth = withRouter(Root);

ReactDOM.render(
  <Router>
    <RootwithAuth />
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
