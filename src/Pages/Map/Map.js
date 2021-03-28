import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './Map.scss';
import { APIKEY } from '../../config';

class MapAPI extends Component {
  state = {
    show: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
    });
  };

  showRooms = () => {
    return this.props.mapdata[0].mapdata.map((room, index) => {
      return (
        <Marker
          key={index}
          position={{
            lat: room['lat'],
            lng: room['long'],
          }}
          onClick={this.onMarkerClick}
        >
          {this.state.showingInfoWindow && (
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <span
                style={{
                  width: 100,
                  height: 100,
                }}
              >
                Info windowdsfdfgdgfdgf
              </span>
            </InfoWindow>
          )}
        </Marker>
      );
    });
  };

  onEventChecker = (e, aug, geo) => {};

  render() {
    const { mapdata } = this.props.mapdata[0];
    const mapStyles = {
      width: '833px',
      height: '1000px',
    };

    return (
      mapdata && (
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{
            lat: 37.50632661159643,
            lng: 127.03090791778378,
          }}
          onClick={this.onEventChecker}
        >
          {this.showRooms()}
        </Map>
      )
    );
  }
}
export default GoogleApiWrapper({
  apiKey: `${APIKEY}`,
})(MapAPI);
