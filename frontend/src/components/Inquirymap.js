import React, {Component} from 'react';

export default class Inquirymap extends Component {
    
    render(){
        return(
            <div className="inquirymap" onClick={() => this.props.displayInquiry(this.props.inquiry)}>
                <div className="card bg-sec mb-3">
                    <div className="row">
                        <div className="col-6" style={{textAlign: "left"}}>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem", fontWeight: "500"}}>{this.props.inquiry.name}</div>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem"}}>{this.props.inquiry.organization}</div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                { this.props.inquiry.contacted === true ? 
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#11a9a5"}}></div>                                
                                :
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#ccc"}}></div>
                                }
                                <div style={{padding: "0.50rem"}}>Contacted</div>
                            </div>
                            <div className="row">
                                { this.props.inquiry.resolved === true ? 
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#11a9a5"}}></div>                                
                                :
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#ccc"}}></div>
                                }
                                <div style={{padding: "0.50rem"}}>Resolved</div>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        )
    }
}
