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
      // selectedPlace: props,
    });
  };

  showRooms = () => {
    console.log('고고', this.props.mapdata);
    return this.props.mapdata.map((room, index) => {
      return (
        <Marker
          icon={{
            // url: img,
            size: { width: 50, height: 50 },
            anchor: { x: 15, y: 50 },
            scaledSize: { width: 50, height: 50 },
          }}
          key={index}
          id={index}
          position={{
            lat: room['lat'],
            lng: room['long'],
          }}
          onClick={this.onMarkerClick}
        >
          {/* {this.state.show && (
            <InfoWindow marker={this.state.show}>
              <div
              // style={{
              //   width: 100,
              //   height: 100,
              // }}
              >
                Info windowdsfdfgdgfdgf
              </div>
            </InfoWindow>
          )} */}
          <InfoWindow
            // marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h4>lskfjlskjfdl;skaj fvlwkf;l</h4>
            </div>
          </InfoWindow>
        </Marker>
      );
    });
  };

  onEventChecker = (e, aug, geo) => {};

  render() {
    const mapStyles = {
      width: '833px',
      height: '100vh',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          // lat: this.props.mapdata[0].lat,
          // lng: this.props.mapdata[0].long,
          lat: 37.490414,
          lng: 127.029711,
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
