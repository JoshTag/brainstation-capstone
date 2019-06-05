import React, { Component } from 'react';
import './GraphsInfo.scss';

export class GraphsInfo extends Component {
    render() {

        // const { pricemin } = this.props.itemHistory;

        this.props.loaded && console.log(this.props.itemHistory.when[6].pricemin)

        return (
            <div>
                <h3 className="infoTitle">
                    Current Info
                </h3>
                <div className="graphInfo">
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Average Price</h2>
                        <p className="graphInfo__card__units">
                            {this.props.loaded && this.props.itemHistory.when[6].priceavg}
                        </p>                            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Max Price</h2>
                        <p className="graphInfo__card__units">
                            {this.props.loaded && this.props.itemHistory.when[6].pricemax}
                        </p>            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Min Price</h2>
                        <p className="graphInfo__card__units">
                            {this.props.loaded && this.props.itemHistory.when[6].pricemin}      
                        </p>            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Average Quantity</h2>
                        <p className="graphInfo__card__units">{this.props.loaded && this.props.itemHistory.when[6].quantityavg}</p>            
                    </div>
                </div>
            </div>
        )
    }
}

export default GraphsInfo;