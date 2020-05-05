import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import PriceGraph from "./../PriceGraph/PriceGraph";
import QuantityGraph from "./../QuantityGraph/QuantityGraph";
import PriceQuantGraph from "./../PriceQuantGraph/PriceQuantGraph";
import axios from "axios";
import "./ItemDetails.scss";

const pingURL = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080";

const ItemDetails = props => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState();
  const realmID = props.match.params.realmID;
  const itemID = props.match.params.itemID;

  useEffect(() => {
    const getItemDetails = async () => {
      await axios
        .get(`${pingURL}/items/itemhistory/${realmID}/${itemID}`)
        .then(res => setItem(res.data))
        .then(() => setLoading(true))
        .catch(err => alert(err));
    };

    getItemDetails();
  }, [realmID, itemID]);

  const graphData = data => item.map(i => i[data]).reverse();
  const dateData = () => item.map(i => formatDate(i.when)).reverse();

  const formatDate = d => {
    let newDate = new Date(d);
    return `${newDate.getFullYear()}-${newDate.getMonth() +
      1}-${newDate.getDate()}`;
  };

  //Converts a number to a string with commas in the appropriate place
  const insertComma = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (loading === false) {
    return null;
  }
  return (
    <div className="item-details">
      <div className="item-details__header-flex">
        <h1 className="item-details__header">{item[0].name_enus}</h1>
        <div className="item-details__date">
          <b>Date: </b>
          <time dateTime={formatDate(item[0].when)}>
            {formatDate(item[0].when)}
          </time>
        </div>
      </div>
      <ul className="item-details__details">
        <li>
          <b>Price Min </b>
          {insertComma(item[0].pricemin)} g
        </li>
        <li>
          <b>Price Max </b>
          {insertComma(item[0].pricemax)} g
        </li>
        <li>
          <b>Price Avg </b>
          {insertComma(item[0].priceavg)} g
        </li>
        <li>
          <b>Quantity Min </b>
          {insertComma(item[0].quantitymin)} g
        </li>
        <li>
          <b>Quantity Max </b>
          {insertComma(item[0].quantitymax)} g
        </li>
        <li>
          <b>Quantity Avg </b>
          {insertComma(item[0].quantityavg)} g
        </li>
        <li>
          <b>Price Start </b>
          {insertComma(item[0].pricestart)} g
        </li>
        <li>
          <b>Price End </b>
          {insertComma(item[0].priceend)} g
        </li>
      </ul>
      <div className="item-details__graph-links">
        <Link to={`${props.match.url}/price`}>price</Link>
        <Link to={`${props.match.url}/quantity`}>quantity</Link>
        <Link to={`${props.match.url}/pricequantity`}>pricequantity</Link>
      </div>
      <Switch>
        <Route
          path={`${props.match.url}/price`}
          render={props => (
            <PriceGraph
              {...props}
              priceAvg={graphData("priceavg")}
              priceMin={graphData("pricemin")}
              priceMax={graphData("pricemax")}
              date={dateData()}
            />
          )}
        />
        <Route
          path={`${props.match.url}/quantity`}
          render={props => (
            <QuantityGraph
              {...props}
              quantAvg={graphData("quantityavg")}
              quantMin={graphData("quantitymin")}
              quantMax={graphData("quantitymax")}
              date={dateData()}
            />
          )}
        />
        <Route
          path={`${props.match.url}/pricequantity`}
          render={props => (
            <PriceQuantGraph
              {...props}
              priceAvg={graphData("priceavg")}
              quantAvg={graphData("quantityavg")}
              date={dateData()}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default ItemDetails;
