import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import { Route } from "react-router-dom";
import DashboardNav from "../../Components/DashboardNav/DashboardNav";
import MainView from "../MainView/Mainview";
import burger from "./../../Assets/Images/burger.svg";
import axios from "axios";

const pingURL = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:8080";

const DashboardPage = () => {
  const [showNav, setShowNav] = useState(false);
  const [realms, setRealms] = useState([]);
  const [constRealms, setConstRealms] = useState([]);

  useEffect(() => {
    getRealms();
  }, []);

  const getRealms = () => {
    axios.get(`${pingURL}/realm`).then(res => {
      setRealms(res.data);
      setConstRealms(res.data);
    });
	};

  const handleNavClick = () => {
    setShowNav(!showNav);
	};

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__header-text">Warcraft Auctions</h1>
        <button className="dashboard__nav-btn" onClick={handleNavClick}>
          <img alt="burger menu icon" src={burger} />
        </button>
        {showNav ? <DashboardNav className="sideNav" /> : null}
      </header>
      <div className="dashboard__body">
        <div className="dashboard__search">
          <input placeholder="Search..." />
          <button>Search</button>
        </div>
        <Route
          exact
          render={props => <MainView realms={realms} {...props} />}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
