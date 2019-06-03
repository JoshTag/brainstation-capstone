import React from 'react';
import Main from '../Pages/Main/Main';
import Items from '../Pages/Items/Items';
import Error from '../Pages/Error/Error'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/item" component={Items} />
          <Route path="" component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;