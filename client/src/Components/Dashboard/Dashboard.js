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
                    <ul className="dashboard__list btnList" >
                        <button 
                            className="dashboard__list__items btnList__btn" 
                            onClick={this.props.price}>
                                Price History
                        </button>
                        <button 
                            className="dashboard__list__items btnList__btn" 
                            onClick={this.props.quant}>
                                Quantity History
                        </button>
                        <button 
                            className="dashboard__list__items btnList__btn" 
                            onClick={this.props.priceQuant}>
                                Price Quantity Comparison
                        </button>
                    </ul>
                </div>
                <div>
                    <h2 className="dashboard__title">Watch List</h2>
                    <ul className="dashboard__list btnList" >
                        <button className="dashboard__list__items btnList__btn">Akunda's Bite</button>
                        <button className="dashboard__list__items btnList__btn">Anchor Weed</button>
                        <button className="dashboard__list__items btnList__btn">Goblin Glider Kit</button>
                        <button className="dashboard__list__items btnList__btn">Monelite Ore</button>
                    </ul>
                </div>
                <div>
                    <h2 className="dashboard__title">Profile</h2>
                    <ul className="dashboard__list" >
                        <li className="dashboard__list__items">Home</li>
                        <li className="dashboard__list__items">¯\_(ツ)_/¯</li>
                        <li className="dashboard__list__items">Log Out</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dashboard;