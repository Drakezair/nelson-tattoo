import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

import Home from './container/Home';
import Planea from './container/Planea';

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
