import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Signup extends Component {

    signup = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value,
                password: e.target[2].value,
                city: e.target[3].value,
                state: e.target[4].value,
                phone: "",
                organization: e.target[5].value,
                company_size: e.target[6].value,
                account_type: "null",
                is_admin: false
            })
        })
        .then(res => res.json())
        .then(data =>{
            this.props.history.push("/login")
        })

    }

    render() {
        return(
            <div className="signin">
                <div className="row">
                    <div className="col-sm">
                        <h1>What will your market teach you?</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <form onSubmit={(e) => this.signup(e)}>

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="fullname" className="form-control" name="fullname" aria-describedby="emailHelp" placeholder="Enter full name" required/>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" required/>
                            </div>
                    
                            <div className="form-group">
                                <label>City</label>
                                <input type="city" className="form-control" name="city" placeholder="City" required/>
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <select className="form-control" required>
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
                                <label>Organization</label>
                                <input type="organization" className="form-control" name="organization" placeholder="Organization" required/>
                            </div>
                            <div className="form-group">
                                <label>Company Size</label>
                                <select className="form-control" required>
                                    <option className="form-control" value="1-10">1-10</option>
                                    <option className="form-control" value="11-50">11-50</option>
                                    <option className="form-control" value="51-100">51-100</option>
                                </select>
                            </div>
                            
                            <button type="submit" className="btn btn-success">Get Started</button>
                        </form> 
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>
        )
    }
}