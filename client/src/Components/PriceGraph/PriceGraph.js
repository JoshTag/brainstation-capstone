import React from 'react';
import { Line } from 'react-chartjs-2';
import './PriceGraph.scss';

export default ({ width, height, priceAvg,priceMin, priceMax}) => { 
    const priceData =  {
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
                borderColor: '#1098F7',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: priceAvg
            },
            {   
                label: 'Price Max',
                borderColor: '#29BF12',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: priceMin
            },
            {   
                label: 'Price Min',
                borderColor: '#ED1C24',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: priceMax
            }
        ]
    }
    return (

     <div className="graph" >
        <h1>Price History</h1>
        <Line
            data={priceData}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
)};



