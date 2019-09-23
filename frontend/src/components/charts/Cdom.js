import React, {Component} from 'react';
import Chart from "chart.js";


export default class Cdom extends Component {

    constructor(props){
        super(props)
    }

    componentDidUpdate(){
   
        new Chart(document.getElementById("triplebarCDOM"), {
            type: 'bar',
            data: {
            labels: ["Jan","feb" ,"Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
            datasets: [
                {
                label: new Date().getFullYear() - 2,
                backgroundColor: "#6b949a",
                data: this.props.secondlastmonthlyCDOM
                },
                {
                label: new Date().getFullYear() - 1,
                backgroundColor: "#12626c",
                data: this.props.lastmonthlyCDOM
                }, {
                label: new Date().getFullYear(),
                backgroundColor: "#11a9a5",
                data: this.props.thismonthlyCDOM
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
                <canvas id="triplebarCDOM"></canvas>
            </div>
        )
    }
}