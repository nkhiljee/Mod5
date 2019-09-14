import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Footer from './components/Footer'
import Cart from './components/Cart'




import {BrowserRouter, Route, Switch} from 'react-router-dom'

export default class App extends React.Component {
  render () {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route path="/cart" render = {(routerProps) => <Cart {...routerProps} /> } />
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

