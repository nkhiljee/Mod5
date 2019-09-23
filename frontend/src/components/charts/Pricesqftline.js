import React, {Component} from 'react';
import Chart from "chart.js";



export default class Pricesqftline extends Component {

    constructor(props){
        super(props)
    }

    componentDidUpdate(){

        new Chart(document.getElementById("pricesqftline"), {
            type: 'line',
            data: {
              labels: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,],
              datasets: [{ 
                  data: this.props.pricesqft.v50,
                  label: "$50",
                  borderColor: "#3cba9f",
                  fill: false
                }, { 
                  data: this.props.pricesqft.v100,
                  label: "$100",
                  borderColor: "#11a9a5",
                  fill: false
                }, { 
                  data: this.props.pricesqft.v150,
                  label: "$150",
                  borderColor: "#c5d0d2",
                  fill: false
                }, { 
                  data: this.props.pricesqft.v200,
                  label: "$200",
                  borderColor: "#999999",
                  fill: false
                }, { 
                  data: this.props.pricesqft.v250,
                  label: "$250",
                  borderColor: "#6b949a",
                  fill: false
                }, { 
                  data: this.props.pricesqft.v300,
                  label: "$300",
                  borderColor: "#12626c",
                  fill: false
                }, { 
                  data: this.props.pricesqft.v400,
                  label: "$400",
                  borderColor: "#000000",
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
            <div>
                <canvas id="pricesqftline"></canvas>
            </div>
        )
    }
}