import React, {Component} from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div ref="map" />
    );
  }

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom :12,
      center : {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }
}

export default GoogleMap;
