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
  render () {
    return (
        <BrowserRouter>
          <div className="App">
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
        </BrowserRouter>

    );
  }

}

