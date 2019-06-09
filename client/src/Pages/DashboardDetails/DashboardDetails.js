import React, { Component } from 'react';
import GraphsInfo from '../../Components/Graphs/GraphsInfo';
import PriceGraph from '../../Components/PriceGraph/PriceGraph';
import QuantityGraph from '../../Components/QuantityGraph/QuantityGraph';
import PriceQuantGraph from '../../Components/PriceQuantGraph/PriceQuantGraph';

export class DashboardDetails extends Component {
    render() {

        return (
            <div>
                <GraphsInfo 
                itemHistory={this.props.itemHistory} /> 

                <PriceGraph 
                    // priceAvg={this.dataCreation(this.props.itemHistory, 'priceavg')}
                    // priceMin={this.dataCreation(this.props.itemHistory, 'pricemin')}
                    // priceMax={this.dataCreation(this.props.itemHistory, 'pricemax')}
                    // date={this.dataCreation(this.props.itemHistory, 'when')}
                    height={150} 
                    width={975} /> 

                <QuantityGraph 
                    // quantAvg={this.dataCreation(this.props.itemHistory, 'quantityavg')}
                    // quantMax={this.dataCreation(this.props.itemHistory, 'quantitymax')}
                    // quantMin={this.dataCreation(this.props.itemHistory, 'quantitymin')}
                    // date={this.dataCreation(this.props.itemHistory, 'when')}
                    height={150} 
                    width={975} />

                <PriceQuantGraph 
                    // priceAvg={this.dataCreation(this.props.itemHistory, 'priceavg')}
                    // quantAvg={this.dataCreation(this.props.itemHistory, 'quantityavg')}
                    // date={this.dataCreation(this.props.itemHistory, 'when')}
                    height={150} 
                    width={975} />
  
            </div>
        )
    }
}

export default DashboardDetails
