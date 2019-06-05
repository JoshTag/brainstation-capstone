import React from 'react';
import { Bar } from 'react-chartjs-2';
import './PriceQuantGraph.scss';

export default ({ width, height, priceAvg, quantAvg}) => {
    const priceQuantData = {
        labels: [
            '2019-05-22',
            '2019-05-23',
            '2019-05-24',
            '2019-05-25',
            '2019-05-26',
            '2019-05-27',
            '2019-05-28'
        ],
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