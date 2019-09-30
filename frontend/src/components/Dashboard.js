import React, {Component} from 'react';
import Statemarket from './charts/Statemarket'
import Triplebar from './charts/Triplebar'
import Pricesqftline from './charts/Pricesqftline'
import Priceline from './charts/Priceline'
import Dom from './charts/Dom'
import Cdom from './charts/Cdom'
import { Link } from 'react-router-dom'
import Map from './Map'


export default class Dashboard extends Component {

    constructor(){
        super()
        this.state={
            propertiesMaster:[],
            properties: [],
            market: ""
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

            if (this.props.propertyLimit == true) {
                console.log(this.props.coords.south)
                let arr = properties.filter(property => property.Lat >= this.props.coords.south && property.Lat <= this.props.coords.north && property.Long >= this.props.coords.west && property.Long <= this.props.coords.east)
                console.log(arr)
                this.setState({
                    properties: arr
                })
                console.log("true")

            } else {
                this.setState({
                    properties: properties,
                    propertiesMaster: properties
                })
            }


            // this.setState({
            //     properties: properties,
            //     propertiesMaster: properties
            // })
            this.props.propertyCount(this.state.properties.length)
        })

        fetch("http://localhost:3000/api/v1/markets", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            }
        })
        .then(res=>res.json())
        .then(markets => {
            this.setState({
                markets: markets
            })
            markets.map(market => {
                this.setState({
                    market: market
                })
            })
        }
        )
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
    thismonthlydollarvolume = () => {
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
                return property.ClosePrice
            })
            if (arr.length != 0) {
                sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
                // avg = sum / arr.length
                thismonthlyvol.push(parseInt(sum))

                return thismonthlyvol
            }
            thismonthlyvol.push(parseInt(sum))
        })
        return thismonthlyvol
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



    render() {
        this.thismonthlyDOM()
        // console.log(this.actualMonths())
        console.log(this.props.propertyLimit)

        return(
            <div>
            {localStorage.account != "null" || localStorage.admin == "true" ?
            <div className="dashboard" style={{ 'marginLeft': '15px', 'marginRight': '15px'}}>
                <div className="row">
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '15px'}}>
                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                            <div className="card-header"><h3>Market Info</h3></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h1>{`Market Name: ${this.state.market.city}, ${this.state.market.state}`}</h1>
                                    </div>
                                </div>
                                <div className="row" style={{paddingLeft: "100px", paddingRight: "100px"}}>
                                    <div className="col">
                                        <h3 style={{paddingTop: "20px"}}>Last Month's Stats</h3>
                                        <div className="row" style={{paddingLeft: "100px", paddingTop: "20px"}}>
                                            <div className="col">
                                                <p style={{"textAlign": "right",fontWeight: "500"}}>Total Property Sales:</p>
                                                <p style={{"textAlign": "right",fontWeight: "500"}}>Total Dollar Volume:</p>
                                                <p style={{"textAlign": "right",fontWeight: "500"}}>Total Days on Market:</p>
                                                <p style={{"textAlign": "right",fontWeight: "500"}}>Total Cumulative DOM:</p>
                                            </div>
                                            <div className="col">
                                                <p style={{"textAlign": "left"}}>{this.thismonthlyVolume()[new Date().getMonth() - 1]}</p>
                                                <p style={{"textAlign": "left"}}>${this.thismonthlydollarvolume()[new Date().getMonth() - 1]}</p>
                                                <p style={{"textAlign": "left"}}>{this.thismonthlyDOM()[new Date().getMonth() - 1]}</p>
                                                <p style={{"textAlign": "left"}}>{this.thismonthlyCDOM()[new Date().getMonth() - 1]}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h3 style={{paddingTop: "20px"}}>This Year's Stats</h3>
                                        <div className="row"  style={{paddingLeft: "100px", paddingTop: "20px"}}>
                                            <div className="col">
                                                <p style={{"textAlign": "right",fontWeight: "500"}}>Total Property Sales:</p>
                                                <p style={{"textAlign": "right",fontWeight: "500"}}>Total Dollar Volume:</p>
                                                <p style={{"textAlign": "right",fontWeight: "500"}}>Average Days on Market:</p>
                                                <p style={{"textAlign": "right",fontWeight: "500"}}>Average Cumulative DOM:</p>
                                            </div>
                                            <div className="col">
                                                <p style={{"textAlign": "left"}}>{this.salesVolume()[this.salesVolume().length - 2]}</p>
                                                <p style={{"textAlign": "left"}}>${this.thismonthlydollarvolume().reduce((accumulator, currentValue) => accumulator + currentValue)}</p>
                                                <p style={{"textAlign": "left"}}>{(this.thismonthlyDOM().reduce((accumulator, currentValue) => accumulator + currentValue) / this.thismonthlyDOM().filter(month => month != 0).length).toString()}</p>
                                                <p style={{"textAlign": "left"}}>{(this.thismonthlyCDOM().reduce((accumulator, currentValue) => accumulator + currentValue) / this.thismonthlyCDOM().filter(month => month != 0).length).toString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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