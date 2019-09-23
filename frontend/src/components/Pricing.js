import React, {Component} from 'react';
import { Link } from 'react-router-dom'



export default class Pricing extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="pricing">
            <div className="row">
                <div className="col">
                    <h1>Invest in your company's future</h1>
                    <p className="pricing-header2">Select a monthly or yearly subscription plan</p>
                </div>
            </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <div className="card" style={{width: "16rem"}}>
                        <img src={require('../images/home3.png')} className="works-img" />
                            <div className="card-body">
                                <h5 className="card-title"><strong>Monthly Subscription</strong></h5>
                                <p className="card-text" id="pricing-price">$49</p>
                                <Link to="/cart" ><button type="button" value= "monthly" class="btn btn-success" onClick={(e) => this.props.addToCart(e)}>Add to Cart</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="card" style={{width: "16rem"}}>
                        <img src={require('../images/home3.png')} className="works-img" />
                            <div className="card-body">
                                <h5 className="card-title"><strong>Yearly Subscription</strong></h5>
                                <p className="card-text" id="pricing-price">$499</p>
                                <Link to="/cart" ><button type="button" value="yearly" className="btn btn-success" onClick={(e) => this.props.addToCart(e)}>Add to Cart</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}