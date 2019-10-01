import React, {Component} from 'react';
import { Link } from 'react-router-dom'


export default class Inquiry extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
            { localStorage.token ? 
            <div className="cart">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <h1>Push your Investment Dreams Forward</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-lg-" style={{"width": "50%"}}>

                    <div className="card bg-secondary" >
                        <div className="card-header"><h3>Cart</h3></div>
                        <div className="card-body">
                            {(this.props.cart == "empty") ? 
                                <p className="card-text">Your cart is empty.</p>
                            :
                                (this.props.cart == "monthly") ? 
                                    <div>
                                        <div className="row justify-content-md-center">
                                            <img src={require('../images/home3.png')} className="works-img" />
                                        </div>
                                        <div className="row justify-content-md-center">
                                            <h5 className="card-title"><strong>Monthly Subscription</strong></h5>
                                        </div>
                                        <div className="row justify-content-md-center">
                                            <p className="card-text" id="pricing-price">$49</p>
                                            <br/><br/>
                                        </div>
                                        <div className="row justify-content-md-center">
                                            <Link to="/cartinfo"><button onClick={null} value={this.props.cart} className="btn btn-success">Proceed to Checkout</button></Link>
                                        </div>
                                    </div>
                                :
                                <div>
                                        <div className="row justify-content-md-center">
                                            <img src={require('../images/home3.png')} className="works-img" />
                                        </div>
                                        <div className="row justify-content-md-center">
                                            <h5 className="card-title"><strong>Yearly Subscription</strong></h5>
                                        </div>
                                        <div className="row justify-content-md-center">
                                            <p className="card-text" id="pricing-price">$499</p>
                                            <br/><br/>
                                        </div>
                                        <div className="row justify-content-md-center">
                                            <Link to="/cartinfo"><button onClick={null} value={this.props.cart} className="btn btn-success">Proceed to Checkout</button></Link>
                                        </div>
                                    </div>
                            }
                        </div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
            :
            <div className="dashboard">
                <div className="col" style={{ 'textAlign': "center", 'marginTop': '30px', 'marginBottom': '30px'}}>
                    <h1>Please Sign Up or Login To Complete Your Order</h1>
                    <br />
                    <br />

                    <Link to="/signup"><button className="btn btn-success">Sign Up</button></Link>
                </div>
            </div>
            }
            </div>
        )
    }
}