import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import Home from './container/Home';
library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
