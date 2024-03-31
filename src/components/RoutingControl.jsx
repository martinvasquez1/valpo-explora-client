import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const createRoutineMachineLayer = ({ cordsStart, cordsEnd }) => {
  const instance = L.Routing.control({
    position: 'topleft',
    waypoints: [
      L.latLng(cordsStart[0], cordsStart[1]),
      L.latLng(cordsEnd[0], cordsEnd[1]),
    ],
    lineOptions: {
      styles: [
        {
          color: '#1e3a8a',
        },
      ],
    },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
