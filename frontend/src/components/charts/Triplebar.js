import React, {Component} from 'react';
import Chart from "chart.js";


export default class Triplebar extends Component {

    constructor(props){
        super(props)
    }

    componentDidUpdate(){
   
    new Chart(document.getElementById("triplebar"), {
        type: 'bar',
        data: {
        labels: [1995,,,,,2000,,,,,2005,,,,,2010,,,,,2015,,,,,2020,],
        datasets: [
            {
            label: "Africa",
            backgroundColor: "#3e95cd",
            data: [133,221,783,2478]
            }, {
            label: "Europe",
            backgroundColor: "#8e5ea2",
            data: [408,547,675,734]
            }, {
            label: "Europe",
            backgroundColor: "#8e5ea2",
            data: [408,547,675,734]
            }
        ]
        },
        options: {
        title: {
            display: true,
            text: 'Year on Year Growth',
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
                <canvas id="triplebar"></canvas>
            </div>
        )
    }
}