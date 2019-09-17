import React, {Component} from 'react';
import Statemarket from './charts/Statemarket'
import Triplebar from './charts/Triplebar'
import Priceline from './charts/Priceline'


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

    }

    range = () => {
        var ans = [];
        for (let i = 1995; i <= 2020; i++) {
            ans.push(i);
        }
        return ans;
    }

    monthrange = () => {
        var months = []
        for (let i = 1; i <= 12; i++) {
            if (i<10) {
                var j = "0" + i
                months.push(j);
            } else{
                months.push(i);
            }
        }
        return months;
    }

    thismonthlyVolume = () => {
        let monthrange = this.monthrange()
        let thisyear = new Date().getFullYear()
        let thismonthlyvol = []
        let thismontharr

        monthrange.forEach(month => {
            thismontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == thisyear && property.CloseDate.split("-")[1] == month)
            return thismonthlyvol.push(thismontharr.length)
        })

        return thismonthlyvol
    }

    lastmonthlyVolume = () => {
        let monthrange = this.monthrange()
        let lastyear = new Date().getFullYear() - 1
        let lastmonthlyvol = []
        let lastmontharr

        monthrange.forEach(month => {
            lastmontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == lastyear && property.CloseDate.split("-")[1] == month)
            return lastmonthlyvol.push(lastmontharr.length)
        })

        return lastmonthlyvol
    }

    secondlastmonthlyVolume = () => {
        let monthrange = this.monthrange()
        let secondlastyear = new Date().getFullYear() - 2
        let secondlastmonthlyvol = []
        let secondlastmontharr

        monthrange.forEach(month => {
            secondlastmontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == secondlastyear && property.CloseDate.split("-")[1] == month)
            return secondlastmonthlyvol.push(secondlastmontharr.length)
        })

        return secondlastmonthlyvol
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
        return(
            <div className="dashboard">
                <div className="row">
                    <div className="col">
                        <Statemarket salesVolume={this.salesVolume()}/>
                    </div>
                    <div className="col">
                        <Triplebar thismonthlyVolume={this.thismonthlyVolume()} lastmonthlyVolume={this.lastmonthlyVolume()} secondlastmonthlyVolume={this.secondlastmonthlyVolume()}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Priceline />
                    </div>
                    <div className="col">
                        price/sqft volume month on month
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