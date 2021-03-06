import React, {Component} from 'react';
import {fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state= {
      term:''
    };
  }

  onInputChange(event) {
    this.setState({term:event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState((prevState, props) => {
      return {term:''};
    });
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input placeholder="Enter a city name in India" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary from-control">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
