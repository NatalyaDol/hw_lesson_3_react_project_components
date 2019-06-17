import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Login';

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>Hello React!</h1>
          <Login/>
      </div>);
  }
}


ReactDOM.render(
    <App/>, document.getElementById('root'));