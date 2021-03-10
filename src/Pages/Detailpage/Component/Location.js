import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { APIKEY } from '../../../config';
import styled from 'styled-components';

const Location = ({ data, google }) => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  const maplat = parseFloat(data.lat);
  const maplng = parseFloat(data.long);
  const onEventChecker = (e, aug, geo) => {};
  return (
    <Container>
      <LocationTitle>위치</LocationTitle>
      <MapContainer>
        {data && (
          <Map
            google={google}
            zoom={14}
            initialCenter={{
              lat: maplat,
              lng: maplng,
            }}
            style={mapStyles}
            gestureHandling="greedy"
            onClick={onEventChecker}
          />
        )}
        {data && (
          <Marker
            position={{
              lat: maplat,
              lng: maplng,
            }}
            icon="/images/marker.png"
          />
        )}
      </MapContainer>
    </Container>
  );
};
export default GoogleApiWrapper({
  apiKey: `${APIKEY}`,
})(Location);

const LocationTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
const Container = styled.div`
  position: relative;
  width: 1245px;
  height: 700px;
  padding-top: 40px;
`;
const MapContainer = styled.div`
  position: absolute;
  top: 90px;
  width: 100%;
  height: 600px;
`;
