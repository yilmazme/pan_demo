import React, { Component } from "react";
import Data from "./chartMap.js";
import { Line } from "react-chartjs-2";
import "./Chart.css";

const legend = {
  display: false,
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          reverse: true,
        },
      },
    ],
  },
};

class Chart extends Component {
  state = {
    data: Data,
  };

  render() {
    return (
      <div className="chart-container">
        <h2
          style={{
            paddingTop: "10px",
            marginBottom: "10px",
            fontSize: "1.2rem",
            marginLeft: "20px",
          }}
        >
          Rank History
        </h2>
        <div className="graph">
          <Line
            ref="chart"
            data={this.state.data}
            legend={legend}
            options={options}
          />
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data;
  //   console.log(datasets[0].data);
  // }
}
export default Chart;
