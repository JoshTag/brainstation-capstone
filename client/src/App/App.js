import React from 'react';
import Main from '../Pages/Main/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact to='/' component={Main} />
          {/* <Route path="/items/:id" component={Item} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;