import React from 'react';
import { Bar } from 'react-chartjs-2';
import './PriceQuantGraph.scss';

export default ({ width, height, priceAvg, quantAvg, date }) => {
    const priceQuantData = {
        labels: date,
        datasets: [
            {   
                label: 'Price Average',
                type: 'line',
                borderColor: '#ED1C24',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: priceAvg
            },
            {   
                label: 'Quantity Average',
                type: 'bar',
                backgroundColor: '#1098F7',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: quantAvg
            },
        ]
    }
    

    return (
    <div className="graph">
        <h1>Price Quantity Comparison</h1>
        <Bar
            data={priceQuantData}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
)};