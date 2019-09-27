import React, {Component} from 'react';

export default class Calculatormap extends Component {
    
    render(){
        // console.log(this.props.inquiry)
        return(
            <div className="inquirymap" onClick={() => this.props.displayCalculator(this.props.calculator)}>
                <div className="card bg-sec mb-3">
                    <div className="row">
                        <div className="col-6" style={{textAlign: "left"}}>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem", fontWeight: "500"}}>{this.props.calculator.address}</div>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem"}}>{this.props.calculator.zip}</div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                { this.props.calculator.purchase_price ? 
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#11a9a5"}}></div>                                
                                :
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#ccc"}}></div>
                                }
                                <div style={{padding: "0.50rem"}}>Filled Out</div>
                            </div>
                            {/* <div className="row">
                                { this.props.calculator.resolved === true ? 
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#11a9a5"}}></div>                                
                                :
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#ccc"}}></div>
                                }
                                <div style={{padding: "0.50rem"}}>Resolved</div>
                            </div> */}
                        </div>             
                    </div>
                </div>
            </div>
        )
    }
}
