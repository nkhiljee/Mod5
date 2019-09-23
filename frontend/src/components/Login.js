import React, {Component} from 'react';
import { Link } from 'react-router-dom'



export default class Login extends Component {

    login = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value)
        // console.log(e.target[1].value)

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: e.target[0].value,
                password: e.target[1].value,
            })
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            localStorage.token = data.token
            localStorage.admin = data.admin
            localStorage.account = data.account

            this.props.history.push("/dashboard")
            this.props.loggedIn()
        })
    }

    render() {
        return(
            <div className="signin">
                <div className="row">
                <div className="col-sm">
                <h1>Learn more from Real Analyzer</h1>
                </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">
                        <form onSubmit={(e) => this.login(e)}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
                            </div>
                            
                            {/* <Link to="/dashboard"><button type="submit" className="btn btn-success">Login</button></Link> */}
                            <button type="submit" className="btn btn-success">Login</button>

                        </form>
                    </div>
                    <div className="col-sm">
                    
                    </div>
                </div>
            </div>
        )
    }
}