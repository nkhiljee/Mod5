import React, {Component} from 'react';
import Inquirymap from './Inquirymap'


export default class AdminDash extends Component {
    constructor(){
        super()
        this.state = {
            inquiries: [],
            users: [],
            calculators: [],
            markets: []
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
                                    <div class="col-4" style={{height:"300px",overflow: "auto"}}>
                                        {this.state.inquiries.map(inquiry => <Inquirymap inquiry={inquiry} />)}
                                    </div>
                                    <div class="col-8">
                                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>

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

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ 'marginTop': '15px', 'marginBottom': '15px'}}>
                        <div className="card bg-secondary mb-3" style={{"width": "100%", height: "100%"}}>
                            <div className="card-header"><h3>Market MGMT</h3></div>
                            <div className="card-body">

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