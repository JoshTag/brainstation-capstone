import React from "react";
import DashboardHome from "../../Components/DashboardHome/DashboardHome";
import { Route, Switch } from "react-router-dom";
import DashboardDetails from "../DashboardDetails/DashboardDetails";

const MainView = (props) => {
  // console.log(props)
  let realms = props.realms
  return (
    <Switch>
      <Route
        path={`${props.match.path}/details/:realmID`}
        render={(props) => (
          <DashboardDetails {...props} realms={realms}/>
        )}
      />
      <Route render={() => <DashboardHome realms={props.realms} />} />
    </Switch>
  );
};

export default MainView;