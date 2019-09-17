import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

export default class App extends React.Component {

  constructor(){
    super()
    this.state={
      clicked: false
    }
  }


  inquiry = () => {
    this.setState ({
      clicked: !this.state.clicked
    })
  }

  render () {
    return (
        <BrowserRouter>
          <div className="App">
            <button type="button" className="float" onClick={this.inquiry} data-toggle="modal" data-target="#exampleModal">
              <i className="fa fa-plus my-float"></i>
            </button>

            <Navbar/>
            
            <Switch>
              <Route path="/dashboard" render = {(routerProps) => <Dashboard {...routerProps} /> } />
              <Route path="/cart" render = {(routerProps) => <Cart {...routerProps} /> } />
              <Route path="/pricing" render = {(routerProps) => <Pricing {...routerProps} /> } />
              <Route path="/signup" render = {(routerProps) => <Signup {...routerProps} /> } />
              <Route path="/login" render = {(routerProps) => <Login {...routerProps} /> } />
              <Route path="/" render = {() => <Home /> } />
            </Switch>
            <Footer />
          </div>
    
        { (this.state.clicked == true) ? 
              <div style={{display: "block"}} className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">What is your inquiry?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.inquiry}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">

                  <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="fullname" className="form-control" name="fullname" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Phone</label>
                        <input type="email" className="form-control" name="phone" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Organization</label>
                        <input type="email" className="form-control" name="organization" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter organization name" onChange={this.handleChange}/>
                    </div>
                  </form>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            :
            <div>Nah</div>}
            </BrowserRouter>
    );
  }

}

