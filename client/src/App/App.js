import React from 'react';
import Main from '../Pages/Main/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;