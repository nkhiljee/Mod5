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
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="text" className="form-control" name="fullname" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" onChange={null} required/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" name="Address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" onChange={null} required/>
                                <br/>
                                <input type="rtext" className="form-control" name="unit" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apartment Number" onChange={null} required/>
                                <br/>
                                <input type="text" className="form-control" name="city" id="exampleInputPassword1" placeholder="City" onChange={null}/>
                                <br/>
                                <input type="text" className="form-control" name="State" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State: TX" onChange={null} required/>
                                <br/>
                                <input type="text" className="form-control" name="Zipcode" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zipcode" onChange={null} required/>
                            </div>

                        </div>
                        <div className="col"  style={{ 'marginLeft': '50px', 'marginRight': '100px'}}>
                            <h2>Billing Info</h2>
                            <div className="form-group">
                                <label>Card Info</label>
                                <input type="text" className="form-control" name="CardName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name On Card" onChange={null} required/>
                                <br/>
                                <input type="text" className="form-control" name="CardNumber" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Card Number" onChange={null} required/>
                                <br/>
                                <input type="text" className="form-control" name="Security" id="exampleInputPassword1" placeholder="Security Code" onChange={null} required/>
                                <br/>
                                <input type="text" className="form-control" name="Zipcode" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Billing Zipcode" onChange={null} required/>
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