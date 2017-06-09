import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state= {
      term:''
    };
  }

  onInputChange(event) {
    this.setState((prevState, props) => {
      return {term:e.target.value};
    });
  }
  render() {
    return(
      <form className="input-group">
        <input placeholder="Enter Value" value={this.state.term} onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
