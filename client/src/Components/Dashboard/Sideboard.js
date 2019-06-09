import React, { Component } from 'react';
import './Sideboard.scss';
import logo from '../../Assets/Logo/Logo.png';
import { Link } from 'react-router-dom';

export class Sideboard extends Component {

    componentDidUpdate() {
        if (this.props.priceGraph === true) {
            this.refs.price.setAttribute("id", "selectedGraph")
            this.refs.quant.setAttribute("id", null)
            this.refs.priceQuant.setAttribute("id", null)
        } else if (this.props.quantGraph === true) {
            this.refs.quant.setAttribute("id", "selectedGraph")
            this.refs.price.setAttribute("id", null)
            this.refs.priceQuant.setAttribute("id", null)
        } else if (this.props.priceQuantGraph === true) {
            this.refs.priceQuant.setAttribute("id", "selectedGraph")
            this.refs.price.setAttribute("id", null)
            this.refs.quant.setAttribute("id", null)
        }
      }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__card">
                    <Link className="imageContainer" to="/">
                        <img className="dashboard__card__logo" src={logo} alt="logo" />
                    </Link>
                    <Link to="/dashboard/" onClick={this.props.homeDashboard}>
                        <h1 className="dashboard__card__header">Dashboard</h1>
                    </Link>
                    <div className="dashboard__card__sectionContainer">
                        <h2 className="dashboard__card__title">Item Overview</h2>
                        <div className="dashboard__card__list" >
                            <div 
                                className="dashboard__card__list__items" 
                                onClick={this.props.price}
                                ref="price">
                                    Price History
                            </div>
                            <div 
                                className="dashboard__card__list__items" 
                                onClick={this.props.quant}
                                ref="quant">
                                    Quantity History
                            </div>
                            <div 
                                className="dashboard__card__list__items" 
                                onClick={this.props.priceQuant}
                                ref="priceQuant">
                                    Price Quantity
                            </div>
                        </div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sideboard;