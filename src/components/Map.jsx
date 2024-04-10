import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { createControlComponent } from '@react-leaflet/core';

import createRoutineMachineLayer from './createRoutingMachineLayer';
import DraggableMarker from './DraggableMarker';

export default function Map({
  initialPosition,
  setInitialPosition,
  showForm,
  route,
  start,
}) {
  // Control is inmutable, so it has to be re-created on each render to reflect
  // route changes.
  const RoutingMachine = createControlComponent(createRoutineMachineLayer);
  const isEnd = start === route.length - 1;
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
      {showForm && (
        <DraggableMarker
          position={initialPosition}
          setPosition={setInitialPosition}
        />
      )}
      {!showForm && !isEnd && (
        /*
          <RoutingControl
            cordsStart={[route[start].lat, route[start].lng]}
            cordsEnd={[route[start + 1].lat, route[start + 1].lng]}
          />
          */
        <RoutingMachine
          cordsStart={[route[start].lat, route[start].lng]}
          cordsEnd={[route[start + 1].lat, route[start + 1].lng]}
        />
      )}
    </MapContainer>
  );
}
