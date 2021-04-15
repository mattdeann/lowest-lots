import logo from './logo.svg';
import React from 'react';
import './App.css';
import Search from './Search/Search';
import Results from './Results/Results';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    }

    this.getResults = this.getResults.bind(this);
  }

  getResults(searchTerm) {

    var requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer EiM7V1DDoVrAa5BvZbnCEhJUNvpWFVjjEcet4BfotoXl8l_aiKrPx_NfDFRWlBef2Imr5FKmnWMqWhs017ac95dSFDI_otKeeEuvsfkobVQEieRaiLOOSEJECjR2YHYx"
      },
      redirect: 'follow'
    };

    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=parking&location=${searchTerm}`, requestOptions)
      .then(response => response.json())
      .then(result => this.setState({results: result.businesses}))
      .catch(error => console.log('error', error));
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
