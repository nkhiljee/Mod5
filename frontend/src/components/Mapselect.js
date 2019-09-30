import React, {Component} from 'react'
import Map from "./Map"

export default class Mapselect extends Component{

    render(){        
        return(
            <div className="signin">
                <div className="row">
                    <div className="col">
                        <h1>SELECT YOUR AREA OF INTEREST</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"><br/>
                        <div>
                            <Map
                            id="myMap"
                            options={{
                            center: { lat: 29.770336, lng: -95.410610 },
                            zoom: 14
                            }}
                            onMapLoad={map => {
                            var rectangle = new window.google.maps.Rectangle({
                                bounds: {north: 29.77, south: 29.765, east: -95.41, west: -95.42},
                                strokeColor: "#12626c",
                                strokeOpacity: 0.8,
                                strokeWeight: 3,
                                fillColor: "#11a9a5",
                                fillOpacity: 0.35,
                                editable: true,
                                draggable: true,
                                map: map
                            })
                            rectangle.setMap(map)
                            rectangle.addListener('bounds_changed', () => {this.props.getCoords(rectangle)})
                            }}
                            />
                            
                        </div><br/>
                        <button className="btn btn-success" onClick={() => {this.props.propertyLimit(true)}}>Select Range</button>
                        <button className="btn btn-success" onClick={() => {this.props.propertyLimit(false)}}>Select All</button>

                    </div>
                    <div className="col"></div>

                </div>
            </div>
        )
    }
}