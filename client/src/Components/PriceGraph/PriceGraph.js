import React from 'react';
import { Line } from 'react-chartjs-2';
import './PriceGraph.scss';

export default ({ width, height, priceAvg,priceMin, priceMax, date }) => { 
    const priceData =  {
        labels: date,
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
                data: priceMax
            },
            {   
                label: 'Price Min',
                borderColor: '#ED1C24',
                hoverBackgroundColor: '#FFBE0B',
                hoverBorderColor: '#FFBE0B',
                data: priceMin
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



