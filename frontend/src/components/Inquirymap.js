import React, {Component} from 'react';

export default class Inquirymap extends Component {
    
    render(){
        console.log(this.props.inquiry)
        return(
            <div className="inquirymap">
                <div className="card bg-secondary mb-3">
                    <div className="row">
                        <div className="col-6" style={{textAlign: "left"}}>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem"}}>{this.props.inquiry.name}</div>
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



{/* <div style={{paddingTop: "0.75rem"}}>
<div style={{height: "10px", width:"20px", backgroundColor: "#ccc"}}></div>
Contacted
<div style={{height: "10px", width:"20px", backgroundColor: "#ccc"}}></div>
Resolved
</div> */}