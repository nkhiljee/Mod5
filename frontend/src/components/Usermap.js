import React, {Component} from 'react';

export default class Usermap extends Component {
    
    render(){
        // console.log(this.props.inquiry)
        return(
            <div className="inquirymap" onClick={() => this.props.displayUser(this.props.user)}>
                <div className="card bg-secondary mb-3">
                    <div className="row">
                        <div className="col-6" style={{textAlign: "left"}}>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem", fontWeight: "500"}}>{this.props.user.name}</div>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem"}}>{this.props.user.organization}</div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                { this.props.user.is_admin === true ? 
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#11a9a5"}}></div>                                
                                :
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#ccc"}}></div>
                                }
                                <div style={{padding: "0.50rem"}}>Is Admin</div>
                            </div>
                            <div className="row">
                                { this.props.user.account_type != "null" ? 
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#11a9a5"}}></div>                                
                                :
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#ccc"}}></div>
                                }
                                <div style={{padding: "0.50rem"}}>Has Account</div>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        )
    }
}
