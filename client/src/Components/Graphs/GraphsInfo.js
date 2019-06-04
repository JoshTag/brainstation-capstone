import React, { Component } from 'react';
import './GraphsInfo.scss';

export class GraphsInfo extends Component {
    render() {
        return (
            <div className="graphInfo">
                <div className="graphInfo__card">
                    <h2 className="graphInfo__card__title">Average Price</h2>
                    <p className="graphInfo__card__units">1,231 g</p>                            
                </div>
                <div className="graphInfo__card">
                    <h2 className="graphInfo__card__title">Max Price</h2>
                    <p className="graphInfo__card__units">1,231 g</p>            
                </div>
                <div className="graphInfo__card">
                    <h2 className="graphInfo__card__title">Min Price</h2>
                    <p className="graphInfo__card__units">5,234 g</p>            
                </div>
                <div className="graphInfo__card">
                    <h2 className="graphInfo__card__title">Average Quantity</h2>
                    <p className="graphInfo__card__units">3,135 g</p>            
                </div>
            </div>
        )
    }
}

export default GraphsInfo;