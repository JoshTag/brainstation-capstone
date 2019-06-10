import React, { Component } from 'react';
import './Sideboard.scss';
import logo from '../../Assets/Logo/Logo.png';
import { Link } from 'react-router-dom';

export class Sideboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__card">
                    <Link className="imageContainer" to="/">
                        <img className="dashboard__card__logo" src={logo} alt="logo" />
                    </Link>
                    <Link to="/dashboard" onClick={this.props.homeDashboard}>
                        <h1 className="dashboard__card__header">Dashboard</h1>
                    </Link>
                    <div className="dashboard__card__profileContainer">
                        <h2>Top Items</h2>
                        <Link 
                            to="/dashboard/details/152507"
                            className="dashboard__card__profileContainer__item" >
                            Akunda's Bite
                        </Link>
                        <Link 
                            to="/dashboard/details/152512"
                            className="dashboard__card__profileContainer__item">
                            Monelite Ore
                        </Link>
                        <Link 
                            to="/dashboard/details/152510"
                            className="dashboard__card__profileContainer__item">
                            Anchor Weed
                        </Link>
                        <Link 
                            to="/dashboard/details/152508"
                            className="dashboard__card__profileContainer__item">
                            Winter's Kiss
                        </Link>
                        <Link 
                            to="/dashboard/details/152507"
                            className="dashboard__card__profileContainer__item">
                            Blood-Stained Bone
                        </Link>
                    </div>
                    <div>
                        <h2 className="dashboard__card__title">My Watch List</h2>
                        <div className="dashboard__card__watchlist" >
                            <Link 
                                className="dashboard__card__list__items dashboardAlign" 
                                to='/dashboard/details/152507'>
                                    Akunda's Bite
                            </Link>
                            <Link 
                                className="dashboard__card__list__items dashboardAlign" 
                                to='/dashboard/details/109076'>
                                    Goblin Glider Kit
                            </Link>
                            <Link 
                                className="dashboard__card__list__items dashboardAlign" 
                                to='/dashboard/details/152510'>
                                    Anchor Weed
                            </Link>
                            <Link 
                                className="dashboard__card__list__items dashboardAlign" 
                                to='/dashboard/details/152505'>
                                    Riverbud
                            </Link>
                            <Link 
                                className="dashboard__card__list__items dashboardAlign" 
                                to='/dashboard/details/152513'>
                                    Platinum Ore
                            </Link>
                            <Link 
                                className="dashboard__card__list__items dashboardAlign" 
                                to='/dashboard/details/152512'>
                                    Monelite Ore
                            </Link>
                            <Link 
                                className="dashboard__card__list__items dashboardAlign" 
                                to='/dashboard/details/163223'>
                                    Battle Potion of Agility
                            </Link>
                            <Link 
                                className="dashboard__card__list__items dashboardAlign" 
                                to='/dashboard/details/163224'>
                                    Battle Potion of Strength
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sideboard;