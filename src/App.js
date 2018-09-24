import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import firebase from "firebase";

import Home from './container/Home';
import Planea from './container/Planea';


// Initialize Firebase
var config = {
	apiKey: "AIzaSyCsaU1prOJ_1kQ5dSJ19v-zkM7IaPsZDV8",
	authDomain: "nelson-tatto-70c67.firebaseapp.com",
	databaseURL: "https://nelson-tatto-70c67.firebaseio.com",
	projectId: "nelson-tatto-70c67",
	storageBucket: "",
	messagingSenderId: "826130556463"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router basename='/' >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/planea' component={Planea} />
        </Switch>
      </Router>
    );
  }
}

export default App;
