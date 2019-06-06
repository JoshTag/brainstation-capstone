import React, { Component } from 'react';
import './Sideboard.scss';
import logo from '../../Assets/Logo/Logo.png';
import { Link } from 'react-router-dom';

export class Sideboard extends Component {

    // componentDidMount() {
    //     if (this.props.priceGraph === true) {
    //       this.refs.price.setAttribute("id", "selectedGraph")
    //     }
    //   }

    componentDidUpdate() {
        if (this.props.priceGraph === true) {
          this.refs.price.setAttribute("id", "selectedGraph")
          this.refs.quant.setAttribute("id", null)
          this.refs.priceQuant.setAttribute("id", null)
        } else if (this.props.quantGraph === true) {
          this.refs.quant.setAttribute("id", "selectedGraph")
          this.refs.price.setAttribute("id", null)
          this.refs.priceQuant.setAttribute("id", null)
        } else {
          this.refs.priceQuant.setAttribute("id", "selectedGraph")
          this.refs.price.setAttribute("id", null)
          this.refs.quant.setAttribute("id", null)
        }
      }

    render() {
        return (
            <div className="dashboard">
                <Link to="/">
                    <img className="dashboard__logo" src={logo} alt="logo" />
                </Link>
                <Link to="/itemHistory" onClick={this.props.homeDashboard}>
                    <h1 className="dashboard__header">Dashboard</h1>
                </Link>
                <div className="dashboard__sectionContainer">
                    <h2 className="dashboard__title">Item Overview</h2>
                    <ul className="dashboard__list" >
                        <li 
                            className="dashboard__list__items" 
                            onClick={this.props.price}
                            ref="price">
                                Price History
                        </li>
                        <li 
                            className="dashboard__list__items" 
                            onClick={this.props.quant}
                            ref="quant">
                                Quantity History
                        </li>
                        <li 
                            className="dashboard__list__items" 
                            onClick={this.props.priceQuant}
                            ref="priceQuant">
                                Price Quantity
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="dashboard__title">My Watch List</h2>
                    <div className="dashboard__watchlist" >
                        <Link className="dashboard__list__items" to='/itemHistory/152507'>Akunda's Bite</Link>
                        <Link className="dashboard__list__items" to='/itemHistory/109076'>Goblin Glider Kit</Link>
                        <Link className="dashboard__list__items" to='/itemHistory/152510'>Anchor Weed</Link>
                        <Link className="dashboard__list__items" to='/itemHistory/152505'>Riverbud</Link>
                        <Link className="dashboard__list__items" to='/itemHistory/152513'>Platinum Ore</Link>
                        <Link className="dashboard__list__items" to='/itemHistory/152512'>Monelite Ore</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sideboard;