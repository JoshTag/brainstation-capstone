
export default {
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
            borderColor: '#cf0000',
            hoverBackgroundColor: '#ffbb00',
            hoverBorderColor: '#ffbb00',
            data: [
                453, 5435, 521, 1523, 2433, 4434, 1231 
            ]
        },
        {   
            label: 'Quantity Average',
            type: 'bar',
            backgroundColor: '#0020b1',
            hoverBackgroundColor: '#ffbb00',
            hoverBorderColor: '#ffbb00',
            data: [
                553, 5535, 221, 5523, 2333, 9334, 1923
            ]
        },
    ]
}