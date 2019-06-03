import React, { Component } from 'react';
import ItemHeader from '../../Components/ItemHeader/ItemHeader';
import axios from 'axios';
import './Items.scss';

// Page Components
import Dashboard from '../../Components/Dashboard/Dashboard';
import Graphs from '../../Components/Graphs/Graphs';
import PriceGraph from '../../Components/PriceGraph/PriceGraph';
import QuantityGraph from '../../Components/QuantityGraph/QuantityGraph';
import PriceQuantGraph from '../../Components/PriceQuantGraph/PriceQuantGraph';

// Data Imports
import PriceGraphData from '../../Data/PriceGraphData';
import QuantityGraphData from '../../Data/QuantityGraphData';
import PriceQuantGraphData from '../../Data/PriceQuantGraphData';

export class Items extends Component {
    state = {
        priceGraph: true,
        quantGraph: false,
        priceQuantGraph: false
    }

    componentDidMount() {
        axios.get('http://localhost:3000/itemHistory')
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

    render() {
        return (
            <div className="itemMain">
                <Dashboard 
                    priceGraph={this.state.priceGraph}
                    quantGraph={this.state.quantGraph}
                    priceQuantGraph={this.state.priceQuantGraph}
                    price={this.openPrice}
                    quant={this.openQuant}
                    priceQuant={this.openPriceQuant}/>
                <div>
                    <ItemHeader />
                    <Graphs />
                    { this.state.priceGraph ? 
                        <PriceGraph 
                            data={PriceGraphData} 
                            height={100} 
                            width={50}
                            /> 
                    : null }
                    { this.state.quantGraph ? 
                        <QuantityGraph 
                            data={QuantityGraphData} 
                            height={100} 
                            width={50}  />
                    : null}
                    { this.state.priceQuantGraph ?
                        <PriceQuantGraph 
                            data={PriceQuantGraphData} 
                            height={100} 
                            width={50}  />
                    : null}
                </div>
            </div>
        )
    }
}

export default Items;