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
