import React, { Component } from 'react';
import ItemHeader from '../../Components/ItemHeader/ItemHeader';
import axios from 'axios';
import './Items.scss';

// Page Components
import Dashboard from '../../Components/Dashboard/Dashboard';
import GraphsInfo from '../../Components/Graphs/GraphsInfo';
import PriceGraph from '../../Components/PriceGraph/PriceGraph';
import QuantityGraph from '../../Components/QuantityGraph/QuantityGraph';
import PriceQuantGraph from '../../Components/PriceQuantGraph/PriceQuantGraph';
import MainCards from '../../Components/MainCards/MainCards';
import Carousel from '../../Components/Carousel/Carousel';

// Data Imports
import PriceGraphData from '../../Data/PriceGraphData';
import QuantityGraphData from '../../Data/QuantityGraphData';
import PriceQuantGraphData from '../../Data/PriceQuantGraphData';
// import itemsData from '../../Data/ItemName';

export class Items extends Component {
    state = {
        // itemName: itemsData,
        itemHistory: [],
        priceGraph: true,
        quantGraph: false,
        priceQuantGraph: false
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/itemHistory/152507`)
            .then(res => {
                this.setState({itemHistory: res.data})
            })
            .catch(error => {
                alert('ERROR');
            });
            console.log(this.state.itemHistory)
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

        console.log(this.state.itemName)


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
                    <ItemHeader itemHistory={this.state.itemHistory}/>
                    <div className="graphContainer">
                        <div>
                            { this.state.priceGraph ? 
                                <PriceGraph 
                                data={PriceGraphData} 
                                height={120} 
                                width={850} /> 
                                : null }
                            { this.state.quantGraph ? 
                                <QuantityGraph 
                                data={QuantityGraphData} 
                                height={120} 
                                width={850} />
                                : null}
                            { this.state.priceQuantGraph ?
                                <PriceQuantGraph 
                                data={PriceQuantGraphData} 
                                height={120} 
                                width={850} />
                                : null}
                        </div>
                        <GraphsInfo itemHistory={this.state.itemHistory}/> 
                    </div>
                    <MainCards />
                </div>
            </div>
        )
    }
}

export default Items;