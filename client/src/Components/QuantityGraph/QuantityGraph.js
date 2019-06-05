import React from 'react';
import { Bar } from 'react-chartjs-2';
import './QuantityGraph.scss';

export default ({ width, height, quantAvg, quantMax, quantMin }) => {
    const quantityData = {
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
                label: 'Quantity Average',
                backgroundColor: '#1098F7',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: quantAvg
            },
            {   
                label: 'Quanity Max',
                backgroundColor: '#29BF12',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: quantMax
            },
            {   
                label: 'Quanity Min',
                backgroundColor: '#ED1C24',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: quantMin
            }
        ]
    }
    
    return (
    <div className="graph">
        <h1>Quantity History</h1>
        <Bar
            data={quantityData}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
)};


