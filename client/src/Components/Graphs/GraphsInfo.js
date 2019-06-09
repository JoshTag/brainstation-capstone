import React, 
{ Component } from 'react';
import './GraphsInfo.scss';
import axios from 'axios';

export class GraphsInfo extends Component {



    render() {


        // const { 
        //     priceavg, 
        //     pricemax, 
        //     pricemin, 
        //     quantityavg, 
        //     when, 
        //     quantitymin, 
        //     quantitymax,
        //     pricestart,
        //     priceend,
        //     item,
        //     name_enus  } = this.state.itemHistory[this.props.itemHistory.length - 1];

        return (
            <div>
                <div className="graphBanner">
                    {/* <a href={`https://www.wowhead.com/item=${item}/`}> */}
                        <h1 className="itemSearch__header">TEST{/*name_enus*/}</h1>
                    {/* </a> */}
                    <h3 className="infoTitle">
                        Current Info for {/*when*/}
                    </h3>
                </div>
                <div className="graphInfo">
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Average Price</h2>
                        <p className="graphInfo__card__units">TEST{/*priceavg*/} g</p>                            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Max Price</h2>
                        <p className="graphInfo__card__units">TEST{/*pricemax*/} g</p>            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Min Price</h2>
                        <p className="graphInfo__card__units">TEST{/*pricemin*/} g</p>            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Price Start</h2>
                        <p className="graphInfo__card__units">TEST{/*pricestart*/} g</p>            
                    </div>
                </div>
                <div className="graphInfo">
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Average Quantity</h2>
                        <p className="graphInfo__card__units">TEST{/*quantityavg*/}</p>                            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Max Quantity</h2>
                        <p className="graphInfo__card__units">TEST{/*quantitymin*/}</p>            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Min Quantity</h2>
                        <p className="graphInfo__card__units">TEST{/*quantitymax*/}</p>            
                    </div>
                    <div className="graphInfo__card">
                        <h2 className="graphInfo__card__title">Price End</h2>
                        <p className="graphInfo__card__units">TEST{/*priceend*/} g</p>            
                    </div>
                </div>
            </div>
        )
    }
}

export default GraphsInfo;