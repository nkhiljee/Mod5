import React, {Component} from 'react';


export default class Signup extends Component {
    render() {
        return(
            <div className="signin">
                <h1>Sign Up</h1>
                <form onSubmit={null}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="fullname" className="form-control" name="fullname" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">City</label>
                        <input type="city" className="form-control" name="city" id="exampleInputPassword1" placeholder="City" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect1">State</label>
                        <select className="form-control" id="exampleSelect1">
                            <option className="form-control" value="AL">Alabama</option>
                            <option className="form-control" value="AK">Alaska</option>
                            <option className="form-control" value="AZ">Arizona</option>
                            <option className="form-control" value="AR">Arkansas</option>
                            <option className="form-control" value="CA">California</option>
                            <option className="form-control" value="CO">Colorado</option>
                            <option className="form-control" value="CT">Connecticut</option>
                            <option className="form-control" value="DE">Delaware</option>
                            <option className="form-control" value="DC">District Of Columbia</option>
                            <option className="form-control" value="FL">Florida</option>
                            <option className="form-control" value="GA">Georgia</option>
                            <option className="form-control" value="HI">Hawaii</option>
                            <option className="form-control" value="ID">Idaho</option>
                            <option className="form-control" value="IL">Illinois</option>
                            <option className="form-control" value="IN">Indiana</option>
                            <option className="form-control" value="IA">Iowa</option>
                            <option className="form-control" value="KS">Kansas</option>
                            <option className="form-control" value="KY">Kentucky</option>
                            <option className="form-control" value="LA">Louisiana</option>
                            <option className="form-control" value="ME">Maine</option>
                            <option className="form-control" value="MD">Maryland</option>
                            <option className="form-control" value="MA">Massachusetts</option>
                            <option className="form-control" value="MI">Michigan</option>
                            <option className="form-control" value="MN">Minnesota</option>
                            <option className="form-control" value="MS">Mississippi</option>
                            <option className="form-control" value="MO">Missouri</option>
                            <option className="form-control" value="MT">Montana</option>
                            <option className="form-control" value="NE">Nebraska</option>
                            <option className="form-control" value="NV">Nevada</option>
                            <option className="form-control" value="NH">New Hampshire</option>
                            <option className="form-control" value="NJ">New Jersey</option>
                            <option className="form-control" value="NM">New Mexico</option>
                            <option className="form-control" value="NY">New York</option>
                            <option className="form-control" value="NC">North Carolina</option>
                            <option className="form-control" value="ND">North Dakota</option>
                            <option className="form-control" value="OH">Ohio</option>
                            <option className="form-control" value="OK">Oklahoma</option>
                            <option className="form-control" value="OR">Oregon</option>
                            <option className="form-control" value="PA">Pennsylvania</option>
                            <option className="form-control" value="RI">Rhode Island</option>
                            <option className="form-control" value="SC">South Carolina</option>
                            <option className="form-control" value="SD">South Dakota</option>
                            <option className="form-control" value="TN">Tennessee</option>
                            <option className="form-control" value="TX">Texas</option>
                            <option className="form-control" value="UT">Utah</option>
                            <option className="form-control" value="VT">Vermont</option>
                            <option className="form-control" value="VA">Virginia</option>
                            <option className="form-control" value="WA">Washington</option>
                            <option className="form-control" value="WV">West Virginia</option>
                            <option className="form-control" value="WI">Wisconsin</option>
                            <option className="form-control" value="WY">Wyoming</option> 
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Organization</label>
                        <input type="organization" className="form-control" name="organization" id="exampleInputPassword1" placeholder="Organization" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect1">Company Size</label>
                        <select className="form-control" id="exampleSelect1">
                            <option className="form-control" value="1-10">1-10</option>
                            <option className="form-control" value="11-50">11-50</option>
                            <option className="form-control" value="51-100">51-100</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-success">Sign Up</button>
                </form>
            </div>
        )
    }
}