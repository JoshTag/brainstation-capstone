import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./DashboardDetails.scss";

const pingURL = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080";

const DashboardDetails = props => {
  const [top, setTop] = useState([]);
  const [highestPriced, setHighestPriced] = useState([]);
  const [item, setItems] = useState([]);
  const [results, setResults] = useState([]);

  let realmID = props.match.params.realmID;

  useEffect(() => {
    const getData = async () => {
      await axios
        .all([
          axios.get(`${pingURL}/items/top/${realmID}`),
          axios.get(`${pingURL}/items/price/${realmID}`),
          axios.get(`${pingURL}/items/${realmID}`)
        ])
        .then(res => {
          setTop(res[0].data);
          setHighestPriced(res[1].data);
          setItems(res[2].data);
        })
        .catch(err => alert(err));
    };

    getData();
  }, [realmID]);

  let realmName = props.realms.find(realm => {
    return Number(props.match.params.realmID) === realm.id;
  });

  window.scrollTo(0, 0);

  if (!realmName) {
    return null;
  }

  let search = e => {
    e.preventDefault();
    let findItem = item.filter(item => {
      return item.name_enus
        .toLowerCase()
        .includes(e.target.item.value.toLowerCase());
    });

    findItem.sort((a, b) => {
      return a.name_enus > b.name_enus ? 1 : -1;
    });

    setResults(findItem);
  };

  return (
    <div className="dashboard-details">
      <h1 className="dashboard-details__header">{realmName.name}</h1>
      <form className="dashboard-details__search" onSubmit={e => search(e)}>
        <input placeholder="Search Items..." required name="item" />
        <input type="submit" value="Submit" />
      </form>
      <div className="dashboard-details__lists">
        <div>
          <h2>Search Results</h2>
          <ul>
            {results.map(item => {
              return (
                <li className="search-items" key={item.item}>
                  <Link to={`${props.match.url}/${item.item}/price`}>
                    {item.name_enus}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2>Top Items</h2>
          <ul>
            {top.map(item => {
              return (
                <li key={`${item.item}`}>
                  <Link to={`${props.match.url}/${item.item}/price`}>
                    <h3>Item: {item.name_enus}</h3>
                    <p>Quantity Avg: {item.quantityavg}</p>
                    <p>Item Class: {item.name_Enus}</p>
                  </Link>
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
                  <Link to={`${props.match.url}/${item.item}/price`}>
                    <h3>Item: {item.name_enus}</h3>
                    <p>Price Avg: {item.priceavg}</p>
                    <p>Item Class: {item.name_Enus}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetails;
