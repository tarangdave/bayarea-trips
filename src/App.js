import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoidGFyYW5nYWRhdmUiLCJhIjoiY2lxbnlzOW50MDFmcGZwbmh4aTNsNTBvMCJ9.6aajD-dmKN8aJIT5UG0aQQ';
var map = new mapboxgl.Map({
  container: 'root',
  style: 'mapbox://styles/mapbox/streets-v11'
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
