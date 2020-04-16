import React, { useEffect, useState } from "react";
import GraphsInfo from "./../../Components/GraphsInfo/GraphsInfo";
import { Route, Switch } from "react-router-dom";
import PriceGraph from "./../../Components/PriceGraph/PriceGraph";
import QuantityGraph from "./../../Components/QuantityGraph/QuantityGraph";
import PriceQuantGraph from "./../../Components/PriceQuantGraph/PriceQuantGraph";
import PickGraph from "./../../Components/PickGraph/PickGraph";
import axios from "axios";
import "./DashboardDetails.scss";

const pingURL = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080";

const DashboardDetails = props => {
  const [top, setTop] = useState([]);
  const [highestPriced, setHighestPriced] = useState([]);

  let realmID = props.match.params.realmID;

  useEffect(() => {
    axios
      .all([
        axios.get(`${pingURL}/items/top/${realmID}`),
        axios.get(`${pingURL}/items/price/${realmID}`)
      ])
      .then(res => {
        setTop(res[0])
        setHighestPriced(res[1])
      });
  }, [realmID]);

  let realmName = props.realms.find(realm => {
    return Number(props.match.params.realmID) === realm.id;
  });

  if (!realmName) {
    return null;
  }
  return (
    <div>
      <h1>{realmName.name}</h1>
      <h2>Top Items</h2>
      
      <div>
        {/* <GraphsInfo itemHistory={this.state.itemHistory} /> */}
        {/* <PickGraph
              // itemHistory={this.state.itemHistory}
              match={this.props.match}
            /> */}
        <Switch>
          {/* <Route
            path={`${this.props.match.url}/priceChart`}
            render={props => (
              <PriceGraph
                {...props}
                // itemHistory={this.state.itemHistory}
                priceAvg={this.dataCreation(this.state.itemHistory, "priceavg")}
                priceMin={this.dataCreation(this.state.itemHistory, "pricemin")}
                priceMax={this.dataCreation(this.state.itemHistory, "pricemax")}
                date={this.dataCreation(this.state.itemHistory, "when")}
                height={150}
                width={975}
              />
            )}
          />
          <Route
            path={`${this.props.match.url}/quantChart`}
            render={props => (
              <QuantityGraph
                {...props}
                quantAvg={this.dataCreation(
                  this.state.itemHistory,
                  "quantityavg"
                )}
                quantMax={this.dataCreation(
                  this.state.itemHistory,
                  "quantitymax"
                )}
                quantMin={this.dataCreation(
                  this.state.itemHistory,
                  "quantitymin"
                )}
                date={this.dataCreation(this.state.itemHistory, "when")}
                height={150}
                width={975}
              />
            )}
          />
          <Route
            path={`${this.props.match.url}/priceQuantChart`}
            render={props => (
              <PriceQuantGraph
                {...props}
                // itemHistory={this.state.itemHistory}
                priceAvg={this.dataCreation(this.state.itemHistory, "priceavg")}
                quantAvg={this.dataCreation(
                  this.state.itemHistory,
                  "quantityavg"
                )}
                date={this.dataCreation(this.state.itemHistory, "when")}
                height={150}
                width={975}
              />
            )}
          /> */}
        </Switch>
      </div>
    </div>
  );
};

export default DashboardDetails;
