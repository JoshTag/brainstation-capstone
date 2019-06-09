import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.scss';
import { Route } from 'react-router-dom'; 

// Page Components
import Sideboard from '../../Components/Dashboard/Sideboard';
import MainView from '../MainView/Mainview';

export class DashboardPage extends Component {


    // openPrice = () => {
    //     this.setState({
    //         priceGraph: true,
    //         quantGraph: false,
    //         priceQuantGraph: false
    //     });
    // }

    // openQuant = () => {
    //     this.setState({
    //         priceGraph: false,
    //         quantGraph: true,
    //         priceQuantGraph: false
    //     });
    // }

    // openPriceQuant = () => {
    //     this.setState({
    //         priceGraph: false,
    //         quantGraph: false,
    //         priceQuantGraph: true
    //     });
    // }

    // homeDashboard = () => {
    //     this.setState({
    //         dashboardHome: true,
    //         priceGraph: false,
    //         quantGraph: false,
    //         priceQuantGraph: false
    //     })
    // }

    dataCreation = (state, key) => {
        const arr = [] 
        let i = 0
        for ( i = 0 ; i < state.length ; i++) {
            arr.push(state[i][key])
        }
        return arr
    }
   
    render() {


        return (
            <div className="itemMain">
                <Sideboard 
                    // priceGraph={this.state.priceGraph}
                    // quantGraph={this.state.quantGraph}
                    // priceQuantGraph={this.state.priceQuantGraph}
                    // price={this.openPrice}
                    // quant={this.openQuant}
                    // priceQuant={this.openPriceQuant}
                    // dashboardHome={this.state.dashboardHome}
                    // homeDashboard={this.dashboardHome}
                    />
                <div className="dashboardBody">
                    <div className="itemSearch">
                        <input className="itemSearch__search" type="text" placeholder="search"></input>
                        <button className="itemSearch__btn">SEARCH</button>
                    </div>

                    <Route 
                        exact
                        render= { (props) => 
                            <MainView 
                            {...props}
                            // itemHistory={this.state.itemHistory} 
                            // priceGraph={this.state.priceGraph}
                            // quantGraph={this.state.quantGraph}
                            // priceQuantGraph={this.state.priceQuantGraph}
                            // priceAvg={this.dataCreation(this.state.itemHistory, 'priceavg')}
                            // priceMin={this.dataCreation(this.state.itemHistory, 'pricemin')}
                            // priceMax={this.dataCreation(this.state.itemHistory, 'pricemax')}
                            // date={this.dataCreation(this.state.itemHistory, 'when')} 
                            />} 
                    />
                </div>
            </div> 
        )
    }
}

export default DashboardPage;