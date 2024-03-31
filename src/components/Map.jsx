import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import RoutingControl from './RoutingControl';

export default function Map() {
  return (
    <MapContainer
      center={[-33.0318082, -71.6472691]}
      zoom={14}
      scrollWheelZoom={false}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutingControl
        cordsStart={[-33.040265, -71.632679]}
        cordsEnd={[-33.04085, -71.625888]}
      />
      <Marker position={[-33.0318082, -71.6472691]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
