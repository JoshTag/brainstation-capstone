import React from 'react';
import { Bar } from 'react-chartjs-2';
import './QuantityGraph.scss';

export default ({data, width, height}) => (
    <div className="graph">
        <h1>Quantity History</h1>
        <Bar
            data={data}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
);