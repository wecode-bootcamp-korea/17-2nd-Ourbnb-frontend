import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './Map.scss';
import { APIKEY } from '../../config';

class MapAPI extends Component {
  showRooms = () => {
    const img =
      'https://png.pngtree.com/png-vector/20190216/ourlarge/pngtree-vector-location-icon-png-image_540821.jpg';
    return this.props.mapdata.map((room, index) => {
      return (
        <Marker
          icon={{
            url: img,
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
          onClick={this.handleInfo}
        >
          <InfoWindow>
            <div style={{ color: 'black' }}></div>
          </InfoWindow>
        </Marker>
      );
    });
  };

  onEventChecker = (e, aug, geo) => {};

  render() {
    const mapStyles = {
      width: '900px',
      height: '100%',
    };
    //console.log(APIKEY);
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.506496879199226, lng: 127.05404733645442 }}
        onClick={this.onEventChecker}
        draggable="true"
      >
        {this.showRooms()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${APIKEY}`,
})(MapAPI);
