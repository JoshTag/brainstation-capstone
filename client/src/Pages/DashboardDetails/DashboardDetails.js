import React, { Component } from 'react';
import GraphsInfo from '../../Components/Graphs/GraphsInfo';
import PriceGraph from '../../Components/PriceGraph/PriceGraph';
import QuantityGraph from '../../Components/QuantityGraph/QuantityGraph';
import PriceQuantGraph from '../../Components/PriceQuantGraph/PriceQuantGraph';
import axios from 'axios';

export class DashboardDetails extends Component {
    state = {
        itemHistory: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/details/${this.props.match.params.item}`)
        .then(response => {
            this.setState({
                itemHistory: response.data,
                isLoaded: true
            })
        })
        .catch(error => {
            alert('ERROR');
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.item && prevProps.match.params.item !== this.props.match.params.item) {
            axios.get(`http://localhost:8080/details/${this.props.match.params.item}`)
            .then(response => {
                this.setState({
                    itemHistory: response.data,
                    isLoaded: true
                })
            })
            .catch(error => {
                alert('ERROR');
            });
        }
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

        console.log(this.props)
        
        return (
            <div>
            { this.state.isLoaded === true ?
            <div>
                <GraphsInfo 
                    itemHistory={this.state.itemHistory} /> 

                <PriceGraph 
                    priceAvg={this.dataCreation(this.state.itemHistory, 'priceavg')}
                    priceMin={this.dataCreation(this.state.itemHistory, 'pricemin')}
                    priceMax={this.dataCreation(this.state.itemHistory, 'pricemax')}
                    date={this.dataCreation(this.state.itemHistory, 'when')}
                    height={150} 
                    width={975} /> 

                <QuantityGraph 
                    quantAvg={this.dataCreation(this.state.itemHistory, 'quantityavg')}
                    quantMax={this.dataCreation(this.state.itemHistory, 'quantitymax')}
                    quantMin={this.dataCreation(this.state.itemHistory, 'quantitymin')}
                    date={this.dataCreation(this.state.itemHistory, 'when')}
                    height={150} 
                    width={975} />

                <PriceQuantGraph 
                    priceAvg={this.dataCreation(this.state.itemHistory, 'priceavg')}
                    quantAvg={this.dataCreation(this.state.itemHistory, 'quantityavg')}
                    date={this.dataCreation(this.state.itemHistory, 'when')}
                    height={150} 
                    width={975} />
                </div>
                    : null }
            </div>
        )
    }
}

export default DashboardDetails
