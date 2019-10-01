import React, {Component} from 'react';

export default class Marketmap extends Component {

    render(){
        return(
            <div className="inquirymap" onClick={() => this.props.displayMarket(this.props.market)}>
                <div className="card  bg-sec mb-3">
                    <div className="row">
                        <div className="col-6" style={{textAlign: "left"}}>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem", fontWeight: "500"}}>{this.props.market.city}</div>
                            <div style={{padding: "0.50rem", paddingLeft: "1.50rem"}}>{this.props.market.state}</div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                { this.props.propertyCount > 0 ? 
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#11a9a5"}}></div>                                
                                :
                                    <div style={{marginTop: "0.9rem", height: "10px", width:"15px", backgroundColor: "#ccc"}}></div>
                                }
                                <div style={{padding: "0.50rem"}}>Has Properties</div>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        )
    }
}
