import React, {Component} from 'react';
import { Link } from 'react-router-dom'



export default class Login extends Component {
    

    login = (e) => {
        e.preventDefault()
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
            localStorage.token = data.token
            localStorage.admin = data.admin
            localStorage.account = data.account

            this.props.history.push("/dashboard")
            this.props.loggedIn(data.id)

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
                                <label>Email address</label>
                                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" required/>
                            </div>
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