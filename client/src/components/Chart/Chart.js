// import React from 'react';
import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import API from '../../utils/salesAPI';
var chartData1 = 0;
var chartData2 = 0;
var chartData3 = 0;
var chartData4 = 0;

class Chart extends Component {

    getChartData() {
        this.setState({
            chartData:
                {
                    labels: ['0', 'week 1', 'week 2', 'week 3', 'week 4'],
                    datasets: [{
                        label: 'Sales',
                        data: [0, chartData1, chartData2, chartData3, chartData4],
                        backgroundColor: ['rgba(255, 255,255, .8)'],
                    }]
                }
        })
    };

    componentWillMount() {
        console.log('Chart component mounting..Chart.js');
        API.getChartData1({
            repRepId: localStorage.getItem('rep_id')
        })
            .then(res => {
                console.log("res..Chart.js: ", res.data);
                localStorage.setItem('chartData1', parseInt(res.data, 10));
                chartData1 = localStorage.getItem('chartData1');
                console.log('chartData1..Chart.js ', chartData1);
            })
            // .catch(err => console.log(err));
        API.getChartData2({
            repRepId: localStorage.getItem('rep_id')
        })
            .then(res => {
                console.log("res..Chart.js: ", res.data);
                localStorage.setItem('chartData2', parseInt(res.data, 10));
                chartData2 = localStorage.getItem('chartData2');
                console.log('chartData2..Chart.js ', chartData2);
            })
        API.getChartData3({
            repRepId: localStorage.getItem('rep_id')
        })
            .then(res => {
                console.log("res..Chart.js: ", res.data);
                localStorage.setItem('chartData3', parseInt(res.data, 10));
                chartData3 = localStorage.getItem('chartData3');
                console.log('chartData3..Chart.js ', chartData3);
            })
        API.getChartData4({
            repRepId: localStorage.getItem('rep_id')
        })
            .then(res => {
                console.log("res..Chart.js: ", res.data);
                localStorage.setItem('chartData4', parseInt(res.data, 10));
                chartData4 = localStorage.getItem('chartData4');
                console.log('chartData4..Chart.js ', chartData4);
                this.getChartData()
            })    
        }

    //  constructor is a function that will run when initialized
     constructor(props){
        //  props are basically properties that you can pass into components
         super(props);
         this.state = {
             chartData:{
                //  this is my "y" axis data
             labels: ['0', 'week 1', 'week 2', 'week 3', 'week 4'],
            datasets: [{
               label: 'Sales',
            //    this is my "x" axis data
               data:[0, chartData1, 0, 0, 0],
               backgroundColor:['rgba(0, 0, 0, 0)'], 
            }]
             }
         }
     }
     
      render() {
          return(
              <div className= "chart">
              <Line
              data={this.state.chartData}
              width={100}
              height={50}
              options={{
                  title: {
                      display:true,
                      text:'Weekly Sprig Rep Sales'
                  }
              }}
              />
              </div>
          )}
        }

  export default Chart;