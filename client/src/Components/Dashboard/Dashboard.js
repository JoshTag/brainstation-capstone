import React, { Component } from 'react';
import './Dashboard.scss';
import logo from '../../Assets/Logo/logo_transparent.png';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Link to="/">
                    <img className="dashboard__logo" src={logo} alt="logo" />
                </Link>
                <h1 className="dashboard__header">Dashboard</h1>
                <div className="dashboard__sectionContainer">
                    <h2 className="dashboard__title">Item Info</h2>
                    <ul className="dashboard__list" >
                        <li className="dashboard__list__items">Price History</li>
                        <li className="dashboard__list__items">Quantity History</li>
                        <li className="dashboard__list__items">Price Quantity Comparison</li>
                    </ul>
                </div>
                <div>
                    <h2 className="dashboard__title">Watch List</h2>
                    <ul className="dashboard__list" >
                        <li className="dashboard__list__items">Akunda's Bite</li>
                        <li className="dashboard__list__items">Anchor Weed</li>
                        <li className="dashboard__list__items">Goblin Glider Kit</li>
                        <li className="dashboard__list__items">Monelite Ore</li>
                    </ul>
                </div>
                <div>
                    <h2 className="dashboard__title">Profile</h2>
                    <ul className="dashboard__list" >
                        <li className="dashboard__list__items">Home</li>
                        <li className="dashboard__list__items">¯\_(ツ)_/¯</li>
                        <li className="dashboard__list__items">????</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dashboard;