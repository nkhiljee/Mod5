import React, {Component} from 'react'

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

  onScriptLoad() {
    const map = new window.google.maps.Map(
        document.getElementById(this.props.id),
        this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.google.com/maps/api/js?key=AIzaSyCMsUZdVxb-1l7OCVKWTIWMt1BlyGUQEh0`;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
        // Below is important. 
        //We cannot access google.maps until it's finished loading
        s.addEventListener('load', e => {
            this.onScriptLoad()
        })
    } else {
        this.onScriptLoad()
    }
  }

  render() {
    return (
      <div style={{ width: 800, height: 500 }} id={this.props.id} >

      </div>
    );
  }
}

export default Map

// class Map extends Component {

//     ComponentDidMount(){
//         var rectangle;
//         var map;
//         var infoWindow;
  
//         function initMap() {
//           map = new google.maps.Map(document.getElementById('map'), {
//             center: {lat: 44.5452, lng: -78.5389},
//             zoom: 9
//           });
  
//           var bounds = {
//             north: 44.599,
//             south: 44.490,
//             east: -78.443,
//             west: -78.649
//           };
  
//           // Define the rectangle and set its editable property to true.
//           rectangle = new google.maps.Rectangle({
//             bounds: bounds,
//             editable: true,
//             draggable: true
//           });
  
//           rectangle.setMap(map);
  
//           // Add an event listener on the rectangle.
//           rectangle.addListener('bounds_changed', showNewRect);
  
//           // Define an info window on the map.
//           infoWindow = new google.maps.InfoWindow();
//         }
//         // Show the new coordinates for the rectangle in an info window.
  
//         /** @this {google.maps.Rectangle} */
//         function showNewRect(event) {
//           var ne = rectangle.getBounds().getNorthEast();
//           var sw = rectangle.getBounds().getSouthWest();
  
//           var contentString = '<b>Rectangle moved.</b><br>' +
//               'New north-east corner: ' + ne.lat() + ', ' + ne.lng() + '<br>' +
//               'New south-west corner: ' + sw.lat() + ', ' + sw.lng();
  
//           // Set the info window's content and position.
//           infoWindow.setContent(contentString);
//           infoWindow.setPosition(ne);
  
//           infoWindow.open(map);
//         }
//     }

//     render(){
//         return(
//             <div style={{height:"500px", width: "500px"}}>
//                 <div id="map" style={{height:"100%", width: "100%"}}></div>
//             </div>
//         )
//     }

// }

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyCMsUZdVxb-1l7OCVKWTIWMt1BlyGUQEh0" /*       AIzaSyCMsUZdVxb-1l7OCVKWTIWMt1BlyGUQEh0      */
// })(Map)