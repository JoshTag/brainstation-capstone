import React, { Component } from 'react';
import './GraphsInfo.scss';

export class GraphsInfo extends Component {
    render() {

        const { priceavg, pricemax, pricemin, quantityavg } = this.props.itemHistory[6];

        return (
            <div>
                <h3 className="infoTitle">
                    Current Info
                </h3>
                <div className="graphInfo">
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Average Price</h2>
                        <p className="graphInfo__card__units">{priceavg} g</p>                            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Max Price</h2>
                        <p className="graphInfo__card__units">{pricemax} g</p>            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Min Price</h2>
                        <p className="graphInfo__card__units">{pricemin} g</p>            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Average Quantity</h2>
                        <p className="graphInfo__card__units">{quantityavg}</p>            
                    </div>
                </div>
            </div>
        )
    }
}

export default GraphsInfo;