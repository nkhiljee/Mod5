import React, {Component} from 'react';
import Statemarket from './charts/Statemarket'
import Triplebar from './charts/Triplebar'
import Pricesqftline from './charts/Pricesqftline'
import Priceline from './charts/Priceline'
import Dom from './charts/Dom'
import Cdom from './charts/Cdom'
import { Link } from 'react-router-dom'





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
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            }
        })
        .then(res=>res.json())
        .then(properties => {
            console.log(properties)
            console.log(localStorage.token)
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

    thismonthlyDOM = () => {
        let monthrange = this.monthrange()
        let thisyear = new Date().getFullYear()
        let thismonthlyvol = []
        let thismontharr
        let sum = 0
        let avg = 0
        let arr = []

        monthrange.forEach(month => {
            sum = 0
            avg = 0
            // debugger
            thismontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == thisyear && property.CloseDate.split("-")[1] == month)
            arr = thismontharr.map(property => {
                return property.DOM
            })
            if (arr.length != 0) {
                sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
                avg = sum / arr.length
                thismonthlyvol.push(parseInt(avg))

                return thismonthlyvol
            }
            thismonthlyvol.push(parseInt(avg))
        })
        return thismonthlyvol
    }

    lastmonthlyDOM = () => {
        let monthrange = this.monthrange()
        let lastyear = new Date().getFullYear() - 1
        let lastmonthlyvol = []
        let lastmontharr
        let sum = 0
        let avg = 0
        let arr = []

        monthrange.forEach(month => {
            lastmontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == lastyear && property.CloseDate.split("-")[1] == month)
            arr = lastmontharr.map(property => {
                return property.DOM
            })
            if (arr.length != 0) {
                sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
                avg = sum / arr.length
                lastmonthlyvol.push(parseInt(avg))

                return lastmonthlyvol
            }
            lastmonthlyvol.push(parseInt(avg))
        })
        return lastmonthlyvol
    }

    secondlastmonthlyDOM = () => {
        let monthrange = this.monthrange()
        let secondlastyear = new Date().getFullYear() - 2
        let secondlastmonthlyvol = []
        let secondlastmontharr
        let sum = 0
        let avg = 0
        let arr = []

        monthrange.forEach(month => {
            secondlastmontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == secondlastyear && property.CloseDate.split("-")[1] == month)
            arr = secondlastmontharr.map(property => {
                return property.DOM
            })
            if (arr.length != 0) {
                sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
                avg = sum / arr.length
                secondlastmonthlyvol.push(parseInt(avg))

                return secondlastmonthlyvol
            }
            secondlastmonthlyvol.push(parseInt(avg))
        })
        return secondlastmonthlyvol
    }

    thismonthlyCDOM = () => {
        let monthrange = this.monthrange()
        let thisyear = new Date().getFullYear()
        let thismonthlyvol = []
        let thismontharr
        let sum = 0
        let avg = 0
        let arr = []

        monthrange.forEach(month => {
            sum = 0
            avg = 0
            thismontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == thisyear && property.CloseDate.split("-")[1] == month)
            arr = thismontharr.map(property => {
                return property.CDOM
            })
            if (arr.length != 0) {
                sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
                avg = sum / arr.length
                thismonthlyvol.push(parseInt(avg))

                return thismonthlyvol
            }
            thismonthlyvol.push(parseInt(avg))
        })
        return thismonthlyvol
    }

    lastmonthlyCDOM = () => {
        let monthrange = this.monthrange()
        let lastyear = new Date().getFullYear() - 1
        let lastmonthlyvol = []
        let lastmontharr
        let sum = 0
        let avg = 0
        let arr = []

        monthrange.forEach(month => {
            lastmontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == lastyear && property.CloseDate.split("-")[1] == month)
            arr = lastmontharr.map(property => {
                return property.CDOM
            })
            if (arr.length != 0) {
                sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
                avg = sum / arr.length
                lastmonthlyvol.push(parseInt(avg))

                return lastmonthlyvol
            }
            lastmonthlyvol.push(parseInt(avg))
        })
        return lastmonthlyvol
    }

    secondlastmonthlyCDOM = () => {
        let monthrange = this.monthrange()
        let secondlastyear = new Date().getFullYear() - 2
        let secondlastmonthlyvol = []
        let secondlastmontharr
        let sum = 0
        let avg = 0
        let arr = []

        monthrange.forEach(month => {
            secondlastmontharr = this.state.properties.filter(property => property.CloseDate.split("-")[0] == secondlastyear && property.CloseDate.split("-")[1] == month)
            arr = secondlastmontharr.map(property => {
                return property.CDOM
            })
            if (arr.length != 0) {
                sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
                avg = sum / arr.length
                secondlastmonthlyvol.push(parseInt(avg))

                return secondlastmonthlyvol
            }
            secondlastmonthlyvol.push(parseInt(avg))
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

    pricesqft = () => {
        let range = this.range()
        let newarr50
        let newarr100
        let newarr150
        let newarr200
        let newarr250
        let newarr300
        let newarr400
        let volsqft = 
            {
                v50: [],
                v100: [],
                v150: [],
                v200: [],
                v250: [],
                v300: [],
                v400: [],
            }

        range.forEach(year => {
            newarr50 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.PriceSqFtSold <= 50)
            volsqft.v50.push(newarr50.length)
            newarr100 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.PriceSqFtSold <= 100 && property.PriceSqFtSold > 50)
            volsqft.v100.push(newarr100.length)
            newarr150 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.PriceSqFtSold <= 150 && property.PriceSqFtSold > 100)
            volsqft.v150.push(newarr150.length)
            newarr200 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.PriceSqFtSold <= 200 && property.PriceSqFtSold > 150)
            volsqft.v200.push(newarr200.length)
            newarr250 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.PriceSqFtSold <= 250 && property.PriceSqFtSold > 200)
            volsqft.v250.push(newarr250.length)
            newarr300 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.PriceSqFtSold <= 300 && property.PriceSqFtSold > 250)
            volsqft.v300.push(newarr300.length)
            newarr400 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.PriceSqFtSold > 300)
            volsqft.v400.push(newarr400.length)
        })
        return volsqft
    }

    price = () => {
        let range = this.range()
        let newarr100
        let newarr200
        let newarr300
        let newarr400
        let newarr500
        let newarr600
        let newarr700
        let volprice = 
            {
                v100: [],
                v200: [],
                v300: [],
                v400: [],
                v500: [],
                v600: [],
                v700: [],
            }

        range.forEach(year => {
            newarr100 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.ClosePrice <= 150000)
            volprice.v100.push(newarr100.length)
            newarr200 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.ClosePrice <= 250000 && property.ClosePrice > 150000)
            volprice.v200.push(newarr200.length)
            newarr300 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.ClosePrice <= 350000 && property.ClosePrice > 250000)
            volprice.v300.push(newarr300.length)
            newarr400 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.ClosePrice <= 450000 && property.ClosePrice > 350000)
            volprice.v400.push(newarr400.length)
            newarr500 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.ClosePrice <= 550000 && property.ClosePrice > 450000)
            volprice.v500.push(newarr500.length)
            newarr600 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.ClosePrice <= 650000 && property.ClosePrice > 550000)
            volprice.v600.push(newarr600.length)
            newarr700 = this.state.properties.filter(property => property.CloseDate.split("-")[0] == year && property.ClosePrice > 650000)
            volprice.v700.push(newarr700.length)
        })
        return volprice
    }



    // pricesqft = () => {
    //     let pricerange = [50,100,150,200,250,300,400]
    //     let arr
    //     let vol = []
        
    //     for(let i = 0; i < pricerange.length; i++) {
    //         pricerange[i] === 50 ? 
    //             arr = this.state.properties.filter(property => property.PriceSqFtSold <= pricerange[i])
    //         :
    //             arr = this.state.properties.filter(property => property.PriceSqFtSold <= pricerange[i] && property.PriceSqFtSold > pricerange[i-1])

    //         vol.push(arr.length)
    //     }
    //     return vol
    // }



    render() {
        this.thismonthlyDOM()
        return(
            <div>
            {localStorage.account != "null" || localStorage.admin == "true" ?
            /* {localStorage.account != "null"  ? */

            <div className="dashboard">
                <div className="row">
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '15px'}}>
                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                            <div className="card-header"><h3>Yearly Sales Volume</h3></div>
                            <div className="card-body">
                                <Statemarket salesVolume={this.salesVolume()}/>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '15px'}}>
                    <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                        <div className="card-header"><h3>Year on Year Sales Volume</h3></div>
                        <div className="card-body">
                            <Triplebar thismonthlyVolume={this.thismonthlyVolume()} lastmonthlyVolume={this.lastmonthlyVolume()} secondlastmonthlyVolume={this.secondlastmonthlyVolume()}/>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '15px'}}>
                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                            <div className="card-header"><h3>Yearly Price/sqft Sales Volume</h3></div>
                            <div className="card-body">
                                <Pricesqftline pricesqft={this.pricesqft()}/>
                            </div>
                        </div>
                    </div>
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '15px'}}>
                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                            <div className="card-header"><h3>Yearly Price Sales Volume</h3></div>
                            <div className="card-body">
                            <Priceline price={this.price()}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '30px'}}>
                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                            <div className="card-header"><h3>Year on Year AVG Monthly DOM</h3></div>
                            <div className="card-body">
                            <Dom secondlastmonthlyDOM={this.secondlastmonthlyDOM()} lastmonthlyDOM={this.lastmonthlyDOM()} thismonthlyDOM={this.thismonthlyDOM()}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '30px'}}>
                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                            <div className="card-header"><h3>Year on Year AVG Monthly CDOM</h3></div>
                            <div className="card-body">
                            <Cdom secondlastmonthlyCDOM={this.secondlastmonthlyCDOM()} lastmonthlyCDOM={this.lastmonthlyCDOM()} thismonthlyCDOM={this.thismonthlyCDOM()}/>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            : 
            <div className="dashboard">
                <div className="col" style={{ 'textAlign': "center", 'marginTop': '70px', 'marginBottom': '30px'}}>
                    <h1>Please Purchase an Account</h1>
                    <br />
                    <br />

                    <Link to="/pricing"><button className="btn btn-success">Pricing</button></Link>
                </div>
            </div>
            }
        </div>
        )
    }
}