import React, {Component} from 'react';
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            toggle: false
        }
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    logout = () => {
        localStorage.clear()
    }
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Re Analyzer </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    { localStorage.token ?
                        localStorage.account != "null" ?
                            localStorage.admin == "true" ?    
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin_dashboard">Admin Dashboard</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">Dashboard</Link>

                                    </li>
                                    {this.state.toggle == true ?
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.toggle}>Time Maps</a>
                                            <div className="dropdown-menu" x-placement="bottom-start" style={{display: "inline-block", position: "absolute", transform: "translate3d(0px, 30px, 0px)", top: "0px", left: "0px", "willChange": "transform"}}>
                                                <a className="dropdown-item" href="#">Price / SQFT</a>
                                                <a className="dropdown-item" href="#">Price</a>
                                                <a className="dropdown-item" href="#">CDOM</a>
                                            </div>
                                        </li>
                                    :
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.toggle}>Time Maps</a>
                                            <div className="dropdown-menu" x-placement="bottom-start" style={{position: "absolute", transform: "translate3d(0px, 39px, 0px)", top: "0px", left: "0px", "willChange": "transform"}}>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                    }
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/calculator">Calculator</Link>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" onClick={this.logout}>Logout</a>
                                    </li>
                                </ul>
                            :
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">Dashboard</Link>

                                    </li>
                                    {this.state.toggle == true ?
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.toggle}>Time Maps</a>
                                            <div className="dropdown-menu" x-placement="bottom-start" style={{display: "inline-block", position: "absolute", transform: "translate3d(0px, 30px, 0px)", top: "0px", left: "0px", "willChange": "transform"}}>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                    :
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.toggle}>Time Maps</a>
                                            <div className="dropdown-menu" x-placement="bottom-start" style={{position: "absolute", transform: "translate3d(0px, 39px, 0px)", top: "0px", left: "0px", "willChange": "transform"}}>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                    }
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/calculator">Calculator</Link>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" onClick={this.logout}>Logout</a>
                                    </li>
                                </ul>
                        :
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/calculator">Calculator</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/pricing">Pricing</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/" onClick={this.logout}>Logout</a>
                                </li>
                            </ul>                    
                    :
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#features">Features</a>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign Up</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>

                            </li>
                        </ul> 
                    }
                    

                </div>
                </nav>
            </div>
        )
    }
}