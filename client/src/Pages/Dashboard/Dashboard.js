import React, { Component } from 'react';

import axios from 'axios';
import './Dashboard.scss';
// import loading from '../../Assets/Logo/loadingsnake.gif'

// Page Components
import Sideboard from '../../Components/Dashboard/Sideboard';
import GraphsInfo from '../../Components/Graphs/GraphsInfo';
import PriceGraph from '../../Components/PriceGraph/PriceGraph';
import QuantityGraph from '../../Components/QuantityGraph/QuantityGraph';
import PriceQuantGraph from '../../Components/PriceQuantGraph/PriceQuantGraph';
import DashboardHome from '../../Components/DashboardHome/DashboardHome';

export class Items extends Component {
    state = {
        itemHistory: [],
        dashboardHome: true,
        priceGraph: false,
        quantGraph: false,
        priceQuantGraph: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.item && prevProps.match.params.item !== this.props.match.params.item) {
            axios.get(`http://localhost:8080/itemHistory/${this.props.match.params.item}`)
                .then(response => {
                    this.setState({
                        itemHistory: response.data,
                        dashboardHome: false,
                        priceGraph: true,
                        quantGraph: false,
                        priceQuantGraph: false
                    })
                })
                .catch(error => {
                    alert('ERROR');
                });
            }
        }

    openPrice = () => {
        this.setState({
            priceGraph: true,
            quantGraph: false,
            priceQuantGraph: false
        });
    }

    openQuant = () => {
        this.setState({
            priceGraph: false,
            quantGraph: true,
            priceQuantGraph: false
        });
    }

    openPriceQuant = () => {
        this.setState({
            priceGraph: false,
            quantGraph: false,
            priceQuantGraph: true
        });
    }

    homeDashboard = () => {
        this.setState({
            dashboardHome: true,
            priceGraph: false,
            quantGraph: false,
            priceQuantGraph: false
        })
    }

    dataCreation = (state, key) => {
        const arr = [] 
        let i = 0
        for ( i = 0 ; i < state.length ; i++) {
            arr.push(state[i][key])
        }
        return arr
    }
   
    render() {

        console.log('state', this.state.itemHistory) 

        return (
            <div className="itemMain">
                <Sideboard 
                    priceGraph={this.state.priceGraph}
                    quantGraph={this.state.quantGraph}
                    priceQuantGraph={this.state.priceQuantGraph}
                    price={this.openPrice}
                    quant={this.openQuant}
                    priceQuant={this.openPriceQuant}
                    dashboardHome={this.state.dashboardHome}
                    homeDashboard={this.homeDashboard}/>
                <div className="dashboardBody">
                <div className="itemSearch">
                    <input className="itemSearch__search" type="text" placeholder="search"></input>
                    <button className="itemSearch__btn">SEARCH</button>
                </div>
                {this.state.dashboardHome ? <DashboardHome itemHistory={this.state.itemHistory} /> : null}
                    { this.state.dashboardHome === true ? 
                        <div />
                        : 
                        <GraphsInfo 
                            itemHistory={this.state.itemHistory}
                            loaded={this.state.loaded}/> 
                    }
                    <div>
                        { this.state.priceGraph ? 
                            <PriceGraph 
                            priceAvg={this.dataCreation(this.state.itemHistory, 'priceavg')}
                            priceMin={this.dataCreation(this.state.itemHistory, 'pricemin')}
                            priceMax={this.dataCreation(this.state.itemHistory, 'pricemax')}
                            date={this.dataCreation(this.state.itemHistory, 'when')}
                            height={150} 
                            width={975} /> 
                            : null }
                        { this.state.quantGraph ? 
                            <QuantityGraph 
                            quantAvg={this.dataCreation(this.state.itemHistory, 'quantityavg')}
                            quantMax={this.dataCreation(this.state.itemHistory, 'quantitymax')}
                            quantMin={this.dataCreation(this.state.itemHistory, 'quantitymin')}
                            date={this.dataCreation(this.state.itemHistory, 'when')}
                            height={150} 
                            width={975} />
                            : null}
                        { this.state.priceQuantGraph ?
                            <PriceQuantGraph 
                            priceAvg={this.dataCreation(this.state.itemHistory, 'priceavg')}
                            quantAvg={this.dataCreation(this.state.itemHistory, 'quantityavg')}
                            date={this.dataCreation(this.state.itemHistory, 'when')}
                            height={150} 
                            width={975} />
                            : null}
                    </div>                    
                </div>
            </div> 
        )
    }
}

export default Items;