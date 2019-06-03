import React from 'react';
import { Line } from 'react-chartjs-2';
import './PriceGraph.scss';

export default ({data, width, height}) => (
    <div className="graph" >
        <h1>Price History</h1>
        <Line
            data={data}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
);