import React, {Component} from 'react';
import Statemarket from './charts/Statemarket'
import Triplebar from './charts/Triplebar'

// import math from 'mathjs'



export default class Dashboard extends Component {

    constructor(){
        super()
        this.state={
            properties: [],
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1/properties", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(properties => {
            this.setState({
                properties: properties
            })
        })
        // this.salesVolume()
        
    }

    range = () => {
        var ans = [];
        for (let i = 1995; i <= 2020; i++) {
            ans.push(i);
        }
        return ans;
    }

    salesVolume = () => {
        let range = this.range()
        let vol = []
        let arr

        range.forEach(year => {
            arr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year)
            vol.push(arr.length)
        })
        return vol
    }

    render() {
        console.log(this.salesVolume())        
        return(
            <div className="dashboard">
                <div className="row">
                    <div className="col">
                        <Statemarket salesVolume={this.salesVolume()}/>
                    </div>
                    <div className="col">
                        {/* triple bar graph, last year and this year ; last month, this month, next month  */}
                        <Triplebar />

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </div>
        )
    }
}