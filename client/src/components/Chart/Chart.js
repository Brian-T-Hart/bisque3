// import React from 'react';
import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import API from "../../utils/salesAPI";
import "./Chart.css";
import { Col, Row, Container } from "../Grid";
var chartData1 = 0;
var chartData2 = 0;
var chartData3 = 0;
var chartData4 = 0;

class Chart extends Component {
  getChartData() {
    this.setState({
      chartData: {
        labels: ["0", "week 1", "week 2", "week 3", "week 4"],
        datasets: [
          {
            label: "Sales ($)",
            data: [0, chartData1, chartData2, chartData3, chartData4],
            backgroundColor: "#0047a6"
          }
        ]
      }
    });
  }

  componentWillMount() {
    console.log("Chart component mounting..Chart.js");
    API.getChartData1({
      repRepId: localStorage.getItem("rep_id")
    }).then(res => {
      console.log("res..Chart.js: ", res.data);
      localStorage.setItem("chartData1", parseInt(res.data, 10));
      chartData1 = localStorage.getItem("chartData1");
      console.log("chartData1..Chart.js ", chartData1);
    });
    API.getChartData2({
      repRepId: localStorage.getItem("rep_id")
    }).then(res => {
      console.log("res..Chart.js: ", res.data);
      localStorage.setItem("chartData2", parseInt(res.data, 10));
      chartData2 = localStorage.getItem("chartData2");
      console.log("chartData2..Chart.js ", chartData2);
    });
    API.getChartData3({
      repRepId: localStorage.getItem("rep_id")
    }).then(res => {
      console.log("res..Chart.js: ", res.data);
      localStorage.setItem("chartData3", parseInt(res.data, 10));
      chartData3 = localStorage.getItem("chartData3");
      console.log("chartData3..Chart.js ", chartData3);
    });
    API.getChartData4({
      repRepId: localStorage.getItem("rep_id")
    })
      .then(res => {
        console.log("res..Chart.js: ", res.data);
        localStorage.setItem("chartData4", parseInt(res.data, 10));
        chartData4 = localStorage.getItem("chartData4");
        console.log("chartData4..Chart.js ", chartData4);
        this.getChartData();
      })
      .catch(err => console.log(err));
  }

  //  constructor is a function that will run when initialized
  constructor(props) {
    //  props are basically properties that you can pass into components
    super(props);
    this.state = {
      chartData: {
        labels: ["week 1", "week 2", "week 3", "week 4"],
        datasets: [
          {
            label: "Sales ($)",
            data: [0, 0, 0, 0, 0],
            backgroundColor: "#0047a6"
          }
        ]
      }
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="xs-12 sm-10 sm-offset-1">
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={65}
                    options={{
                        title: {
                          display: true,
                          text: "Weekly Sales Progress"
                        },
                        maintainAspectRatio: true
                    }}
                />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chart;
