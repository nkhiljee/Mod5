import React, {Component} from 'react';
// import {logo} from '../images/home9.jpeg'


export default class Home extends Component {
    render() {
        return(
            <div>
                <div className="intro">
                    <div className="row">
                        <div className="col">
                            <div className="intro-text">
                                <h1>Grow your business with the insight you deserve</h1><br/>
                                <h3>Analyze market behavior in the hottest markets. Calculate your risk by visually seeing trends in submarkets.</h3>
                            </div>  
                        </div>
                        <div className="col">
                            <img src={require('../images/home9.jpeg')} className="intro-img" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" class="btn btn-success">Get Started</button>
                            <button type="button" class="btn btn-success">Learn More</button>
                        </div>

                    </div>
                </div>

                <div className="intro2">

                </div>



                <div className="works">
                    <div className="row">
                        <div className="col">
1
                        </div>
                        <div className="col">
                            2
                        </div>
                        <div className="col">
                            3
                        </div>
                    </div>
                </div>


                <div className="next">
                    <div className="row">
                        <div className="col">
1
                        </div>
                        <div className="col">
                            2
                        </div>
                        <div className="col">
                            3
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}