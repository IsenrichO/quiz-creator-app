import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavTools from './components/NavTools.jsx';


class App extends Component {
  render() {
    return (
      <NavTools />
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
