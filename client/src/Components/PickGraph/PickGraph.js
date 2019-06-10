import React, { Component } from 'react';
import './PickGraph.scss';
import { Link } from 'react-router-dom';

export class PickGraph extends Component {
    render() {
        const { name_enus } = this.props.itemHistory[6];

        console.log(this.props.match.url)

        return (
            <div>
                <h3>Pick a Graph for {name_enus}</h3>
                <div className="buttonContainer">
                    <Link 
                        to={`${this.props.match.url}/priceChart`}
                        className="buttonContainer__btn">
                            Price Information
                    </Link>
                    <Link 
                        to={`${this.props.match.url}/quantChart`}
                        className="buttonContainer__btn">
                            Quantity Information
                    </Link>
                    <Link 
                        to={`${this.props.match.url}/priceQuantChart`}
                        className="buttonContainer__btn">
                            Price Quanitity Comparison
                    </Link>
                </div>
            </div>
        )
    }
}

export default PickGraph;
