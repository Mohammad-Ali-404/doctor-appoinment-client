//TODO
import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '400px'
};

const location = {
    lat: 23.733348, lng: 90.406707
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }
const Map = () => {
    return (
        <LoadScript
      googleMapsApiKey='AIzaSyBtBR-isanGaB7n_BPv6pi_sm2-gfWzaE'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
      >
         <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript>
    );
};

export default React.memo(Map)