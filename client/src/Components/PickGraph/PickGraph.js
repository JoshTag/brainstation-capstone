import React, { Component } from 'react';
import './PickGraph.scss';

export class PickGraph extends Component {
    render() {
        const { name_enus } = this.props.itemHistory[6];

        return (
            <div>
                <h3>Pick a Graph for {name_enus}</h3>
                <div className="buttonContainer">
                    <button className="buttonContainer__btn" onClick={this.props.price}>Price Information</button>
                    <button className="buttonContainer__btn" onClick={this.props.quant}>Quantity Information</button>
                    <button className="buttonContainer__btn" onClick={this.props.priceQuant}>Price Quanitity Comparison</button>
                </div>
            </div>
        )
    }
}

export default PickGraph;
