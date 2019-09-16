import React, {Component} from 'react';
import Chart from "chart.js";


export default class StateMarket extends Component {

    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        new Chart(document.getElementById("statemarket"), {
            type: 'line',
            data: {
              labels: [1995,,,,,2000,,,,,2005,,,,,2010,,,,,2015,,,,,2020,],
              datasets: [{ 
                  data: this.props.salesVolume,
                  label: "Sales Volume",
                  borderColor: "#11a9a5",
                  fill: false
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Yearly Sales Volume',
                fontSize: 20,
              },
              legend: {
                position: "bottom"
              },
            }
        });     
    }

    render() {
        return(
            <div className="statemarket">
                <canvas id="statemarket"></canvas>
            </div>
        )
    }
}