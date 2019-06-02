import React from 'react';
import Main from '../Pages/Main/Main'
import Items from '../Pages/Items/Items'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/items" component={Items} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;