import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import RoutingControl from './RoutingControl';
import DraggableMarker from './DraggableMarker';

export default function Map({ initialPosition, setInitialPosition }) {
  return (
    <MapContainer
      center={[-33.0318082, -71.6472691]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker
        position={initialPosition}
        setPosition={setInitialPosition}
      />
      {/*
      <RoutingControl
        cordsStart={[-33.040265, -71.632679]}
        cordsEnd={[-33.04085, -71.625888]}
      />
      */}
    </MapContainer>
  );
}
