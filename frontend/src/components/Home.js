import React, {Component} from 'react';
import { Link } from 'react-router-dom'



export default class Home extends Component {
    render() {
        return(
            <div>
                <div className="intro">
                    <div className="row">
                        <div className="col">
                            <div className="intro-text">
                                <h1>Grow your business with the insight you deserve</h1><br/>
                                <h3>Analyze market behavior.<br/> Calculate risk by seeing trends.</h3>
                            </div>  
                        </div>
                        <div className="col">
                            <img src={require('../images/home9.jpeg')} className="intro-img" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <br/>
                        <br/>
                            <Link to="/pricing"><button type="button" className="btn btn-success">Get Started</button></Link>
                            <a href="#features"><button type="button" className="btn btn-success">Learn More</button></a>
                        </div>

                    </div>
                </div>

                <div className="intro2">
                    <div className="col-md-auto">
                        <h1><i>"Perferred tool by real estate investment firms and brokerages."</i></h1>
                        <h3><p>- USA Today</p></h3>
                    </div>
                </div>



                <div className="works">
                <a name="features" className="anchor"></a>
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <h1>Make data driven decisions</h1>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <div className="card" style={{width: "16rem"}}>
                            <img src={require('../images/home2.png')} className="works-img" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Review Market Data</strong></h5>
                                    <p className="card-text">View map based and graphical data</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="card" style={{width: "16rem"}}>
                            <img src={require('../images/home6.png')} className="works-img" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Analyze Market Trends</strong></h5>
                                    <p className="card-text">See the evolution of your market</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            <div className="card" style={{width: "16rem"}}>
                            <img src={require('../images/home3.png')} className="works-img" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Maximize and Reinvest</strong></h5>
                                    <p className="card-text">Buy and sell with more confidence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <br/>
                            <br/>
                            <br/>

                            <Link to="/pricing"><button type="button" className="btn btn-success">Get Started</button></Link>
                            <br/>
                            <br/>
                            <br/>

                        </div>
                    </div>
                </div>


                <div className="next">
                    <div className="row height">
                        <div className="col height">
                            <h1>Save time analyzing </h1>
                            <p>Identify key real estate matrics and see how they mature over time. Maybe you want to see how price per square foot varies in submarkets over decades or which investment area has the lowest DOM historically.</p>
                        </div>
                        <div className="col">
                            <img src={require('../images/home11.jpg')} className="next-img-1" />
                        </div>
                    </div>
                    <div className="row height">
                        <div className="col">
                            <img src={require('../images/home12.jpg')} className="next-img-1" />

                        </div>
                        <div className="col height">
                            <h1>Stop wasting resources </h1>
                            <p>Now that you've seen the trends spend time to understand why they are happening and where to invest. Simple coorelations or historical data look alike techniques will help you maximize your investment potential.</p>
                        </div>
                    </div>
                    <div className="row height">
                        <div className="col height">
                            <h1>Grow your business </h1>
                            <p>Now you know key metrics and their related trends. Its time to reset your goals and achieve maximum return. Youve spent your time where you should and derisked your investments.  Now you can better spend your time and find more properties.</p>
                        </div>
                        <div className="col">
                            <img src={require('../images/home10.jpeg')} className="next-img-3" />

                        </div>
                    </div>
                    <Link to="/pricing"><button type="button" className="btn btn-success">Get Started</button></Link>

                </div>
                <div className="prefooter">
                    <div className="row">
                        <div className="col">
                            <h1>Resources</h1>
                            <p>Case Studies</p>
                            <p>FAQs</p>
                            <p>Features</p>
                            <p>White Paper</p>
                        </div>
                        <div className="col">
                            <h1>Company</h1>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Contact Sales</p>
                            <p>Press</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

