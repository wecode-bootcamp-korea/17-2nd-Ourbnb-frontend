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
    this.setState(
      {
        showingInfoWindow: true,
        activeMarker: marker,
        // selectedPlace: props,
      },
      () => {
        console.log(this.state.showingInfoWindow);
      }
    );
  };

  showRooms = () => {
    return this.props.mapdata.map((room, index) => {
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
    const mapStyles = {
      width: '833px',
      height: '1000px',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          // lat: this.props.mapdata[0].lat,
          // lng: this.props.mapdata[0].long,
          lat: 37.50632661159643,
          lng: 127.03090791778378,
        }}
        onClick={this.onEventChecker}
      >
        {this.showRooms()}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: `${APIKEY}`,
})(MapAPI);
