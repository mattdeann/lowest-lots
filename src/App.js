import logo from './logo.svg';
import React from 'react';
import './App.css';
import Search from './Search/Search';
import Results from './Results/Results';
import fetchResults from './util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    }

    this.getResults = this.getResults.bind(this);
  }

  getResults(searchTerm) {
    fetchResults(searchTerm)
      .then(res => this.setState({results: res.businesses}))
  }
  

  render() {
    return (
      <div className="App">
        <h3>Search for the Lowest Rated Parking Lots</h3>
        <Search getResults={this.getResults} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
