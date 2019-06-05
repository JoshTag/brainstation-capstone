import React, { Component } from 'react';
import ItemHeader from '../../Components/ItemHeader/ItemHeader';
import axios from 'axios';
import './Dashboard.scss';
import loading from '../../Assets/Logo/loadingsnake.gif'

// Page Components
import Dashboard from '../../Components/Dashboard/Sideboard';
import GraphsInfo from '../../Components/Graphs/GraphsInfo';
import PriceGraph from '../../Components/PriceGraph/PriceGraph';
import QuantityGraph from '../../Components/QuantityGraph/QuantityGraph';
import PriceQuantGraph from '../../Components/PriceQuantGraph/PriceQuantGraph';

// Data Imports
import PriceGraphData from '../../Data/PriceGraphData';
import QuantityGraphData from '../../Data/QuantityGraphData';
import PriceQuantGraphData from '../../Data/PriceQuantGraphData';

export class Items extends Component {
    state = {
        itemHistory: [],
        loaded: false,
        priceGraph: true,
        quantGraph: false,
        priceQuantGraph: false
    }

     componentDidMount() {
        // fetch(`http://localhost:8080/itemHistory/109076`).then(r => r.json())
        // .then(data => this.setState({ data }))
        // .catch(err => alert(err.message));
        // const response = axios.get(`http://localhost:8080/itemHistory/109076`).then(response => console.timeEnd());
        

        axios.get(`http://localhost:8080/itemHistory/117`) //152507
            .then(response => {
                this.setState({
                    loaded: true, 
                    itemHistory: response.data
                })
            })
            .catch(error => {
              alert('ERROR');
            });
        }

    componentDidUpdate() {
        if (this.state.itemHistory.item !== this.props.match.params.item && this.props.match.params.item) {
            axios.get(`http://localhost:8080/itemHistory/${this.props.match.params.item}`)
                .then(response => {
                    this.setState({
                        itemHistory: response.data
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
                <div className="dashboardBody">
                    { this.state.loaded === false ? 
                        <div className="emptyHeader" /> : <ItemHeader itemHistory={this.state.itemHistory}/>
                    }
                    { this.state.loaded === false ? 
                        <div />
                        :
                        <GraphsInfo 
                            itemHistory={this.state.itemHistory}
                            loaded={this.state.loaded}/> 
                    }
                    {this.state.loaded === false ? 
                                          
                        <div className="loadingImage">
                            <img src={loading} alt="loading" />
                        </div>
                        :
                        <div>
                            { this.state.priceGraph ? 
                                <PriceGraph 
                                data={PriceGraphData} 
                                height={150} 
                                width={975} /> 
                                : null }
                            { this.state.quantGraph ? 
                                <QuantityGraph 
                                data={QuantityGraphData} 
                                height={150} 
                                width={975} />
                                : null}
                            { this.state.priceQuantGraph ?
                                <PriceQuantGraph 
                                data={PriceQuantGraphData} 
                                height={150} 
                                width={975} />
                                : null}
                        </div>                    
                    }
                </div>
            </div> 
        )
    }
}

export default Items;