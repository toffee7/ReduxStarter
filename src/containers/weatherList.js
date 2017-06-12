import React, {Component} from 'react';
import { connect } from 'react-redux';
import SparklinesChart from '../components/sparklinesChart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lat={lat} lng={lon} /> </td>
        <td><SparklinesChart data={temps} color={"orange"}/></td>
        <td><SparklinesChart data={humidities} color={"green"}/></td>
      </tr>
    )
  }

  render() {
    console.log(this.props.weather);

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
