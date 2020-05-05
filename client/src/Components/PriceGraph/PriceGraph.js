import React from "react";
import { Line } from "react-chartjs-2";
import "./PriceGraph.scss";

export default ({ width, height, priceAvg, priceMin, priceMax, date }) => {
  const priceData = {
    labels: date,
    easing: "easeInBounce",
    datasets: [
      {
        label: "Price Average",
        borderColor: "#1098F7",
        hoverBackgroundColor: "#FFBE0B",
        hoverBorderColor: "#FFBE0B",
        data: priceAvg,
        lineTension: 0
      },
      {
        label: "Price Max",
        borderColor: "#29BF12",
        hoverBackgroundColor: "#FFBE0B",
        hoverBorderColor: "#FFBE0B",
        data: priceMax,
        lineTension: 0
      },
      {
        label: "Price Min",
        borderColor: "#ED1C24",
        hoverBackgroundColor: "#FFBE0B",
        hoverBorderColor: "#FFBE0B",
        data: priceMin,
        lineTension: 0
      }
    ]
  };

  return (
    <div className="graph">
      <h1>Price History</h1>
      <Line
        data={priceData}
        width={width}
        height={height}
        options={{
          maintainAspectRatio: false,
          animation: {
            easing: "easeInOutQuad",
            duration: 1000
          }
        }}
      />
    </div>
  );
};
