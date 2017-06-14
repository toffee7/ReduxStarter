import React, {Component} from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mapg" />
    );
  }

  componentDidMount() {
    new google.maps.Map(document.getElementById('mapg'), {
      zoom :12,
      center : {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }
}

export default GoogleMap;
