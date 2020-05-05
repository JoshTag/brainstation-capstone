import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import { Route } from "react-router-dom";
import MainView from "../MainView/Mainview";
import axios from "axios";
import { Link } from "react-router-dom";

const pingURL = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080";

const DashboardPage = () => {
  const [realms, setRealms] = useState([]);
  const [constRealms, setConstRealms] = useState([]);

  useEffect(() => {
    const getRealms = async () => {
      await axios.get(`${pingURL}/realm`).then(res => {
        setRealms(res.data);
        setConstRealms(res.data);
      });
    };

    getRealms();
  }, []);

  const search = (e, constData, key, setData) => {
    e.preventDefault();
    let findItem = constData.filter(item => {
      return item[key].toLowerCase().includes(e.target.value.toLowerCase());
    });
    setData(findItem);
  };

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__header-text">
          <Link className="header-logo" to="/">Warcraft Auctions</Link>
        </h1>
      </header>
      <div className="dashboard__body">
        <Route
          exact
          render={props => (
            <MainView
              realms={realms}
              search={search}
              constRealms={constRealms}
              setRealms={setRealms}
              {...props}
            />
          )}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
