import React, { Component } from 'react';
import './PickGraph.scss';
import { Link } from 'react-router-dom';

export class PickGraph extends Component {
    render() {
        
        const { name_enus } = this.props.itemHistory[6];

        return (
            <div>
                <h3>Pick a Graph for {name_enus}</h3>
                <div className="buttonContainer">
                    <Link 
                        onClick={this.openPrice}
                        to={`${this.props.match.url}/priceChart`} >
                            <div className="buttonContainer__btn btnHover">
                                Price Information
                            </div>
                    </Link>
                    <Link 
                        onClick={this.openQuant}
                        to={`${this.props.match.url}/quantChart`} >
                            <div className="buttonContainer__btn btnHover">
                                Quantity Information
                            </div>
                    </Link>
                    <Link 
                        onClick={this.openPriceQuant}
                        to={`${this.props.match.url}/priceQuantChart`} >
                            <div className="buttonContainer__btn btnHover">
                                Price Quanitity Comparison
                            </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PickGraph;
