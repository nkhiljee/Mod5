import React, {Component} from 'react';
import { Link } from 'react-router-dom'



export default class Cartinfo extends Component {
    render() {
        return(
            <div className="cart">
                <form onSubmit={(e) => this.props.updateAccount(e)}>
                    <div className="row" style={{ 'marginTop': '30px', 'marginBottom': '30px'}}>
                        <div className="col" style={{ 'marginLeft': '100px', 'marginRight': '50px'}}>
                            <h2>Shipping Info</h2>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" name="fullname" aria-describedby="emailHelp" placeholder="Full Name" required/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" name="Address" aria-describedby="emailHelp" placeholder="Address" required/>
                                <br/>
                                <input type="rtext" className="form-control" name="unit" aria-describedby="emailHelp" placeholder="Apartment Number" required/>
                                <br/>
                                <input type="text" className="form-control" name="city" placeholder="City"/>
                                <br/>
                                <input type="text" className="form-control" name="State" aria-describedby="emailHelp" placeholder="State: TX" required/>
                                <br/>
                                <input type="text" className="form-control" name="Zipcode" aria-describedby="emailHelp" placeholder="Zipcode" required/>
                            </div>

                        </div>
                        <div className="col"  style={{ 'marginLeft': '50px', 'marginRight': '100px'}}>
                            <h2>Billing Info</h2>
                            <div className="form-group">
                                <label>Card Info</label>
                                <input type="text" className="form-control" name="CardName" aria-describedby="emailHelp" placeholder="Name On Card" required/>
                                <br/>
                                <input type="text" className="form-control" name="CardNumber" aria-describedby="emailHelp" placeholder="Card Number" required/>
                                <br/>
                                <input type="text" className="form-control" name="Security" placeholder="Security Code" required/>
                                <br/>
                                <input type="text" className="form-control" name="Zipcode" aria-describedby="emailHelp" placeholder="Billing Zipcode" required/>
                                <br/>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <br/>
                            <button type="submit" className="btn btn-success">Finalize</button>
                        </div>

                    </div>
                </form>


            </div>
        )
    }
}