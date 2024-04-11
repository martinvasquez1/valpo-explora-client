import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const createRoutingMachineLayer = ({ cordsStart, cordsEnd }) => {
  const instance = L.Routing.control({
    position: 'topright',
    waypoints: [
      L.latLng(cordsStart[0], cordsStart[1]),
      L.latLng(cordsEnd[0], cordsEnd[1]),
    ],
    lineOptions: {
      addWaypoints: false,
      styles: [
        {
          color: '#1e3a8a',
        },
      ],
    },
  });

  return instance;
};

export default createRoutingMachineLayer;
