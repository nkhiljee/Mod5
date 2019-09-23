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
              labels: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,],
              datasets: [{ 
                  data: this.props.salesVolume,
                  label: "Sales Volume",
                  borderColor: "#11a9a5",
                  fill: false
                }
              ]
            },
            options: {
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