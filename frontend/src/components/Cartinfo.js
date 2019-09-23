import React, {Component} from 'react';


export default class Cartinfo extends Component {
    render() {
        return(
            <div className="cart">
                <form onSubmit={null}>
                    <div className="row" style={{ 'marginTop': '30px', 'marginBottom': '30px'}}>
                        <div className="col" style={{ 'marginLeft': '100px', 'marginRight': '50px'}}>
                            <h2>Shipping Info</h2>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="fullname" className="form-control" name="fullname" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" onChange={null}/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Address</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" onChange={null}/>
                                <br/>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apartment Number" onChange={null}/>
                                <br/>
                                <input type="city" className="form-control" name="city" id="exampleInputPassword1" placeholder="City" onChange={null}/>
                                <br/>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State: TX" onChange={null}/>
                                <br/>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zipcode" onChange={null}/>
                            </div>

                        </div>
                        <div className="col"  style={{ 'marginLeft': '50px', 'marginRight': '100px'}}>
                            <h2>Billing Info</h2>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Card Info</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name On Card" onChange={null}/>
                                <br/>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Card Number" onChange={null}/>
                                <br/>
                                <input type="city" className="form-control" name="city" id="exampleInputPassword1" placeholder="Security Code" onChange={null}/>
                                <br/>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Billing Zipcode" onChange={null}/>
                                <br/>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zipcode" onChange={null}/>
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