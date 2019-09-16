import React, {Component} from 'react';
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Re Analyzer </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
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

                </div>
                </nav>
            </div>
        )
    }
}