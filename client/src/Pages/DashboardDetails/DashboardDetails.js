import React, { Component } from "react";
import GraphsInfo from "./../../Components/GraphsInfo/GraphsInfo";
import { Route, Switch } from "react-router-dom";
import PriceGraph from "./../../Components/PriceGraph/PriceGraph";
import QuantityGraph from "./../../Components/QuantityGraph/QuantityGraph";
import PriceQuantGraph from "./../../Components/PriceQuantGraph/PriceQuantGraph";
import PickGraph from "./../../Components/PickGraph/PickGraph";
import axios from "axios";
import loading from "./../../Assets/Logo/loadingsnake.gif";
import "./DashboardDetails.scss";

const pingURL = `${process.env.REACT_APP_BACKEND_SERVER ||
  "http://localhost:8080"}`;

export class DashboardDetails extends Component {
  state = {
    itemHistory: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`${pingURL}/details/${this.props.match.params.item}`)
      .then(response => {
        this.setState({
          itemHistory: response.data,
          isLoaded: true
        });
      })
      .catch(error => {
        alert("ERROR");
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.item &&
      prevProps.match.params.item !== this.props.match.params.item
    ) {
      axios
        .get(`${pingURL}/details/${this.props.match.params.item}`)
        .then(response => {
          this.setState({
            itemHistory: response.data,
            isLoaded: true
          });
        })
        .catch(error => {
          alert("ERROR");
        });
    }
  }

  dataCreation = (state, key) => {
    const arr = [];
    let i = 0;
    for (i = 0; i < state.length; i++) {
      arr.push(state[i][key]);
    }
    return arr;
  };

  render() {
    return (
      <div>
        {this.state.isLoaded === true ? (
          <div>
            <GraphsInfo itemHistory={this.state.itemHistory} />
            <PickGraph
              itemHistory={this.state.itemHistory}
              match={this.props.match}
            />
            <Switch>
              <Route
                path={`${this.props.match.url}/priceChart`}
                render={props => (
                  <PriceGraph
                    {...props}
                    itemHistory={this.state.itemHistory}
                    priceAvg={this.dataCreation(
                      this.state.itemHistory,
                      "priceavg"
                    )}
                    priceMin={this.dataCreation(
                      this.state.itemHistory,
                      "pricemin"
                    )}
                    priceMax={this.dataCreation(
                      this.state.itemHistory,
                      "pricemax"
                    )}
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
                    itemHistory={this.state.itemHistory}
                    priceAvg={this.dataCreation(
                      this.state.itemHistory,
                      "priceavg"
                    )}
                    quantAvg={this.dataCreation(
                      this.state.itemHistory,
                      "quantityavg"
                    )}
                    date={this.dataCreation(this.state.itemHistory, "when")}
                    height={150}
                    width={975}
                  />
                )}
              />
            </Switch>
          </div>
        ) : (
          <div className="loading-container">
            <h1>LOADING...</h1>
            <img src={loading} alt="Loading Screen Animation" />
          </div>
        )}
      </div>
    );
  }
}

export default DashboardDetails;
