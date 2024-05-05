import React from 'react';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function LocationsMap({ location }: { location: string }) {
  const position =
    location === 'canada'
      ? [43.648178, -79.375748]
      : location === 'australia'
      ? [-30.329531, 149.788193]
      : [51.507351, -0.127758];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ minHeight: '340px', minWidth: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        {/*   <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
}

export default LocationsMap;
