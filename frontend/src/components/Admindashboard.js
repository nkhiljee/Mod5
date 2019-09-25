import React, {Component} from 'react';
import Inquirymap from './Inquirymap'
import Usermap from './Usermap'
import Marketmap from './Marketmap'




export default class AdminDash extends Component {
    constructor(){
        super()
        this.state = {
            inquiries: [],
            users: [],
            calculators: [],
            markets: [],
            inquiry: {},
            user: {
                name: "",
                email: "",
                city: "",
                state: "",
                phone: "",
                organization: "",
                company_size: "",
                account_type: ""
            },
            market: {
                city: "",
                state: "",
                last_update: ""
            }
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1/inquiries", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            }
        })
        .then(res => res.json())
        .then(inquiries => {
            this.setState({
                inquiries: inquiries
            })
        })

        fetch("http://localhost:3000/api/v1/users", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            }
        })
        .then(res => res.json())
        .then(users => {
            this.setState({
                users: users
            })
        })

        fetch("http://localhost:3000/api/v1/markets", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            }
        })
        .then(res => res.json())
        .then(markets => {
            this.setState({
                markets: markets
            })
        })
    }

    displayInquiry = (inquiry) => {
        this.setState({
            inquiry: inquiry
        })
    }

    displayUser = (user) => {
        this.setState({
            user: user
        })
    }

    displayMarket = (market) => {
        // console.log(market)
        this.setState({
            market: market
        })
    }

    contactPatch = () => {
        fetch(`http://localhost:3000/api/v1/inquiries/${this.state.inquiry.id}`, {
            method: "PATCH",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            },
            body: JSON.stringify({
                contacted: true
            })
        })
        .then(res => res.json())
        .then(inquiry => {
            let arr = this.state.inquiries.map(i => {
                if (i.id === this.state.inquiry.id) {
                    i.contacted = true
                    this.setState({
                        inquiry: i
                    })
                    return i
                } else {
                    return i
                }
            })
            this.setState({
                inquiry: inquiry,
                inquiries: arr        
            })
        })
    }

    resolvePatch = () => {
        fetch(`http://localhost:3000/api/v1/inquiries/${this.state.inquiry.id}`, {
            method: "PATCH",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            },
            body: JSON.stringify({
                resolved: true
            })
        })
        .then(res => res.json())
        .then(inquiry => {
            let arr = this.state.inquiries.map(i => {
                if (i.id === this.state.inquiry.id) {
                    i.resolved = true
                    this.setState({
                        inquiry: i
                    })
                    return i
                } else {
                    return i
                }
            })
            this.setState({
                inquiry: inquiry,
                inquiries: arr        
            })
        })
    }

    userPatch = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}`, {
            method: "PATCH",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            },
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value,
                city: e.target[2].value,
                state: e.target[3].value,
                phone: e.target[4].value,
                organization: e.target[5].value,
                company_size: e.target[6].value,
                account_type: e.target[7].value
            })
        })
        .then(res => res.json())
        .then(user => {
            // console.log(user)
            let arr = this.state.users.map(u => {
                if (u.id === this.state.user.id) {
                    u = user
                    // console.log(user)
                    this.setState({
                        user: {
                            name: "",
                            email: "",
                            city: "",
                            state: "",
                            phone: "",
                            organization: "",
                            company_size: "",
                            account_type: ""
                            }
                    })
                    return u
                } else {
                    return u
                }
            })
            this.setState({
                user : {
                    name: "",
                    email: "",
                    city: "",
                    state: "",
                    phone: "",
                    organization: "",
                    company_size: "",
                    account_type: ""
                },
                users: arr        
            })
        })
        e.target.reset()
    }

    marketPatch = (e) => {
        e.preventDefault()
        // console.log(e.target)
        fetch(`http://localhost:3000/api/v1/markets/${this.state.market.id}`, {
            method: "PATCH",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}` 
            },
            body: JSON.stringify({
                city: e.target[0].value,
                state: e.target[1].value,
                last_update: e.target[2].value
            })
        })
        .then(res => res.json())
        .then(market => {
            let arr = this.state.markets.map(m => {
                if (m.id === this.state.market.id) {
                    m = market
                    this.setState({
                        market: {
                            city: "",
                            state: "",
                            last_update: ""
                        }
                    })
                    return m
                } else {
                    return m
                }
            })
            this.setState({
                market: {
                    city: "",
                    state: "",
                    last_update: ""
                },
                markets: arr        
            })
        })
        e.target.reset()
    }

    render() {
        return(
            <div className="dashboard" style={{ 'marginLeft': '15px', 'marginRight': '15px'}}>
                <div className="row">
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '15px'}}>
                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                            <div className="card-header"><h3>Inquiry MGMT</h3></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4" style={{height:"300px",overflow: "auto"}}>
                                        {this.state.inquiries.map(inquiry => <Inquirymap inquiry={inquiry} displayInquiry={this.displayInquiry}/>)}
                                    </div>
                                    <div className="col-8">
                                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                                            <div className="card-body">
                                                <div className="row" style={{fontWeight: "500", textAlign: "left", paddingLeft: "20px", height:"35px"}}>
                                                    <div className="col">Name:<br/> {this.state.inquiry.name}</div>
                                                    <div className="col">Email:<br/> {this.state.inquiry.email}</div>
                                                    <div className="col">Phone:<br/> {this.state.inquiry.phone}</div>
                                                </div>
                                                <div className="row" style={{fontWeight: "500", height:"150px", textAlign: "left", padding: "20px"}}>
                                                    <div className="col">
                                                        Message:<br/>
                                                        {this.state.inquiry.message}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col" style={{position: "absolute", bottom: "10px"}}>
                                                        <button className="btn btn-success" onClick={this.contactPatch}>Contacted</button>
                                                        <button className="btn btn-success" onClick={this.resolvePatch}>Resolved</button>
                                                    </div>
                                                </div>
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
                            <div className="card-header"><h3>User MGMT</h3></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4" style={{height:"350px",overflow: "auto"}}>
                                        {this.state.users.map(user => <Usermap user={user} displayUser={this.displayUser}/>)}
                                    </div>
                                    <div className="col-8">
                                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                                            <div className="card-body">
                                                <form id="form" onSubmit={(e) => this.userPatch(e)}>
                                                    <div className="row">
                                                        <div className="form-group col">
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.user.name} placeholder="Full Name" required/><br/>
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.user.email} placeholder="Email" required/><br/>
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.user.city} placeholder="City" required/><br/>
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.user.state} placeholder="State" required/>
                                                        </div>
                                                        <div className="form-group col">
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.user.phone} placeholder="Phone" required/><br/>
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.user.organization} placeholder="Organization" required/><br/>
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.user.company_size} placeholder="Company Size" required/><br/>
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.user.account_type} placeholder="Account Type (Monthly or Yearly)" required/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col" style={{position: "absolute", bottom: "10px"}}>
                                                            <button type="submit" className="btn btn-success">Update</button>
                                                        </div>
                                                    </div>
                                                </form>
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
                            <div className="card-header"><h3>Market MGMT</h3></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4" style={{height:"300px",overflow: "auto"}}>
                                        {this.state.markets.map(market => <Marketmap market={market} displayMarket={this.displayMarket} propertyCount={this.props.propertyCount}/>)}
                                    </div>
                                    <div className="col-8">
                                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                                            <div className="card-body">
                                                <form id="form" onSubmit={(e) => this.marketPatch(e)}>
                                                    <div className="row">
                                                        <div className="form-group col">
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.market.city} placeholder="City" required/><br/>
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.market.state} placeholder="State" required/><br/>
                                                        </div>
                                                        <div className="form-group col">
                                                            <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" defaultValue={this.state.market.last_update} placeholder="Last Property Add Date" required/><br/>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col" style={{position: "absolute", bottom: "10px"}}>
                                                            <button type="submit" className="btn btn-success">Update</button>
                                                        </div>
                                                    </div>
                                                </form>
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
                            <div className="card-header"><h3>Calculator MGMT</h3></div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}