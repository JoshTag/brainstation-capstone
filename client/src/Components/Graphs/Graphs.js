import React, { Component } from 'react'
import './Graphs.scss'

export class Graphs extends Component {
    render() {
        return (
            <div className="graphInfo">
                <div className="graphInfo__card">
                    <h2>Current Price</h2>
                    <p>1,231 g</p>                            
                </div>
                <div className="graphInfo__card">
                    <h2>Average Price</h2>
                    <p>1,231 g</p>            
                </div>
                <div className="graphInfo__card">
                    <h2>Current Quantity</h2>
                    <p>5,234 g</p>            
                </div>
                <div className="graphInfo__card">
                    <h2>Average Quantity</h2>
                    <p>3,135 g</p>            
                </div>
            </div>
        )
    }
}

export default Graphs;