import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import isEmpty from 'lodash/isEmpty';
import { StaticMap } from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import { getColor } from './mapUtils';
import { BINS, MAP_BOX_TOKEN } from '../../constants';

import 'leaflet/dist/leaflet.css';
import './map.css';

class MapComponent extends Component {
  state = {
    x: null,
    y: null,
    hoveredObject: null,
    viewState: {
      latitude: 37.7749,
      longitude: -122.4194,
      zoom: 10,
      minZoom: 3,
      maxZoom: 18,
      bearing: 0,
      pitch: 0,
    },
    viewStateCalled: false
  };

  onHover = ({x, y, object}) => {
    this.setState({ x, y, hoveredObject: object });
  }


  renderTooltip() {
    const { x, y, hoveredObject } = this.state;

    if(!hoveredObject) return null;

    const properties = hoveredObject.properties;
    const speed = Math.round(parseFloat(properties.speed_avg)*100)/100;
    const start_time = properties.start_time;
    const end_time = properties.end_time;

    return (
      <div className="tooltip" style={{left: x, top: y}}>
        <div><b>Date:</b><span> </span> <Moment format="MM-DD-YYYY">{start_time}</Moment></div>
        <div><b>Start time:</b> <Moment format="HH:mm:ss">{start_time}</Moment></div>
        <div><b>End time:</b><span> </span> <Moment format="HH:mm:ss">{end_time}</Moment></div>
        <div><b>Speed:</b> {speed}</div>
      </div>
    );

  }

  renderLayers() {
    const { data } = this.props;
    if(isEmpty(data)) return [];
    let layers = [];
    data.forEach((item, index) => {
      const geojson_data = item;
      layers.push(
        new GeoJsonLayer({
          id: index,
          data: geojson_data,
          opacity: 1,
          stroked: false,
          filled: false,
          lineWidthMinPixels: 0.5,
          parameters: {
            depthTest: false
          },
          zIndex: 1,
          getLineColor: f => getColor(f.properties.speed_avg),
          getLineWidth: 2,
          pickable: true,
          onHover: this.onHover
        })
      );
    });
    return layers;
  }

  onViewStateChange = ({ viewState }) => {
    this.setState({ viewState, viewStateCalled: true });
  }

  isLoading() {
    const { data } = this.props;
    return isEmpty(data);
  }

  render() {
    return (
      <div className="map-container">
        <DeckGL
          layers={this.renderLayers()}
          pickingRadius={5}
          viewState={this.state.viewState}
          onViewStateChange={this.onViewStateChange}
          controller={true}
        >
          <StaticMap
            reuseMaps
            mapStyle="mapbox://styles/mapbox/light-v9"
            preventStyleDiffing={true}
            mapboxApiAccessToken={MAP_BOX_TOKEN}
          />

          {this.renderTooltip()}
        </DeckGL>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    data: state.app.map_data,
    single_trip: state.app.single_trip
  };
}

export default connect(mapStateToProps, null)(MapComponent);
