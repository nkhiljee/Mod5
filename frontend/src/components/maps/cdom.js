import React, {Component} from 'react'

export default class CDOM extends Component{

    render(){
        return(
            <div style={{width: "100%", height: "90vh"}}>
                <iframe width="100%" height="100%" frameBorder="0" src="https://nkhiljee.carto.com/builder/ca71383b-3b5d-4b57-82e2-0c5376ec317f/embed" allowFullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
            </div>
        )
    }
}