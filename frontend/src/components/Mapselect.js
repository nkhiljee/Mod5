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
                            center: { lat: 29.779625, lng: -95.395898 },
                            zoom: 13
                            }}
                            onMapLoad={map => {
                            var rectangle = new window.google.maps.Rectangle({
                                bounds: {north: this.props.coords.north, south: this.props.coords.south, east: this.props.coords.east, west: this.props.coords.west},
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