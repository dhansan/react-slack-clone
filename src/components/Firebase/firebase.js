import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBMLZNfr97Kbigxz7dPXnbTVLEBNbL7QIU',
  authDomain: 'react-slack-clone-c9cd7.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-c9cd7.firebaseio.com',
  projectId: 'react-slack-clone-c9cd7',
  storageBucket: 'react-slack-clone-c9cd7.appspot.com',
  messagingSenderId: '383791155082',
  appId: '1:383791155082:web:f19155110108e7b241ea73',
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
