import React from 'react';
import Main from '../Pages/Main/Main';
import DashboardPage from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

const pingURL = `${process.env.REACT_APP_BACKEND_SERVER || 'http://localhost:8080'}/ping`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="" component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;