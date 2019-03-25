import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMapData } from '../../store/actions/appActions';

import Map from '../Map/Map';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.loadMapData();
  }

  render() {
    return (
      <div className="App">
        <Map/>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadMapData }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
