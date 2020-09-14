//Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Styles
import 'semantic-ui-css/semantic.min.css';
// Link
import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import firebase from './components/Firebase/firebase';
import rootReducer from './components/Redux/reducers';
import { setUser } from './components/Redux/actions';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        this.props.setUser(user);
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

const RootwithAuth = withRouter(connect(null, { setUser })(Root));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootwithAuth />
    </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
