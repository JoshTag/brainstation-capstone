import React from "react";
import DashboardHome from "../../Components/DashboardHome/DashboardHome";
import DashboardDetails from "../../Components/DashboardDetails/DashboardDetails";
import ItemDetails from "../../Components/ItemDetails/ItemDetails";
import { Route, Switch } from "react-router-dom";

const MainView = props => {
  let realms = props.realms;
  return (
    <Switch>
      <Route
        exact
        path={`${props.match.path}/details/:realmID`}
        render={props => <DashboardDetails {...props} realms={realms} />}
      />
      <Route
        path={`${props.match.path}/details/:realmID/:itemID`}
        render={props => <ItemDetails {...props} />}
      />
      <Route render={() => <DashboardHome search={props.search} realms={props.realms} constRealms={props.constRealms} setRealms={props.setRealms} />} />
    </Switch>
  );
};

export default MainView;
