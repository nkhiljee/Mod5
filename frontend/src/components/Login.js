import React, {Component} from 'react';


export default class Login extends Component {
    render() {
        return(
            <div className="signin">
                <h1>Login</h1>
                <form onSubmit={null}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </div>
        )
    }
}