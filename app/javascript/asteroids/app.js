import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Canvas from './components/canvas';

class App extends Component {
  render() {
    return <Canvas />
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
