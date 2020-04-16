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
  const [loading, setLoading] = useState(false);
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
        console.log("data")
        setTop(res[0].data);
        setHighestPriced(res[1].data);
      })
      .then(() => setLoading(true))
      .catch(err => alert(err));
  }, [realmID]);
  console.log(top);

  let realmName = props.realms.find(realm => {
    return Number(props.match.params.realmID) === realm.id;
  });

  window.scrollTo(0, 0);
  console.log(loading)

  if (!realmName) {
    return null;
  }
  return (
    <div>
      {loading ? 
      <>
        <h1>{realmName.name}</h1>
      <div>
        <h2>Top Items</h2>
        <ul>
          {top.map(item => {
            return (
              <li key={item.item}>
                <h3>Item: {item.name_enus}</h3>
                <p>Quantity Avg: {item.quantityavg}</p>
                <p>Item Class: {item.name_Enus}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Highest Priced Items</h2>
        <ul>
          {highestPriced.map(item => {
            return (
              <li key={item.item}>
                <h3>Item: {item.name_enus}</h3>
                <p>Price Avg: {item.priceavg}</p>
                <p>Item Class: {item.name_Enus}</p>
              </li>
            );
          })}
        </ul>
      </div>
      </>
      : <h1>loading...</h1>
      }
    </div>
  );
};

export default DashboardDetails;
