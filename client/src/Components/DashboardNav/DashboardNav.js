import React, { Component } from "react";
import "./DashboardNav.scss";
import logo from "../../Assets/Logo/Logo.png";
import { Link } from "react-router-dom";

export class DashboardNav extends Component {
  render() {
    return (
      <nav className="dashboard-nav">
        <img
          className="dashboard-nav__logo"
          src={logo}
          alt="Warcraft Auction Logo"
        />
        <div className="dashboard-nav__link-container">
          <Link className="dashboard-nav__nav-links dashboard-nav__links" to="/">
            Home
          </Link>
          <Link className="dashboard-nav__nav-links dashboard-nav__links" to="/dashboard">Dashboard</Link>
          <h2>Top Items</h2>
          <ul>
            <li className="dashboard-nav__nav-links">ITEM</li>
            <li className="dashboard-nav__nav-links">ITEM</li>
            <li className="dashboard-nav__nav-links">ITEM</li>
            <li className="dashboard-nav__nav-links">ITEM</li>
          </ul>
          <h2>Watch List</h2>
          <ul>
            <li className="dashboard-nav__nav-links">ITEM</li>
            <li className="dashboard-nav__nav-links">ITEM</li>
            <li className="dashboard-nav__nav-links">ITEM</li>
            <li className="dashboard-nav__nav-links">ITEM</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default DashboardNav;
